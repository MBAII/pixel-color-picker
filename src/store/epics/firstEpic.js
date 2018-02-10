'use strict';

import Rx from 'rxjs';

import {combineEpics} from 'redux-observable';
import {push, replace} from 'react-router-redux';
import {browserHistory} from 'react-router';

fooAction
import {
  fooAction,
} from '../../lib/backend';

const {
  FOO_ACTION,
} = require('../actionTypes').default;

const fooActionFailure = (payload) => ({payload, type: FOO_ACTION_FAILURE});
const fooActionSuccess = (payload) => ({payload, type: FOO_ACTION_SUCCESS});
const fooActionRequest = (action$, store) =>
  action$.ofType(FOO_ACTION)
    .pluck('payload')
    .flatMap(payload => {
      //...
      return fooAction(payload)
        .map((payloadFromServer)=>{
          return fooActionSuccess(payload);
        })
        .catch((error) => Rx.Observable.of(error)
          .do((error) =>{
            console.log(`Invalid Login: ${error.response}`);
          })
          .map(()=>fooActionFailure(payload))
        )
    });

export default combineEpics(
  fooActionRequest,
);
