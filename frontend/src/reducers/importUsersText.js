import { INITIAL_IMPORT_USERS_TEXT } from '../constants'
import * as types from '../actions/types'

const ImportUsersText = (state = INITIAL_IMPORT_USERS_TEXT, action) => {
  const { type, text } = action;
  switch (type) {
    case types.UPDATE_IMPORT_USERS_TEXT:
      return text;
    default:
      return state;
  }
}

export default ImportUsersText
