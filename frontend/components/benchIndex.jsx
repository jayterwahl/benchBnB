var React = require('react');
var PropTypes = React.PropTypes;
var BenchStore = require('../stores/bench');

var BenchIndex = React.createClass({

  __onChange: function(){
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function(){
    this.ListenerToken = BenchStore.addListener(this.__onChange());
  },

  render: function() {
      return (
      <div> double yo </div>
    );
  }

});

module.exports = BenchIndex;
