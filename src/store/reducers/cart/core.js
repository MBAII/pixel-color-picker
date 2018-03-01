'use strict';

import {Record, List} from 'immutable';
import {addToCart} from './model';

export const InitialState = Record({
  addToCart: addToCart
});
