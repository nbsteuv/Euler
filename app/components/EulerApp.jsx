var React = require('react');

var Nav = require('Nav');

var EulerApp = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns small-centered medium-6 large-6">
          {props.children}
        </div>
      </div>
    </div>
   );
}

module.exports = EulerApp;
