var React = require('react');
var axios = require('axios');

//TODO: abstract code call to API

var CodeSandbox = React.createClass({
  handleCodeChange: function(e){
    var code = e.target.value;
  },
  handleSubmit: function(){
    var code = this.refs.codeInput.value;
    axios.post('/sandbox', {
      code: code
    })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
  },
  render: function(){
    return (
      <div>
        <textarea ref='codeInput' value={this.props.codeValue} onChange={this.handleCodeChange} />
        <p onClick={this.handleSubmit}>Submit</p>
      </div>
    )
  }
})

module.exports = CodeSandbox;
