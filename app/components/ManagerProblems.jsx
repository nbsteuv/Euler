var React = require('react');
var {connect} = require('react-redux');

import ManagerProblemView from 'ManagerProblemView';

var ManagerProblems = React.createClass({
  render: function(){
    var {problems} = this.props;
    var renderProblemViews = () => {
      return problems.map((problem) => {
        return <ManagerProblemView key={problem.id} problem={problem} />
      });
    }
    return (
      <div>
        <p>ManagerProblems Test</p>
        { renderProblemViews() }
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ManagerProblems);
