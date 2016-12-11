//TODO: write tests for reducers

export var problemsReducer = (state = [
  {
    id: 1,
    imageFile: '/images/problems/1.png',
    currentCode: 'Current test code',
    codeHistory: ['Current code', 'Old code'],
    languages: ['php', 'javascript', 'csharp'],
    answer: 10,
    seconds: 25,
  },
  {
    id: 2,
    imageFile: '/images/problems/2.png',
    currentCode: 'Current test code',
    codeHistory: ['Current code', 'Old code'],
    languages: ['php', 'javascript', 'csharp'],
    answer: 10,
    seconds: 25,
  },
  {
    id: 3,
    imageFile: '/images/problems/3.png',
    currentCode: 'Current test code',
    codeHistory: ['Current code', 'Old code'],
    languages: ['php', 'javascript', 'csharp'],
    answer: 10,
    seconds: 25,
  },
  {
    id: 4,
    imageFile: '/images/problems/4.png',
    currentCode: 'Current test code',
    codeHistory: ['Current code', 'Old code'],
    languages: ['php', 'javascript', 'csharp'],
    answer: 10,
    seconds: 25,
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
    case 'SET_SELECTED_PROBLEM':
      return action.problemId;
    case 'CLEAR_SELECTIONS':
      return '';
    default:
      return state;
  }
}

export var selectedLanguageReducer = (state = '', action) => {
  switch(action.type){
    case 'SET_SELECTED_LANGUAGE':
      return action.languageName;
    case 'CLEAR_SELECTIONS':
      return '';
    default:
      return state;
  }
}
