var React = require('react');
var {connect} = require('react-redux');

//TODO: find out if there's a performance difference between import and require--only import when necessary with connect, or switch all?

import SelectBy from 'SelectBy';
import ProblemSelector from 'ProblemSelector';
import LanguageSelector from 'LanguageSelector';
var ProblemImage = require('ProblemImage');

//TODO: abstract generateSelectors and getProblemDetails functions into helper for reuse with Test component

//TODO: loading a large array of problems with corresponding info might be a performance issue--load one at a time

export var Exercise = React.createClass({
  render: function(){
    var {problems, languages, selectBy, selectedProblem, selectedLanguage, selectByOptions} = this.props;

    var getProblemDetails = () => {
      var problemDetailsArray = problems.filter((problem) => {
        return problem.id == selectedProblem;
      });
      var problemDetails = problemDetailsArray[0];
      return problemDetails;
    }

    if(selectedProblem){
      var problemDetails = getProblemDetails();
      var problemImage = <ProblemImage key="problemImage" imageFile={problemDetails.imageFile} />;
    }

    var problemSelector = <ProblemSelector key="problemSelector" problemList={problems} selectedProblem={selectedProblem} />;
    var languageSelector = <LanguageSelector key="languageSelector" languageList={languages} selectedLanguage={selectedLanguage} />;

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
    return (
      <div>
        <SelectBy />
        { generateSelectors() }
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Exercise);
