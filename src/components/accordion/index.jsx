"use strict";
/**
* Very beginning and simple component to build from.
*/

const React = require( "react" );

var Accordion = React.createClass({
  // get the initial state of our component, ran once before the
  // component is mounted to the DOM.
  getInitialState: function () {
    return {
      active: null
    };
  },

  // component was mounted and initial render has occurred
  componentDidMount: function () {

  },

  // do your cleanup before the component is unmounted from DOM
  componentWillUnmount: function () {

  },

  // our component template
  render: function () {
    return (
      <div>

      </div>
    );
  }

});

module.exports = Accordion;
