var React = require('react');
var {connect} = require('react-redux');

export var LanguageSelector = React.createClass({
  render: function(){
    var {languageList, dispatch} = this.props;
    var renderLanguageList = function(){

    }
    return (
      <div>
        Testing language selector
      </div>
    )
  }
});

export default connect()(LanguageSelector);
