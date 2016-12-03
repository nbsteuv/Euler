var redux = require('redux');
var {problemsReducer, languagesReducer, selectByReducer, selectedProblemReducer, selectedLanguageReducer, selectByOptionsReducer} = require('reducers');

export var configure = () => {

  var reducer = redux.combineReducers({
    problems: problemsReducer,
    languages: languagesReducer,
    selectBy: selectByReducer,
    selectByOptions: selectByOptionsReducer
  })

  var store = redux.createStore(reducer);

  return store;
};
