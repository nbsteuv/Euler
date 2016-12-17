var React = require('react');
var {connect} = require('react-redux');

//TODO: find out if there's a performance difference between import and require--only import when necessary with connect, or switch all?

var API = require('Api');
var actions = require('actions');
import SelectBy from 'SelectBy';
import ProblemSelector from 'ProblemSelector';
import LanguageSelector from 'LanguageSelector';
var ProblemImage = require('ProblemImage');
import CodeWindow from 'CodeWindow';

//TODO: loading a large array of problems with corresponding info might be a performance issue--load one at a time if necessary

export var Exercise = React.createClass({
  render: function(){
    var {problems, languages, selectBy, selectedProblem, selectedLanguage, selectByOptions} = this.props;

    if(selectedProblem){
      var problemDetails = API.getProblemDetails(selectedProblem, problems);
      var problemImage = <ProblemImage key="problemImage" imageFile={problemDetails.imageFile} />;
    }

    var languageList = selectedProblem ? API.filterLanguagesByProblem(problemDetails, languages) : languages;
    var problemList = selectedLanguage ? API.filterProblemsByLanguage(selectedLanguage, problems) : problems;

    var problemSelectorCallback = selectBy == 'Problem' ? actions.clearLanguageSelection : '';
    var languageSelectorCallback = selectBy == 'Language' ? actions.clearProblemSelection : '';

    var problemSelector = <ProblemSelector key="problemSelector" problemList={problemList} selectedProblem={selectedProblem} selectCallback={problemSelectorCallback} />;
    var languageSelector = <LanguageSelector key="languageSelector" languageList={languageList} selectedLanguage={selectedLanguage} selectCallback={languageSelectorCallback} />;

    var generateCodeWindow = () => {
      if(selectedProblem && selectedLanguage && problemDetails){
        return <CodeWindow problem={problemDetails} />
      }
    }

    return (
      <div>
        <SelectBy />
        { API.generateSelectors(selectBy, problemSelector, selectedProblem, problemImage, languageSelector, selectedLanguage) }
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
