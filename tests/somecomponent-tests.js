'use strict';

var expect = require('chai').expect;

describe('SomeComponent', function() {
  it('renders SomeComponent', function() {
    var React = require('react/addons');
    var SomeComponent = require('../src').SomeComponent;
    var TestUtils = React.addons.TestUtils;

    var somecomponent = TestUtils.renderIntoDocument(
      <SomeComponent/>
    );

    expect(somecomponent).to.exist();

  });
});
