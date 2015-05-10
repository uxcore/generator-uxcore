/** @jsx React.DOM */
// use jsx to render html, do not modify simple.html
require('uxcore-<%= appname%>/style/index.css');
var <%= AppName%> = require('uxcore-<%= appname%>');
var React = require('react');
React.render(<<%= AppName%> />, document.getElementById('content'));
