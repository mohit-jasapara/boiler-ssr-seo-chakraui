import _ from 'lodash';
import STATUS from '../../Constants';
import { DEFAULT_SCHOOL } from '../../data';
import { getMenu } from '../../data/Menu';
import { actions } from '../actions';

const initialState = {
  status: STATUS.NOT_STARTED,
  data: undefined
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_SCHOOL_DATA:
      return _.merge({}, state, {
        status: STATUS.FETCHING
      });

    case actions.LOADED_SCHOOL_DATA:
      return _.merge({}, state, {
        status: STATUS.SUCCESS,
        school: action.json.data,
        menu: getMenu(
          action.json.data.features
            ? _.union(action.json.data.features, [
                1,
                2,
                3,
                15,
                17,
                18,
                19,
                21,
                32,
                41
              ])
            : [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                23,
                33
              ]
        )
      });

    case actions.SHOW_SCHOOL_DATA:
      return _.merge({}, state, {
        status: STATUS.SUCCESS
      });

    case actions.FAILED_SCHOOL_DATA:
      return _.merge({}, state, {
        status: STATUS.FAILED,
        error: 'COULD NOT LOAD DATA'
      });

    case actions.LOAD_TC_DATA:
      return _.merge({}, state, {
        toaststatus: STATUS.FETCHING,
        school_id: action.data
      });

    case actions.LOADED_TC_DATA:
      if (!action.json.data.length) {
        return _.merge({}, state, {
          toaststatus: STATUS.FAILED,
          toastmessage: 'TC NOT FOUND'
        });
      }
      return _.merge({}, state, {
        toaststatus: STATUS.SUCCESS,
        toastmessage: 'TC FOUND',
        tc: action.json.data,
        school_id: ''
      });

    case actions.FAILED_TC_DATA:
      return _.merge({}, state, {
        toaststatus: STATUS.FAILED,
        toastmessage: 'COULD NOT LOAD DATA'
      });

    case actions.DEMO_LOADED_SCHOOL_DATA:
      return _.merge({}, state, {
        status: STATUS.SUCCESS,
        school: DEFAULT_SCHOOL
      });

    case actions.LOAD_CONTACT_REQUEST:
      return _.merge({}, state, {
        toaststatus: STATUS.FETCHING,
        toastmessage: 'Loading...'
      });

    case actions.LOADED_CONTACT_REQUEST:
      return _.merge({}, state, {
        toaststatus: STATUS.SUCCESS,
        toastmessage: 'Success'
      });

    case actions.FAILED_CONTACT_REQUEST:
      return _.merge({}, state, {
        toaststatus: STATUS.FAILED
      });

    case actions.LOAD_ADMISSIONFORM_REQUEST:
      return _.merge({}, state, {
        admissionForm: STATUS.FETCHING
      });

    case actions.LOADED_ADMISSIONFORM_REQUEST:
      return _.merge({}, state, {
        admissionForm: STATUS.SUCCESS,
        formSubmitted: true,
        enquiry: action.json.data
      });

    case actions.FAILED_ADMISSIONFORM_REQUEST:
      return _.merge({}, state, {
        admissionForm: STATUS.FAILED,
        toastmessage: action.error
      });

    case actions.GET_WEBSITE_SUBJECTS:
      return _.merge({}, state, {
        subjectsStatus: STATUS.FETCHING,
        toastmessage: 'Loading...'
      });

    case actions.RECEIVE_WEBSITE_SUBJECTS:
      return _.merge({}, state, {
        subjectsStatus: STATUS.SUCCESS,
        subjects: action.json.data
      });

    case actions.FAILED_WEBSITE_SUBJECTS:
      return _.merge({}, state, {
        subjectsStatus: STATUS.FAILED,
        toastmessage: 'Failed'
      });

    case actions.ADD_CAREER_FORM:
      return _.merge({}, state, {
        careerForm: STATUS.FETCHING
      });

    case actions.ADDED_CAREER_FORM:
      return _.merge({}, state, {
        careerForm: STATUS.SUCCESS,
        careerPrintInfo: action.json.data
      });

    case actions.FAILED_CAREER_FORM:
      return _.merge({}, state, {
        careerForm: STATUS.FAILED
      });

    case actions.GET_STANDARDS:
      return _.merge({}, state, {
        getStandards: STATUS.FETCHING
      });

    case actions.RECEIVED_STANDARDS:
      return _.merge({}, state, {
        getStandards: STATUS.SUCCESS,
        standards: action.json.data
      });

    case actions.FAILED_STANDARDS:
      return _.merge({}, state, {
        getStandards: STATUS.FAILED
      });

    case actions.GET_STATES:
      return _.merge({}, state, {
        getStates: STATUS.FETCHING
      });

    case actions.RECEIVED_STATES:
      return _.merge({}, state, {
        getStates: STATUS.SUCCESS,
        states: action.json.data
      });

    case actions.FAILED_STATES:
      return _.merge({}, state, {
        getStates: STATUS.FAILED
      });

    case actions.GET_BIRTHDAYS:
      return _.merge({}, state, {
        getBirthdays: STATUS.FETCHING
      });

    case actions.RECEIVED_BIRTHDAYS:
      return _.merge({}, state, {
        getBirthdays: STATUS.SUCCESS,
        birthdays: action.json.students.data
      });

    case actions.FAILED_BIRTHDAYS:
      return _.merge({}, state, {
        getBirthdays: STATUS.FAILED
      });

    default:
      return state;
  }
};

export default MainReducer;
