var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var FirebaseAPI = require('FirebaseAPI');
FirebaseAPI.runTests();
// FirebaseAPI.getProblems().then((data) => {
//   console.log(data);
// }, (e) => {
//   console.log(e);
// });

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
  console.log(state);
})

var EulerApp = require('EulerApp');
import Exercise from 'Exercise';
import Test from 'Test';
import Manager from 'Manager';

var BasicCodeUploader = require('BasicCodeUploader');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={EulerApp}>
        <IndexRoute component={Exercise} />
        <Route path="/codeupload" component={BasicCodeUploader} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
