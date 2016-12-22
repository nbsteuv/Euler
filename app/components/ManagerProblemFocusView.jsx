var React = require('react');
var {connect} = require('react-redux');

var API = require('Api');
import LanguageSelector from 'LanguageSelector';

var ManagerProblemFocusView = React.createClass({
  render: function(){
    var {problem, languages, selectedLanguage} = this.props;
    var currentLanguages = API.filterLanguagesByProblem(problem, languages);
    var supportedLanguages = languages.filter((language) => {
      return (currentLanguages.indexOf(language) == -1);
    });
    //TODO: Allow user to change answer from this screen
    return (
      <div className="manager-problem-focus-view">
        <h3>Answer: {problem.answer} </h3>
        <table>
          <tr>
            <td><p>Currently Used Languages</p></td>
            <td><p>Other Supported Languages</p></td>
          </tr>
          <tr>
            <td><LanguageSelector languageList={currentLanguages} selectedLanguage={selectedLanguage} /></td>
            <td><LanguageSelector languageList={supportedLanguages} selectedLanguage={selectedLanguage} /></td>
          </tr>
        </table>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ManagerProblemFocusView);
