'use strict';

import {combineEpics} from 'redux-observable';

import firstEpic from './firstEpic';

export default combineEpics(
  firstEpic
);
