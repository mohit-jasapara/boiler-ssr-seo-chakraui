import Requester from '../../utils/Requester';
import BASE_URL from '../../common/BaseUrl';
import URIS from '../Request_URIS';

const GEN_ERROR = 'Oops! Something went wrong.';

const RequestURIS = {};
Object.keys(URIS).forEach(key => {
  if (URIS.hasOwnProperty(key)) {
    RequestURIS[key] = BASE_URL + URIS[key];
  }
});

export const actions = {
  FETCH_HOST_DATA: 1,
  SUCCESS_HOST_DATA: 2,
  FAILED_HOST_DATA: 3,

  SHOW_HOST_DATA: 14
};

export function fetchHostDataAction(host) {
  return genGetWrapper(
    {
      url: host
    },
    RequestURIS.HOST_DATA_URL,
    actions.FETCH_HOST_DATA,
    actions.SUCCESS_HOST_DATA,
    actions.FAILED_HOST_DATA
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
