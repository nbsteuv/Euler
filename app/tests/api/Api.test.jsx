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

  it('should filter problem list by given language', () => {
    var languageName = 'testLanguage3';
    var problems = [
      {
        id: 5,
        languages: ['testLanguage1', 'testLanguage2', 'testLanguage3']
      },
      {
        id: 7,
        languages: ['testLanguage5']
      }
    ];
    var res = API.filterProblemsByLanguage(languageName, problems);
    expect(res).toEqual([problems[0]]);
  });

  describe('Generate selectors function', () => {
    it('should generate only problem selector when selectBy = problem and problem is not selected', () => {
      var selectBy = 'Problem';
      var problemSelector = 'ProblemSelector';
      var selectedProblem = undefined;
      var problemImage = 'ProblemImage';
      var languageSelector = 'LanguageSelector';
      var selectedLanguage = undefined;
      var selectors = API.generateSelectors(selectBy, problemSelector, selectedProblem, problemImage, languageSelector, selectedLanguage);
      var expectedSelectors = [problemSelector];
      expect(selectors).toEqual(expectedSelectors);
    });

    it('should generate problem selector, problem image, and language selector when selectBy = problem and problem is selected', () => {
      var selectBy = 'Problem';
      var problemSelector = 'ProblemSelector';
      var selectedProblem = 1;
      var problemImage = 'ProblemImage';
      var languageSelector = 'LanguageSelector';
      var selectedLanguage = undefined;
      var selectors = API.generateSelectors(selectBy, problemSelector, selectedProblem, problemImage, languageSelector, selectedLanguage);
      var expectedSelectors = [problemSelector, problemImage, languageSelector];
      expect(selectors).toEqual(expectedSelectors);
    });

    it('should generate language selector only when selectBy = language and language is not selected', () => {
      var selectBy = 'Language';
      var problemSelector = 'ProblemSelector';
      var selectedProblem = undefined;
      var problemImage = 'ProblemImage';
      var languageSelector = 'LanguageSelector';
      var selectedLanguage = undefined;
      var selectors = API.generateSelectors(selectBy, problemSelector, selectedProblem, problemImage, languageSelector, selectedLanguage);
      var expectedSelectors = [languageSelector];
      expect(selectors).toEqual(expectedSelectors);
    });
  });

});
