var React = require('react');
var {connect} = require('react-redux');

var ManagerProblemView = React.createClass({
  render: function(){
    return (
      <div>
        <p>ProblemView Test</p>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ManagerProblemView);
