var React = require('react');

var CodeResult = React.createClass({
  render: function(){
    var {answer, seconds} = this.props;
    if(answer != undefined && seconds != undefined){
      return (
        <div>
          <h3>Result: {answer}</h3>
          <h3>Runtime (seconds): {seconds}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
});

module.exports = CodeResult;
