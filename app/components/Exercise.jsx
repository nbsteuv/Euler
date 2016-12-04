var React = require('react');
var {connect} = require('react-redux');

import SelectBy from 'SelectBy';
import ProblemSelector from 'ProblemSelector';
import LanguageSelector from 'LanguageSelector';

//TODO: abstract generateSelectors function into helper for reuse with Test component

export var Exercise = React.createClass({
  render: function(){
    var {problems, languages, selectBy, selectedProblem, selectedLanguage, selectByOptions} = this.props;
    var problemSelector = <ProblemSelector key="problemSelector" problemList={problems} selectedProblem={selectedProblem} />;
    var languageSelector = <LanguageSelector key="languageSelector" languageList={languages} selectedLanguage={selectedLanguage} />
    var generateSelectors = () => {
      switch(selectBy){
        case 'Problem':
          var selectors = [problemSelector];
          if(selectedProblem){
            selectors.push(languageSelector);
          }
          return selectors.map((selector) => {
            return selector;
          });
        case 'Language':
          var selectors = [languageSelector];
          if(selectedLanguage){
            selectors.push(problemSelector);
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
