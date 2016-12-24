var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');

import {configure} from 'configureStore';
import ConnectedManagerProblems, {ManagerProblems} from 'ManagerProblems';
import ConnectedManagerProblemView from 'ManagerProblemView';

describe('ManagerProblems', () => {
  it('should exist', () => {
    expect(ManagerProblems).toExist();
  });

  it('should render ManagerProblemView component for each problem in list', () => {
    var problems = [
      {id: 1},
      {id: 2},
      {id: 3}
    ];
    var store = configure();
    var managerProblems = TestUtils.renderIntoDocument(
      <Provider store={store} >
        <ManagerProblems problems={problems} />
      </Provider>
      );
    var managerProblemViews = TestUtils.scryRenderedComponentsWithType(managerProblems, ConnectedManagerProblemView);
    expect(managerProblemViews.length).toBe(3);
  });

});
