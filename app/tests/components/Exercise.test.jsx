var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');

import Exercise from 'Exercise';
import SelectBy from 'SelectBy';
import {configure} from 'configureStore';

describe('Exercise', () => {
  it('should exist', () => {
    expect(Exercise).toExist();
  });

  describe('rendering', () => {
    it('should render SelectBy component', () => {
      //Leaving configure with no arguments gives default initial state
      var store = configure();
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <Exercise />
        </Provider>
      );
      var selectBy = TestUtils.scryRenderedComponentsWithType(exercise, SelectBy);
      expect(selectBy.length).toBe(1);
    });
  });
});
