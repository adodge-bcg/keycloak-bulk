import oidc from '../services/OIDC';

const SignIn = (state = {
  isAuthenticated: oidc.getAuthorizationHeader() !== undefined,
}, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}

export default SignIn
