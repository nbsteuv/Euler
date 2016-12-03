var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {LanguageSelector} from 'LanguageSelector';

describe('LanguageSelector', () => {
  it('should exist', () => {
    expect(LanguageSelector).toExist();
  });

  it('should render language images from language list', () => {
    var languages = [
      {
        name: 'langugage1',
        imageFile: 'images/language1.jpg',
        displayName: 'Language 1'
      },
      {
        name: 'langugage2',
        imageFile: 'images/language2.jpg',
        displayName: 'Language 2'
      }
    ];
    var languageSelector = TestUtils.renderIntoDocument(<LanguageSelector languageList={languages} />);
    var $el = $(ReactDOM.findDOMNode(languageSelector));
    var numberLanguages = $el.find('span').length;
    expect(numberLanguages).toBe(2);
  });
});
