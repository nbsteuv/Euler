var React = require('react');
var {connect} = require('react-redux');

import SelectBy from 'SelectBy';
import ProblemSelector from 'ProblemSelector';

export var Exercise = React.createClass({
  render: function(){
    var {problems, languages, selectBy, selectedProblem, selectedLanguage, selectByOptions} = this.props;
    return (
      <div>
        <SelectBy />
        <ProblemSelector problemList={problems} />
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Exercise);
