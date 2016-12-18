var React = require('react');
var {connect} = require('react-redux');

import ManagerProblems from 'ManagerProblems';

var Manager = React.createClass({
  render: function(){
    return (
      <div>
        <h3 className="manager-title">Problem Manager</h3>
        <ManagerProblems />
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Manager);
