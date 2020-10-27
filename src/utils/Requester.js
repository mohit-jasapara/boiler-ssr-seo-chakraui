import $ from 'jquery';

let onGoing = false;
const requests = [];

let accessToken = null;
let refreshToken = null;

/**
 * general requester
 */
const Requester = (
  url,
  method,
  params,
  callback,
  callbackFailure,
  dataType,
  extraData,
  checkForm,
  headers,
  mimetype
) => {
  if (url != null) {
    requests.push([
      url,
      method,
      params,
      callback,
      callbackFailure,
      dataType,
      extraData,
      checkForm,
      headers,
      mimetype
    ]);
  }

  if (!onGoing) {
    if (requests.length > 0) {
      const request = requests.shift();
      singleRequest(request);
    }
  }
};

/**
 * single request
 */
const singleRequest = requestParams => {
  const url = requestParams[0];
  const type = requestParams[1];
  const data = requestParams[2];
  const callback = requestParams[3];
  const callbackFailure = requestParams[4];
  const checkForm = requestParams[7];
  const headers = requestParams[8];
  let dataType = 'json';
  const mimetype = requestParams[9];
  const extraData = requestParams[6];

  const $accessToken = getAccessToken();
  if ($accessToken && !checkForm) data.access_token = $accessToken;
  else if ($accessToken && checkForm) data.append('access_token', $accessToken);

  if (requestParams[5] !== undefined) dataType = requestParams[5];

  // marking that some request is in progress
  onGoing = true;

  const requestObject = { url, type, data, dataType };

  if (checkForm) {
    requestObject.processData = false;
    requestObject.contentType = false;
  }

  if (headers) requestObject.headers = headers;
  if (mimetype) requestObject.mimeType = mimetype;

  $.ajax(requestObject)
    .done(data => {
      onGoing = false;
      callback(extraData ? { data, extraData } : data);
      Requester(null);
    })
    .fail((jx, data) => {
      onGoing = false;
      if (jx.status === 460) {
        Requester(
          '/api/auth/refresh',
          'POST',
          { refreshToken: getRefreshToken() },
          receiveRefreshToken,
          refreshingFailed,
          'json',
          false
        );
        Requester(
          url,
          type,
          data,
          callback,
          callbackFailure,
          dataType,
          checkForm
        );
      } else {
        onGoing = false;
        callbackFailure(jx, jx.responseJSON);
        Requester(null);
      }
    });
};

const getUser = () => {
  try {
    return JSON.parse(window.sessionStorage.getItem('user'));
  } catch (e) {
    window.sessionStorage.removeItem('user');
    window.location.href = '/';
  }
};

const setUser = user => {
  window.sessionStorage.setItem('user', JSON.stringify(user));
};

const getAccessToken = () => {
  if (!accessToken) {
    accessToken = getUser();
    if (accessToken) accessToken = accessToken.access_token;
    else accessToken = undefined;
  }
  return accessToken;
};

const getRefreshToken = () => {
  if (!refreshToken) {
    refreshToken = getUser();
    refreshToken = refreshToken.refresh_token;
  }
  return refreshToken;
};

const receiveRefreshToken = data => {
  const user = getUser();
  user.access_token = data.access_token;
  setUser(user);
};

const refreshingFailed = (jx, data) => {
  window.sessionStorage.removeItem('user');
  window.location.href = '/';
};

export default Requester;
