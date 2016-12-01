var React = require('react');
var {connect} = require('react-redux');

export var ProblemSelector = React.createClass({
  render: function(){
    var {problemList, dispatch} = this.props;
    var renderProblemList = () => {
      return problemList.map((problem) => {
        return <option key={problem.id} value={problem} onClick={() => {
            console.log(problem.id);
          }}>{problem.id}</option>
      });
    }
    return (
      <div>
        <form>
          <strong>Problem Number: </strong>
          <select>
            { renderProblemList() }
          </select>
        </form>
      </div>
    )
  }
});

export default connect()(ProblemSelector);
