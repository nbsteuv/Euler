var React = require('react');
var {connect} = require('react-redux');

var ManagerProblemView = React.createClass({
  render: function(){
    var {problem, selectedProblemView} = this.props;
    var renderFocusView = () => {
      if(selectedProblemView == problem.id){
        return (<p>         Selected</p>);
      }
    }
    return (
      <div>
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
