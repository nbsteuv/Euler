var React = require('react');
var {connect} = require('react-redux');

var ManagerProblems = React.createClass({
  render: function(){
      return (
        <div>
          <p>ManagerProblems Test</p>
        </div>
      )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ManagerProblems);
