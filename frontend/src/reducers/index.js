import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './users'
import importUsers from './importUsers'
import importUsersText from './importUsersText'
import groups from './groups'
import importGroups from './importGroups'
import importGroupsText from './importGroupsText'
import signIn from './signIn'
import signInRequest from './signInRequest'

export default combineReducers({
  users,
  importUsers,
  importUsersText,
  groups,
  importGroups,
  importGroupsText,
  signIn,
  signInRequest,
  router: routerReducer,
})
