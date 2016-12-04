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

    it('should render ProblemSelector by default', () => {
      var store = configure();
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var problemSelector = TestUtils.scryRenderedComponentsWithType(exercise, ProblemSelector);
      expect(problemSelector.length).toBe(1);
    });

    it('should not render LanguageSelector by default', () => {
      var store = configure();
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var languageSelector = TestUtils.scryRenderedComponentsWithType(exercise, LanguageSelector);
      expect(languageSelector.length).toBe(0);
    });

    it('should render language selector first if selectBy = Language', () => {
      var store = configure({
        selectBy: 'Language'
      });
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var languageSelector = TestUtils.scryRenderedComponentsWithType(exercise, LanguageSelector);
      var problemSelector = TestUtils.scryRenderedComponentsWithType(exercise, ProblemSelector);
      expect(languageSelector.length).toBe(1);
      expect(problemSelector.length).toBe(0);
    });

    it('should render exercise selector first if selectBy = Problem', () => {
      var store = configure({
        selectBy: 'Problem'
      });
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var languageSelector = TestUtils.scryRenderedComponentsWithType(exercise, LanguageSelector);
      var problemSelector = TestUtils.scryRenderedComponentsWithType(exercise, ProblemSelector);
      expect(problemSelector.length).toBe(1);
      expect(languageSelector.length).toBe(0);
    });

    it('should render language selector if selectBy = Problem and problem is selected', () => {
      var store = configure({
        selectBy: 'Problem',
        selectedProblem: '1775'
      });
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var languageSelector = TestUtils.scryRenderedComponentsWithType(exercise, LanguageSelector);
      var problemSelector = TestUtils.scryRenderedComponentsWithType(exercise, ProblemSelector);
      expect(problemSelector.length).toBe(1);
      expect(languageSelector.length).toBe(1);
    });

    it('should render problem selector if selectBy = Language and language is selected', () => {
      var store = configure({
        selectBy: 'Language',
        selectedLanguage: 'Test Language'
      });
      var exercise = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedExercise />
        </Provider>
      );
      var languageSelector = TestUtils.scryRenderedComponentsWithType(exercise, LanguageSelector);
      var problemSelector = TestUtils.scryRenderedComponentsWithType(exercise, ProblemSelector);
      expect(languageSelector.length).toBe(1);
      expect(problemSelector.length).toBe(1);
    });
  });
});
