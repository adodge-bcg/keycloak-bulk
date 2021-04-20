import oidc from './OIDC';
import User from '../models/User';
import ResourceError from '../models/ResourceError';
import Resource from '../models/Resource';

class Keycloak {
  /**
   * Load users.
   * @returns {Promise<User[]>}
   */
  async loadUsers() {
    const json = await this.fetchJSON('/api/users');
    if (json instanceof Array) {
      return json.map(user => new User(user));
    } else {
      throw new TypeError(`Unexpected response type: ${json}`);
    }
  }

  /**
   * Create users.
   * @param {User[]} users array of users
   * @param {(index: Number, resource: Resource) => void} notify progress notification callback
   */
  async createUsers(users, notify = (index, resource) => { }) {
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      notify(index, new Resource({ isLoading: true }));
      try {
        const value = await this.createUser(user);
        notify(index, new Resource({ value }));
      } catch (error) {
        notify(index, new Resource({ error }));
      }
    }
  }

  /**
   * Create a user with an initial password.
   * @param {User} user 
   * @returns {Promise<User>}
   */
  async createUser(user) {
    const { username, initialPassword, firstName, lastName, email, enabled, groups } = user;
    const credentials = [];
    if (initialPassword !== "") {
      credentials.push({
        temporary: true,
        type: 'password',
        value: initialPassword,
      })
    }
    const json = await this.fetchJSON('/api/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        username, firstName, lastName, email, enabled,
        credentials,
        groups: groups.split("|")
      }),
    })
    return new User(json);
  }

  /**
   * Fetch JSON.
   * @param {string} uri 
   * @param {RequestInit} options 
   * @param {number} retryCount
   */
  async fetchJSON(uri, options = {}, retryCount = 0) {
    let response;
    let value;
    try {
      response = await fetch(uri, {
        ...options,
        headers: {
          authorization: oidc.getAuthorizationHeader(),
          'x-retry-count': retryCount,
          ...options.headers
        }
      });
      value = await response.json();
    } catch (e) {
      throw new ResourceError({ code: typeof e, message: `${e}` });
    }
    const status = response.status;
    if (response.ok) {
      return value;
    } else if (status === 401 && retryCount === 0) {
      await oidc.refreshSession();
      return await this.fetchJSON(uri, options, retryCount + 1);
    } else {
      throw new ResourceError({ code: value.error, message: value.error_message, status });
    }
  }
}

export default new Keycloak()
