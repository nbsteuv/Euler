var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Exercise = require('Exercise');
var Test = require('Test');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Exercise} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>,
  document.getElementById('app')
);
