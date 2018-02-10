import "babel-polyfill";
import {Observable} from 'rxjs/Observable';
import _isNil from 'lodash/isNil';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {getAuthToken} from './authToken';
export const API_URL = window.location.origin + '/vhp-psa/server/api/';

export function getReq (url, action, token) {
  const headers = prepareAuthorizationHeaders(token);
  return Observable.ajax.getJSON(prepareUrl(url, action), headers)
    .catch(parseAjaxError);
}

export function getReqWithBody (url, action, body, token) {
  const headers = prepareAuthorizationHeaders(getAuthToken());
  return Observable.ajax.getJSON(prepareUrlWithParams(url, action, body), headers)
    .catch(parseAjaxError);
}

export function postReq (url, action, body, token) {
  const headers = prepareJSONHeaders(
    prepareAuthorizationHeaders(token)
  );
  const lang = window.location.href.includes('/fr/')?'fr':'en';
  if (_isNil(body)){
    body = {lang: lang}
  }
  else{
    body.lang = window.location.href.includes('/fr/')?'fr':'en';
  }
  return Observable.ajax.post(prepareUrl(url, action), body, headers)
    .map(parseAjaxResponse)
    .catch(parseAjaxError);
}

export function putReq (url, action, body, token) {
  const headers = prepareJSONHeaders(
    prepareAuthorizationHeaders(token)
  );
  return Observable.ajax.put(prepareUrl(url, action), body, headers)
    .map(parseAjaxResponse)
    .catch(parseAjaxError);
}

export function patchReq (url, action, body, token) {
  const headers = prepareJSONHeaders(
    prepareAuthorizationHeaders(token)
  );
  return Observable.ajax.patch(prepareUrl(url, action), body, headers)
    .map(parseAjaxResponse)
    .catch(parseAjaxError);
}

export function deleteReq (url, action, body, token) {
  const headers = prepareAuthorizationHeaders(token);
  return Observable.ajax.delete(prepareUrl(url, action), token, body, headers)
    .map(parseAjaxResponse)
    .catch(parseAjaxError);
}

export function getAjaxReq (url, action, token) {
  const headers = prepareAuthorizationHeaders(token);
  return Observable.ajax.get(prepareUrl(url, action), headers)
    .map(parseAjaxResponse)
    .catch(parseAjaxError);
}

function prepareUrl(file, action) {
  return `${API_URL}${file}?action=${action}`;
}

function prepareUrlWithParams(file, action, params) {
  var url = `${API_URL}${file}?action=${action}`;
  const newParams = params?JSON.parse(JSON.stringify(params).replace('+', '%2B')):JSON.parse(JSON.stringify({}))
  for (var key in newParams) {
    url += `&${key}=${newParams[key]}`;
  }
  var lang = window.location.href.includes('/fr/')?'fr':'en';
  url += '&lang=' + lang;
  return url;
}

function prepareAuthorizationHeaders (token) {
  const headers = {};
  const pureToken = getAuthToken();
  if (!_isNil(pureToken)) {
    headers.Authorization = `Bearer ${pureToken}`;
  }
  return headers;
}

function prepareJSONHeaders (headers) {
  return Object.assign({}, headers, {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });
}

// function _prepareJSONHeaders (headers, body) {
//   return Object.assign({}, headers, {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   });
// }

function parseAjaxResponse (response) {
  return response.response;
}

function parseAjaxError (response) {
  throw response.xhr;
}
