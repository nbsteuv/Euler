//TODO: write tests for each action to go with reducers

export var setSelectBy = (selectBy) => {
  return {
    type: 'SET_SELECTBY',
    selectBy
  }
}

export var setSelectedProblem = (problemId) => {
  return {
    type: 'SET_SELECTED_PROBLEM',
    problemId
  }
}

export var setSelectedLanguage = (languageName) => {
  return {
    type: 'SET_SELECTED_LANGUAGE',
    languageName
  }
}

export var clearProblemSelection = () => {
  return {
    type: 'CLEAR_PROBLEM_SELECTION',
  }
}

export var clearLanguageSelection = () => {
  return {
    type: 'CLEAR_LANGUAGE_SELECTION',
  }
}
