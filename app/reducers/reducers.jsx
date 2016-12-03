//TODO: write tests for reducers

export var problemsReducer = (state = [
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
], action) => {
  switch(action.type){
    default:
      return state;
  }
}

export var languagesReducer = (state = [
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
], action) => {
  switch(action.type){
    default:
      return state;
  }
}

export var selectByReducer = (state = 'Problem', action) => {
  switch(action.type){
    case 'SET_SELECTBY':
      return action.selectBy;
    default:
      return state;
  }
}

export var selectByOptionsReducer = (state = ['Problem', 'Language'], action) => {
  switch(action.type){
    default:
      return state;
  }
}

export var selectedProblemReducer = (state = '', action) => {
  switch(action.type){
    default:
      return state;
  }
}

export var selectedLanguageReducer = (state = '', action) => {
  switch(action.type){
    default:
      return state;
  }
}
