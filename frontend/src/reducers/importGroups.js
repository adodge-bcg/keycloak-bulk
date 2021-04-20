import { handle } from 'redux-pack';
import { List } from 'immutable';
import { INITIAL_IMPORT_GROUPS_TEXT } from '../constants'
import * as types from '../actions/types'
import GroupFactory from '../models/GroupFactory'
import ImportGroup from '../models/ImportGroup'
import Resource from '../models/Resource';

const importGroupsOf = text =>
  GroupFactory.parseText(text).map(group => new ImportGroup({ group }))

const ImportGroups = (state = new Resource({ value: importGroupsOf(INITIAL_IMPORT_GROUPS_TEXT) }), action) => {
  const { type } = action;
  switch (type) {
    case types.UPDATE_IMPORT_GROUPS_TEXT:
      let { text } = action;
      return state.merge({ value: importGroupsOf(text) });

    case types.EXECUTE_IMPORT_GROUPS:
      let { payload } = action;
      return handle(state, action, {
        start: prevState => prevState.merge({ isLoading: true, error: null }),
        finish: prevState => prevState.merge({ isLoading: false }),
        failure: prevState => prevState.merge({ error: payload }),
        success: prevState => prevState,
      });

    case types.NOTIFY_IMPORT_GROUP:
      let { index, resource } = action;
      let list = List(state.value);
      let altered = list.set(index, list.get(index).merge({ resource })).toArray();
      return state.merge({ value: altered });

    default:
      return state;
  }
}

export default ImportGroups
