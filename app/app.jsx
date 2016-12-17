var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var {Provider} = require('react-redux');

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log(state);
})

var EulerApp = require('EulerApp');
import Exercise from 'Exercise';
import Test from 'Test';
import Manager from 'Manager';

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={EulerApp}>
        <IndexRoute component={Exercise} />
        <Route path="/test" component={Test} />
        <Route path="/manager" component={Manager} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
