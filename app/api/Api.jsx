export var filterLanguagesByProblem = (problem, languages) => {
  var problemLanguages = problem.languages;
  var availableLanguages = languages.filter((language) => {
    return problemLanguages.indexOf(language.name) !== -1;
  });
  return availableLanguages;
}
