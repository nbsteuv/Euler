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
