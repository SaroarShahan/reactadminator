import {combineReducers} from 'redux';

import {chartsReducer} from './../module/charts/reducer/index';

const appReducer = combineReducers({
  chartsReducer
});

export default appReducer;
