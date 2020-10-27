import Requester from '../../utils/Requester';
import BASE_URL from '../../common/BaseUrl';
import URIS from '../Request_URIS';

const GEN_ERROR = 'Something went wrong';

const RequestURIS = {};
Object.keys(URIS).forEach(key => {
  if (URIS.hasOwnProperty(key)) {
    RequestURIS[key] = BASE_URL + URIS[key];
  }
});

export const actions = {
  LOAD_SCHOOL_DATA: 1,
  LOADED_SCHOOL_DATA: 2,
  FAILED_SCHOOL_DATA: 3,
  DEMO_LOADED_SCHOOL_DATA: 4,
  LOAD_CONTACT_REQUEST: 5,
  LOADED_CONTACT_REQUEST: 6,
  FAILED_CONTACT_REQUEST: 7,
  LOAD_ADMISSIONFORM_REQUEST: 8,
  LOADED_ADMISSIONFORM_REQUEST: 9,
  FAILED_ADMISSIONFORM_REQUEST: 10,
  LOAD_TC_DATA: 11,
  LOADED_TC_DATA: 12,
  FAILED_TC_DATA: 13,
  SHOW_SCHOOL_DATA: 14,
  GET_WEBSITE_SUBJECTS: 15,
  RECEIVE_WEBSITE_SUBJECTS: 16,
  FAILED_WEBSITE_SUBJECTS: 17,
  ADD_CAREER_FORM: 18,
  ADDED_CAREER_FORM: 19,
  FAILED_CAREER_FORM: 20,
  GET_STANDARDS: 21,
  RECEIVED_STANDARDS: 22,
  FAILED_STANDARDS: 23,
  GET_STATES: 24,
  RECEIVED_STATES: 25,
  FAILED_STATES: 26,
  GET_BIRTHDAYS: 27,
  RECEIVED_BIRTHDAYS: 28,
  FAILED_BIRTHDAYS: 29
};

export function getSchoolAction(host) {
  if (host.search('schoollog') === -1) {
    // const host = psl.parse(location.hostname);
  }
  return genGetWrapper(
    {
      url: host,
      include: 'website,state'
    },
    RequestURIS.SCHOOL_DATA_URL,
    actions.LOAD_SCHOOL_DATA,
    actions.LOADED_SCHOOL_DATA,
    actions.FAILED_SCHOOL_DATA
  );
}

export function getStates() {
  return genGetWrapper(
    {},
    RequestURIS.GET_STATES,
    actions.GET_STATES,
    actions.RECEIVED_STATES,
    actions.FAILED_STATES,
    false
  );
}

export const genAction = (type, data) => ({
  type,
  data
});

const loadGen = (type, data) => ({ type, data });
const receiveGen = (event, json) => ({ type: event, json });
const genFailed = (event, error) => ({ type: event, error });

export const genWrapper = (
  method,
  data,
  URI,
  callEvent,
  successEvent,
  failEvent,
  isForm,
  extraData,
  type,
  headers,
  mimetype,
  callback
) =>
  function(dispatch, state) {
    dispatch(loadGen(callEvent, data));
    return Requester(
      URI,
      method,
      data,
      data => {
        if (data.error) return dispatch(genFailed(failEvent, data.error));
        dispatch(receiveGen(successEvent, data));
        callback && callback(data);
      },
      (jx, error) =>
        dispatch(
          genFailed(
            failEvent,
            (error
              ? error.errors && error.errors.name && error.errors.name.length
                ? error.errors.name[0]
                : error.message
              : '') || GEN_ERROR
          )
        ),
      type,
      extraData,
      isForm,
      headers,
      mimetype
    );
  };

export const genGetWrapper = (
  data,
  URI,
  callEvent,
  successEvent,
  failEvent,
  isForm,
  extraData,
  headers
) =>
  genWrapper(
    'GET',
    data,
    URI,
    callEvent,
    successEvent,
    failEvent,
    isForm,
    extraData,
    'json',
    headers
  );

export const genPostWrapper = (
  data,
  URI,
  callEvent,
  successEvent,
  failEvent,
  isForm,
  extraData,
  headers
) =>
  genWrapper(
    'POST',
    data,
    URI,
    callEvent,
    successEvent,
    failEvent,
    isForm,
    extraData,
    'json',
    headers
  );
