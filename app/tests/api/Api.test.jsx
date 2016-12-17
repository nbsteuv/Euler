var expect = require('expect');

var API = require('Api');

describe('API', () => {
  it('should get problem details from problem list by id', () => {
    var problems = [
      {
        id: 1,
        testProperty: 'test property'
      },
      {
        id: 176,
        testProperty: 'test property 2'
      }
    ];
    var selectedProblemId = 176;
    var res = API.getProblemDetails(selectedProblemId, problems);
    expect(res).toEqual(problems[1]);
  });
});
