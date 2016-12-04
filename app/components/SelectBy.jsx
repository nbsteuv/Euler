var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

//TODO: fix Failed form proptype warning--add onChange or make readOnly

export var SelectBy = React.createClass({
  componentDidUpdate: function(){
    console.log('Did update');
    var {dispatch} = this.props;
    dispatch(actions.clearSelections());
  },
  render: function(){
    var {selectByOptions, selectBy, dispatch} = this.props;
    var renderOptions = () => {
      return selectByOptions.map((option) => {
        return <span key={option} onClick={() => { dispatch(actions.setSelectBy(option)) }}><input type="radio" name="selectBy" value={option} checked={option == selectBy} /> Select By {option}<br /></span>;
      });
    }
    return (
      <div>
          { renderOptions() }
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      selectBy: state.selectBy,
      selectByOptions: state.selectByOptions
    };
  }
)(SelectBy);
