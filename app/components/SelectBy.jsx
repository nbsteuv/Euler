var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var SelectBy = React.createClass({
  render: function(){
    var {selectByOptions, selectBy, dispatch} = this.props;
    var renderOptions = () => {
      return selectByOptions.map((option) => {
        return <span key={option} onClick={() => { dispatch(actions.setSelectBy(option)) }}><input type="radio" name="selectBy" value={option} defaultChecked={option == selectBy} /> Select By {option}<br /></span>;
      });
    }
    return (
      <div>
        <form>
          { renderOptions() }
        </form>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(SelectBy);
