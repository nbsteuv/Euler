var React = require('react');
var {connect} = require('react-redux');

export var Exercise = React.createClass({
  render: function(){
    var {problems, languages} = this.props;
    console.log(problems);
    return (
      <div>
        <p>Exercise test</p>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Exercise);
