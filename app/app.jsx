var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var EulerApp = require('EulerApp');
var Exercise = require('Exercise');
var Test = require('Test');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={EulerApp}>
        <IndexRoute component={Exercise} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>,
  document.getElementById('app')
);
