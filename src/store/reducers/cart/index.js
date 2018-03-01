'use strict';
import {List} from 'immutable';
import * as core from './core';

const {
  UPDATE_ADD_TO_CART,
} = require('../../actionTypes').default;

const initialState = core.InitialState();

export default function (state = initialState, {type, payload}) {
  switch (type) {

    case UPDATE_ADD_TO_CART:
      return state.set('addToCart', List(payload));

  };
  return state;
}
