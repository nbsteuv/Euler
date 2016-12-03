var React = require('react');
var {connect} = require('react-redux');

import SelectBy from 'SelectBy';
import ProblemSelector from 'ProblemSelector';
import LanguageSelector from 'LanguageSelector';

export var Exercise = React.createClass({
  render: function(){
    var {problems, languages, selectBy, selectedProblem, selectedLanguage, selectByOptions} = this.props;
    return (
      <div>
        <SelectBy />
        <ProblemSelector problemList={problems} />
        <LanguageSelector languageList={languages} selectedLanguage={selectedLanguage}/>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Exercise);
