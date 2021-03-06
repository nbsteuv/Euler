var React = require('react');
import brace from 'brace';
import AceEditor from 'react-ace';
require('brace/mode/sh');
require('brace/theme/monokai');

var API = require('Api');

//TODO: make mode dependent on language for highlighter

var CodeSandbox = React.createClass({
  setCodeResults: function(answer, seconds, code){
    this.props.setCodeResults(answer, seconds, code);
  },
  handleSubmit: function(){
    var code = this.refs.codeInput.editor.getValue();
    API.runCode(code).then((response) => {
      this.setCodeResults(response.data.answer, response.data.seconds, code);
    }, (e) => {
      console.log(e);
    });
  },
  render: function(){
    return (
      <div>
        <AceEditor
          mode="sh"
          theme="monokai"
          name="code"
          width="100%"
          maxLines={Infinity}
          ref="codeInput"
          fontSize={18}
          value={this.props.code}
          editorProps={{$blockScrolling: Infinity}}
          onLoad={(editor) => {
            editor.focus();
            editor.getSession().setUseWrapMode(true);
          }}
        />
      <p className="code-submit" onClick={this.handleSubmit}>Submit</p>
    </div>
    )
  }
});

module.exports = CodeSandbox;
