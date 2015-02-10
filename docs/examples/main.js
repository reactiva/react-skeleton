'use strict';

var React = require('react');
var SomeComponent = require('../../src').SomeComponent;

var Demos = React.createClass({

  render: () => {


    return (
      <SomeComponent />
    );
  }

});

React.render(
  <Demos />,
  document.body
);
