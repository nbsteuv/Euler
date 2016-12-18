var React = require('react');
var {connect} = require('react-redux');

var ManagerProblemView = React.createClass({
  render: function(){
    var {problem} = this.props;
    return (
      <div>
        <p>{problem.id}</p>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ManagerProblemView);
