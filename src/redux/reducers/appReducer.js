import _ from 'lodash';
import STATUS from '../../Constants';
import { actions } from '../actions';

const initialState = {
  status: STATUS.NOT_STARTED,
  data: undefined
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_HOST_DATA:
      return _.merge({}, state, {
        status: STATUS.FETCHING
      });

    case actions.SUCCESS_HOST_DATA:
      return _.merge({}, state, {
        status: STATUS.SUCCESS,
        data: action.json.data
      });

    case actions.SHOW_HOST_DATA:
      return _.merge({}, state, {
        status: STATUS.SUCCESS
      });

    case actions.FAILED_HOST_DATA:
      return _.merge({}, state, {
        status: STATUS.FAILED,
        error: 'COULD NOT LOAD DATA'
      });

    default:
      return state;
  }
};

export default appReducer;
