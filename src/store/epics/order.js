'use strict';

import Rx from 'rxjs';

import {combineEpics} from 'redux-observable';
import {push, replace} from 'react-router-redux';
import {browserHistory} from 'react-router';

import {
  submitOrder,
} from '../../lib/backend';

const {
  SUBMIT_ORDER_PROCESS,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILURE
} = require('../actionTypes').default;

const submitOrderSuccess = (payload) => ({payload, type: SUBMIT_ORDER_SUCCESS});
const submitOrderFailure = (payload) => ({payload, type: SUBMIT_ORDER_FAILURE});
const submitOrderRequest = (action$, store) =>
  action$.ofType(SUBMIT_ORDER_PROCESS)
    .pluck('payload')
    .flatMap(payload => {
      return submitOrder({
        design: store.getState().getIn(['board', 'board']),
        ...payload
      })
        .map((payloadFromServer)=>{
          return submitOrderSuccess(payloadFromServer);
        })
        .catch((error) => Rx.Observable.of(error)
          .do((error) =>{
            console.log('submit order failure');
          })
          .map(()=>submitOrderFailure(payload))
        )
    });

export default combineEpics(
  submitOrderRequest,
);
