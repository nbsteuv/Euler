var React = require('react');
var axios = require('axios');
import brace from 'brace';
import AceEditor from 'react-ace';
require('brace/mode/sh');
require('brace/theme/chrome');

//TODO: abstract code call to API

//TODO: abstract highlighter to API

var CodeSandbox = React.createClass({
  handleSubmit: function(){
    var code = this.refs.codeInput.editor.getValue();
    console.log(code);
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
        <AceEditor
          mode="sh"
          theme="chrome"
          name="code"
          width="100%"
          maxLines={50}
          ref="codeInput"
          fontSize={18}
          value="#type your code here"
          editorProps={{$blockScrolling: Infinity}}
          onLoad={(editor) => {
            editor.focus();
            editor.getSession().setUseWrapMode(true);
          }}
        />
      <p onClick={this.handleSubmit}>Submit</p>
    </div>
    )
  }
});

module.exports = CodeSandbox;
