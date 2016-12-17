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


});
