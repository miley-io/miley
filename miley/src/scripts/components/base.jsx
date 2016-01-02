/*

  Miley React Base Component
  ~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');

// Base Window Component
var Base = React.createClass({

  render: function() {
    return (
      <div className="miley-base-window">
        {this.props.children}
      </div>
    );
  }

});

module.exports = Base;