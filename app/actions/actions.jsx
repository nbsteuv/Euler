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

export var clearSelections = () => {
  return {
    type: 'CLEAR_SELECTIONS',
  }
}
