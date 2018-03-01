'use strict';

const {
  UPDATE_ADD_TO_CART,
} = require('../actionTypes').default;

export const updateAddToCart = (payload) => ({
  type: UPDATE_ADD_TO_CART,
  payload: payload,
});
