var redux = require('redux');

export var configure = (initialState = {
  problems: [
  	{
  		id: 1,
  		imageFile: 'path/to/problem/1',
  		currentCode: 'Current test code',
  		codeHistory: ['Current code', 'Old code'],
  		languages: ['php', 'javascript', 'csharp']
  	},
  	{
  		id: 2,
  		imageFile: 'path/to/problem/2',
  		currentCode: 'Current test code',
  		codeHistory: ['Current code', 'Old code'],
  		languages: ['php', 'javascript', 'csharp']
  	},
  	{
  		id: 3,
  		imageFile: 'path/to/problem/3',
  		currentCode: 'Current test code',
  		codeHistory: ['Current code', 'Old code'],
  		languages: ['php', 'javascript', 'csharp']
  	},
  	{
  		id: 4,
  		imageFile: 'path/to/problem/4',
  		currentCode: 'Current test code',
  		codeHistory: ['Current code', 'Old code'],
  		languages: ['php', 'javascript', 'csharp']
  	},
  ],
  languages: [
  	{
  		name: 'php',
  		displayName: 'PHP',
  		imageFile: '/images/languages/php.jpg'
  	},
  	{
  		name: 'javascript',
  		displayName: 'JavaScript',
  		imageFile: '/images/languages/js.jpg'
  	},
  	{
  		name: 'csharp',
  		displayName: 'C#',
  		imageFile: '/images/languages/csharp.jpg'
  	}
  ],
  selectBy: 'Problem',
  selectedProblem: undefined,
	selectedLanguage: undefined,
	selectByOptions: ['Problem', 'Language'],
}) => {

  var reducer = (state = initialState, action) => {
    return state;
  }

  var store = redux.createStore(reducer);

  return store;
};
