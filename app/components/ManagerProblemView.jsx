var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');
import ManagerProblemFocusView from 'ManagerProblemFocusView';

export var ManagerProblemView = React.createClass({
  render: function(){
    var {problem, selectedProblem, dispatch} = this.props;
    var renderFocusView = () => {
      if(selectedProblem == problem.id){
        return (<ManagerProblemFocusView problem={problem} />);
      }
    }
    return (
      <div className="manager-problem-view" onClick={ () => { dispatch(actions.setSelectedProblem(problem.id)) }}>
        <p>{problem.id}</p>
        { renderFocusView() }
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ManagerProblemView);
