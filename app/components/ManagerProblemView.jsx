var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');
var ManagerProblemFocusView = require('ManagerProblemFocusView');

var ManagerProblemView = React.createClass({
  render: function(){
    var {problem, selectedProblemView, dispatch} = this.props;
    var renderFocusView = () => {
      if(selectedProblemView == problem.id){
        return (<ManagerProblemFocusView />);
      }
    }
    return (
      <div onClick={ () => { dispatch(actions.selectProblemView(problem.id)) }}>
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
