export var getProblemDetails = (problemId, problems) => {
  var selectedProblemDetails = problems.filter((problem) => {
    return problem.id == problemId;
  });
  return selectedProblemDetails[0];
}

export var filterLanguagesByProblem = (problem, languages) => {
  var problemLanguages = problem.languages;
  var availableLanguages = languages.filter((language) => {
    return problemLanguages.indexOf(language.name) !== -1;
  });
  return availableLanguages;
}

export var filterProblemsByLanguage = (languageName, problems) => {
  var availableProblems = problems.filter((problem) => {
    return problem.languages.indexOf(languageName) !== -1;
  });
  return availableProblems
}
