var BenchStore = require('./stores/bench');
var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var ApiUtil = require('./util/api_util');
var Dispatcher = require('./dispatcher/Dispatcher');
var Search = require('./components/Search');





document.addEventListener('DOMContentLoaded', function(){

  var content = document.querySelector('#content');
  ReactDOM.render(
    <Search />, content
  );

});
