var React = require('react');

var ProblemImage = React.createClass({
  render: function(){
    var {imageFile} = this.props;
    return (
      <img className="problem-image columns small-centered medium-12 large-12" src={imageFile}/>
    )
  }
});

module.exports = ProblemImage;
