var redux = require('redux');
var {problemsReducer, languagesReducer, selectByReducer, selectedProblemReducer, selectedLanguageReducer, selectByOptionsReducer} = require('reducers');

export var configure = (initialState ={}) => {

  var reducer = redux.combineReducers({
    problems: problemsReducer,
    languages: languagesReducer,
    selectBy: selectByReducer,
    selectByOptions: selectByOptionsReducer,
    selectedProblem: selectedProblemReducer,
    selectedLanguage: selectedLanguageReducer,
  });

  var store = redux.createStore(reducer, initialState);

  return store;
};
