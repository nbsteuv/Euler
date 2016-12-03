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
        id:3
      }
    ];
    var problemSelector = TestUtils.renderIntoDocument(<ProblemSelector problemList={problems} />);
    var $el = $(ReactDOM.findDOMNode(problemSelector));
    var numberProblems = $el.find('option').length;
    expect(numberProblems).toBe(3);
  });
});
