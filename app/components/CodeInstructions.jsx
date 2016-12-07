var React = require('react');

var CodeInstructions = React.createClass({
	render: function(){
    var instructions = "Enter your code below. When run as a function, your code should return the answer.";
		return (
			<div>
				<h2 className="code-instructions">{instructions}</h2>
			</div>
			);
	}
});

module.exports = CodeInstructions;
