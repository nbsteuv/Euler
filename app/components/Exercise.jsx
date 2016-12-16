var React = require('react');
var {connect} = require('react-redux');
var API = require('Api');

//TODO: find out if there's a performance difference between import and require--only import when necessary with connect, or switch all?

import SelectBy from 'SelectBy';
import ProblemSelector from 'ProblemSelector';
import LanguageSelector from 'LanguageSelector';
var ProblemImage = require('ProblemImage');
import CodeWindow from 'CodeWindow';

//TODO: abstract generateSelectors and getProblemDetails functions into helper for reuse with Test component

//TODO: filter languages by chosen problem and problem list by chosen language, depending on selectBy

//TODO: loading a large array of problems with corresponding info might be a performance issue--load one at a time

export var Exercise = React.createClass({
  render: function(){
    var {problems, languages, selectBy, selectedProblem, selectedLanguage, selectByOptions} = this.props;

    if(selectedProblem){
      var problemDetails = API.getProblemDetails(selectedProblem, problems);
      var problemImage = <ProblemImage key="problemImage" imageFile={problemDetails.imageFile} />;
    }

    var languageList = selectedProblem ? API.filterLanguagesByProblem(problemDetails, languages) : languages;
    var problemList = selectedLanguage ? API.filterProblemsByLanguage(selectedLanguage, problems) : problems;
    var problemSelector = <ProblemSelector key="problemSelector" problemList={problemList} selectedProblem={selectedProblem} />;
    var languageSelector = <LanguageSelector key="languageSelector" languageList={languageList} selectedLanguage={selectedLanguage} />;

    var generateSelectors = () => {
      switch(selectBy){
        case 'Problem':
          var selectors = [problemSelector];
          if(selectedProblem){
            selectors.push(problemImage);
            selectors.push(languageSelector);
          }
          return selectors.map((selector) => {
            return selector;
          });
        case 'Language':
          var selectors = [languageSelector];
          if(selectedLanguage){
            selectors.push(problemSelector);
            if(selectedProblem){
              selectors.push(problemImage);
            }
          }
          return selectors.map((selector) => {
            return selector;
          });
      }
    }

    var generateCodeWindow = () => {
      if(selectedProblem && selectedLanguage && problemDetails){
        return <CodeWindow problem={problemDetails} />
      }
    }

    return (
      <div>
        <SelectBy />
        { generateSelectors() }
        { generateCodeWindow() }
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Exercise);
