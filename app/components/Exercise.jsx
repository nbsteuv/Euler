var React = require('react');
var {connect} = require('react-redux');

import SelectBy from 'SelectBy';
import ProblemSelector from 'ProblemSelector';
import LanguageSelector from 'LanguageSelector';

export var Exercise = React.createClass({
  render: function(){
    var {problems, languages, selectBy, selectedProblem, selectedLanguage, selectByOptions} = this.props;
    var problemSelector = <ProblemSelector problemList={problems} selectedProblem={selectedProblem} />;
    var languageSelector = <LanguageSelector languageList={languages} selectedLanguage={selectedLanguage}/>
    return (
      <div>
        <SelectBy />
        {problemSelector}
        {languageSelector}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Exercise);
