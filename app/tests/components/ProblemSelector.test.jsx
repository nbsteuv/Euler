var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {ProblemSelector} from 'ProblemSelector';

describe('ProblemSelector', () =>{
  it('should exist', () => {
    expect(ProblemSelector).toExist();
  });

  it('should render problems from problem list into select', () => {
    var problems = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];
    var problemSelector = TestUtils.renderIntoDocument(<ProblemSelector problemList={problems} />);
    var $el = $(ReactDOM.findDOMNode(problemSelector));
    var numberProblems = $el.find('option').length;
    expect(numberProblems).toBe(4);
  });

  it('should dispatch setSelectedProblem when problem is chosen', () => {
    var action = {
      type: 'SET_SELECTED_PROBLEM',
      problemId: 3
    }
    var problems = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];
    var spy = expect.createSpy();
    var problemSelector = TestUtils.renderIntoDocument(<ProblemSelector problemList={problems} dispatch={spy} />);
    var selector = TestUtils.scryRenderedDOMComponentsWithTag(problemSelector, 'select')[0];
    TestUtils.Simulate.change(selector, {target: {value: 3}});
    expect(spy).toHaveBeenCalledWith(action);
  });
});
