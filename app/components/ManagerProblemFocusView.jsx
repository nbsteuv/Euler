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
        <table>
          <tr>
            <td><p>Currently Used Languages</p></td>
            <td><p>Other Supported Languages</p></td>
          </tr>
          <tr>
            <td><LanguageSelector languageList={currentLanguages} /></td>
            <td><LanguageSelector languageList={supportedLanguages} /></td>
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
