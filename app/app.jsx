var React = require ('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');

$(document).foundation();

// application styles
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//    <p>Experimenting with redux</p>,
//    document.getElementById('app')
//  );

require('./redux-example.jsx');
//require('./redux-todo-example.jsx');
