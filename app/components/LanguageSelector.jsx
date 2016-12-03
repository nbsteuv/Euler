var React = require('react');
var {connect} = require('react-redux');

export var LanguageSelector = React.createClass({
  render: function(){
    var {languageList, dispatch} = this.props;
    var renderLanguageList = function(){
      return languageList.map((language) => {
        return <span key={language.name} className="language-logo" style={
            {
              backgroundImage: 'url(' + language.imageFile + ')',
              backgroundSize: '100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }
          }></span>
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
