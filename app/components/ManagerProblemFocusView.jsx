var React = require('react');
var {connect} = require('react-redux');

var API = require('Api');
import LanguageSelector from 'LanguageSelector';

var ManagerProblemFocusView = React.createClass({
  render: function(){
    var {problem, languages} = this.props;
    var currentLanguages = API.filterLanguagesByProblem(problem, languages);
    var supportedLanguages = languages.filter((language) => {
      return (currentLanguages.indexOf(language) == -1);
    });
    return (
      <div className="manager-problem-focus-view">
        <LanguageSelector languageList={currentLanguages} />
        <LanguageSelector languageList={supportedLanguages} />
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ManagerProblemFocusView);
