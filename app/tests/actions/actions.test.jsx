var expect = require('expect');

var actions = require('actions');

describe('Actions', () => {
  it('should generate SET_SELECTBY action', () => {
    var selectBy = 'Language';
    var action = {
      type: 'SET_SELECTBY',
      selectBy
    }
    var res = actions.setSelectBy(action.selectBy);
    expect(res).toEqual(action);
  });

  it('should generate SET_SELECTED_PROBLEM action', () => {
    var problemId = 25;
    var action = {
      type: 'SET_SELECTED_PROBLEM',
      problemId
    }
    var res = actions.setSelectedProblem(action.problemId);
    expect(res).toEqual(action);
  });

  it('should generate SET_SELECTED_LANGUAGE action', () => {
    var languageName = 'Test language';
    var action = {
      type: 'SET_SELECTED_LANGUAGE',
      languageName
    }
    var res = actions.setSelectedLanguage(action.languageName);
    expect(res).toEqual(action);
  });

  it('should generate CLEAR_SELECTIONS action', () => {
    var action = {
      type: 'CLEAR_SELECTIONS'
    }
    var res = actions.clearSelections();
    expect(res).toEqual(action);
  });

});
