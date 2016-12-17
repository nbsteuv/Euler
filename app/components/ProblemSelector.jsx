var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var ProblemSelector = React.createClass({
  handleSelect : function(e){
    var {dispatch} = this.props
    var problemId = e.target.value;
    if(this.props.selectCallback){
      dispatch(this.props.selectCallback());
    }
    dispatch(actions.setSelectedProblem(problemId));
  },
  render: function(){
    var {problemList, selectedProblem, dispatch} = this.props;
    var renderProblemList = () => {
      return problemList.map((problem) => {
        return <option key={problem.id} value={problem.id}>{problem.id}</option>
      });
    }
    return (
      <div>
        <form>
          <strong>Problem Number: </strong>
          <select onChange={this.handleSelect} value={selectedProblem}>
            <option value=''>Choose a problem</option>
            { renderProblemList() }
          </select>
        </form>
      </div>
    )
  }
});

export default connect()(ProblemSelector);
