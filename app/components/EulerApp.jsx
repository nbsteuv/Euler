var React = require('react');

var Nav = require('Nav');

var EulerApp = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns small-centered medium-12 large-12">
          {props.children}
        </div>
      </div>
    </div>
   );
}

module.exports = EulerApp;
