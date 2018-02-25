'use strict';

const {
  SUBMIT_ORDER_PROCESS,
} = require('../actionTypes').default;

export const submitOrder = (payload) => ({
  type: SUBMIT_ORDER_PROCESS,
  payload: payload,
});
