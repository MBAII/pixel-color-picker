'use strict';

import {Record, List} from 'immutable';
import {firstReducer} from './model';

const N = 11;

export const InitialState = Record({
  board: Array.apply(null, {length: N}).map((a)=>Array.apply(null, {length: N}).map((o)=>'#FFFFFF'))
});
