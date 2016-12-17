var React = require('react');
var {connect} = require('react-redux');

var Manager = React.createClass({
  render: function(){
    return (
      <div>
        <p>Manager test</p>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Manager);
