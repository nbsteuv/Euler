var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');

import ConnectedExercise from 'Exercise';
import SelectBy from 'SelectBy';
import ProblemSelector from 'ProblemSelector';
import LanguageSelector from 'LanguageSelector';

import {configure} from 'configureStore';

describe('Exercise', () => {
  it('should exist', () => {
    expect(ConnectedExercise).toExist();
  });

  describe('rendering', () => {
    it('should render SelectBy component', () => {
      //Leaving configure with no arguments gives default initial state
      var store = configure();
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var selectBy = TestUtils.scryRenderedComponentsWithType(exercise, SelectBy);
      expect(selectBy.length).toBe(1);
    });

    it('should render ProblemSelector', () => {
      var store = configure();
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var problemSelector = TestUtils.scryRenderedComponentsWithType(exercise, ProblemSelector);
      expect(problemSelector.length).toBe(1);
    });

    it('should render LanguageSelector', () => {
      var store = configure();
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var languageSelector = TestUtils.scryRenderedComponentsWithType(exercise, LanguageSelector);
      expect(languageSelector.length).toBe(1);
    });

  });
});
