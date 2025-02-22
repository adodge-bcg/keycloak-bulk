import { INITIAL_IMPORT_GROUPS_TEXT } from '../constants'
import * as types from '../actions/types'

const ImportGroupsText = (state = INITIAL_IMPORT_GROUPS_TEXT, action) => {
  const { type, text } = action;
  switch (type) {
    case types.UPDATE_IMPORT_GROUPS_TEXT:
      return text;
    default:
      return state;
  }
}

export default ImportGroupsText
