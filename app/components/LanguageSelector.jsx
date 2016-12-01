var React = require('react');
var {connect} = require('react-redux');

export var LanguageSelector = React.createClass({
  render: function(){
    var {languageList, dispatch} = this.props;
    var renderLanguageList = function(){
      return languageList.map((language) => {
        return <img key={language.name} src={language.imageFile} />
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
