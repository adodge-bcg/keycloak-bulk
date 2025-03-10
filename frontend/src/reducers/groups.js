import { handle } from 'redux-pack';
import * as types from '../actions/types';
import Resource from '../models/Resource';

const Groups = (state = new Resource(), action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOAD_GROUPS:
      return handle(state, action, {
        start: prevState => prevState.merge({ isLoading: true, error: null }),
        finish: prevState => prevState.merge({ isLoading: false }),
        failure: prevState => prevState.merge({ error: payload }),
        success: prevState => prevState.merge({ value: payload }),
      });
    default:
      return state;
  }
}

export default Groups
