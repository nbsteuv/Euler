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

  it('should filter language list by given problem', () => {
    var problem = {
      id: 5,
      languages: ['testLanguage1']
    }
    var languages = [
      {
        name: 'testLanguage1',
      },
      {
        name: 'testLanguage2',
      }
    ];
    var res = API.filterLanguagesByProblem(problem, languages);
    expect(res).toEqual([languages[0]]);
  });

});
