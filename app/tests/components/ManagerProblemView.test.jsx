var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {ManagerProblemView} from 'ManagerProblemView';
var ManagerProblemFocusView = require('ManagerProblemFocusView');

describe('ManagerProblemView', () => {
  it('should exist', () => {
    expect(ManagerProblemView).toExist();
  });

  it('should render ManagerProblemFocusView if selected', () => {
    var problem = {
      id: 5
    }
    var selectedProblemView = 5;
    var managerProblemView = TestUtils.renderIntoDocument(<ManagerProblemView problem={problem} selectedProblemView={selectedProblemView} />);
    var managerProblemFocusViews = TestUtils.scryRenderedComponentsWithType(managerProblemView, ManagerProblemFocusView);
    expect(managerProblemFocusViews.length).toBe(1);
  });

  it('should not render ManagerProblemFocusView when not selected', () => {
    var problem = {
      id: 5
    }
    var selectedProblemView = 7;
    var managerProblemView = TestUtils.renderIntoDocument(<ManagerProblemView problem={problem} selectedProblemView={selectedProblemView} />);
    var managerProblemFocusViews = TestUtils.scryRenderedComponentsWithType(managerProblemView, ManagerProblemFocusView);
    expect(managerProblemFocusViews.length).toBe(0);
  });

  it('should dispatch SELECT_PROBLEM_VIEW action when clicked', () => {
    var problemId = 37;
    var problem = {
      id: 37
    }
    var action = {
      type: 'SELECT_PROBLEM_VIEW',
      problemId
    }
    var spy = expect.createSpy();
    var managerProblemView = TestUtils.renderIntoDocument(<ManagerProblemView problem={problem} selectedProblemView="" dispatch={spy} />);
    var problemViewDiv = TestUtils.scryRenderedDOMComponentsWithTag(managerProblemView, 'div')[0];
    TestUtils.Simulate.click(problemViewDiv);
    expect(spy).toHaveBeenCalledWith(action);
  });

});
