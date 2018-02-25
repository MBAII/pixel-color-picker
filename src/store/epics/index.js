'use strict';

import {combineEpics} from 'redux-observable';

import order from './order';

export default combineEpics(
  order
);
