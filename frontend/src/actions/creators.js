import * as types from './types'
import keycloak from '../services/Keycloak'
import oidc from '../services/OIDC'

export const loadUsers = () => ({
  type: types.LOAD_USERS,
  promise: keycloak.loadUsers()
})

export const updateImportUsersText = text => ({
  type: types.UPDATE_IMPORT_USERS_TEXT,
  text
})

/**
 * Import users.
 * @param {ImportUser[]} importUsers 
 */
export const executeImportUsers = importUsers => ({
  type: types.EXECUTE_IMPORT_USERS,
  promise: dispatch =>
    keycloak.createUsers(
      importUsers.map(importUser => importUser.user),
      (index, resource) => dispatch(notifyImportUser(index, resource)))
})

export const notifyImportUser = (index, resource) => ({
  type: types.NOTIFY_IMPORT_USER,
  index,
  resource
})

export const loadGroups = () => ({
  type: types.LOAD_GROUPS,
  promise: keycloak.loadGroups()
})

export const updateImportGroupsText = text => ({
  type: types.UPDATE_IMPORT_GROUPS_TEXT,
  text
})

/**
 * Import groups.
 * @param {ImportGroup[]} importGroups 
 */
export const executeImportGroups = importGroups => ({
  type: types.EXECUTE_IMPORT_GROUPS,
  promise: dispatch =>
    keycloak.createGroups(
      importGroups.map(importGroup => importGroup.group),
      (index, resource) => dispatch(notifyImportGroup(index, resource)))
})

export const notifyImportGroup = (index, resource) => ({
  type: types.NOTIFY_IMPORT_GROUP,
  index,
  resource
})

export const selectTab = name => ({
  type: types.SELECT_TAB,
  name
})

export const signIn = () => ({
  type: types.OIDC_SIGN_IN,
  promise: oidc.signIn()
})

export const createSession = () => ({
  type: types.OIDC_CREATE_SESSION,
  promise: oidc.createSession()
})
