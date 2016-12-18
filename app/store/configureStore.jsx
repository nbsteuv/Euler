var redux = require('redux');
var {problemsReducer, languagesReducer, selectByReducer, selectedProblemReducer, selectedLanguageReducer, selectByOptionsReducer, selectedProblemViewReducer} = require('reducers');

export var configure = (initialState ={}) => {

  var reducer = redux.combineReducers({
    problems: problemsReducer,
    languages: languagesReducer,
    selectBy: selectByReducer,
    selectByOptions: selectByOptionsReducer,
    selectedProblem: selectedProblemReducer,
    selectedLanguage: selectedLanguageReducer,
    selectedProblemView: selectedProblemViewReducer
  });

  var store = redux.createStore(reducer, initialState);

  return store;
};
