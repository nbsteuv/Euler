var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var LanguageSelector = React.createClass({
  render: function(){
    var {languageList, selectedLanguage, dispatch} = this.props;
    var renderLanguageList = function(){
      return languageList.map((language) => {
        var className = language.name == selectedLanguage ? 'language-logo language-active' : 'language-logo';
        return <span key={language.name} className={className} style={
            {
              backgroundImage: 'url(' + language.imageFile + ')',
              backgroundSize: '100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }
          } onClick={() => {
            dispatch(actions.setSelectedLanguage(language.name));
          }}></span>
      });
    }
    return (
      <div>
        { renderLanguageList() }
      </div>
    )
  }
});

export default connect()(LanguageSelector);
