var React = require('react');
var {connect} = require('react-redux');

export var CodeWindow = React.createClass({
  render: function(){
    return (
      <div>
        CodeWindow test
      </div>
    );
  }
});

export default connect()(CodeWindow);
