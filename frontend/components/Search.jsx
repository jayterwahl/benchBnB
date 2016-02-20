var React = require('react');
var Map = require('./Map');
var BenchIndex = require('./benchIndex');
var PropTypes = React.PropTypes;

var Search = React.createClass({

  render: function() {
    return (
      <div>

        <Map></Map>
        <BenchIndex></BenchIndex>

      </div>
    );
  }

});

module.exports = Search;
