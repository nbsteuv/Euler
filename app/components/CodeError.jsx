var React = require('react');

var CodeError = React.createClass({
  render: function(){
    var {error} = this.props;
    if(error != undefined){
      return (
        <div>
          <h3 className="code-error-text" >{error}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
});

module.exports = CodeError;
