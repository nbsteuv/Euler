var React = require('react');
import brace from 'brace';
import AceEditor from 'react-ace';
require('brace/mode/sh');
require('brace/theme/monokai');

var FirebaseAPI = require('FirebaseAPI');

var BasicCodeUploader = React.createClass({
  handleSubmit: function(){
    var problemId = this.refs.problemId.value;
    var name = this.refs.problemName.value;
    var language = this.refs.language.value;
    var answer = this.refs.answer.value;
    var currentCode = this.refs.codeInput.editor.getValue();
    FirebaseAPI.updateProblem(problemId, name, language, answer, currentCode).then((data) => {
      this.refs.codeInput.editor.setValue('Successful add. Enter next code.');
      var newProblemId = parseInt(problemId) + 1;
      this.refs.problemId.value = newProblemId.toString();
      this.refs.problemName.value = '';
      this.refs.answer.value = '';
    }, (e) => {
      console.log(e);
    })
  },
  render: function(){
    return (
      <div>
        Problem Number
        <input type="text" ref="problemId" />
        Problem Name
        <input type="text" ref="problemName" />
        Language
        <input type="text" ref="language" />
        Answer
        <input type="text" ref="answer" />
        <AceEditor
          mode="sh"
          theme="monokai"
          name="code"
          width="100%"
          maxLines={Infinity}
          ref="codeInput"
          fontSize={18}
          value="#type your code here"
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

module.exports = BasicCodeUploader;
