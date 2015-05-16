/**
* @author: zhouquan.yezq
* @time  : 5/16 2015
*/
var yeoman = require('yeoman-generator');
var Base = yeoman.generators.NamedBase;
var Path = require('path');
var fs = require('fs');

function camelCase(name){
  return name.replace(/-\w/g,function(m){
    return m.charAt(1).toUpperCase();
  })
}

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
  },

  welcome: function () {
    var index= this.name.lastIndexOf('.');
    if(index==-1) {
      this.name= this.name.slice(0);
    }else {
      this.name= this.name.slice(0, this.name.lastIndexOf('.'));
    }
    this.log('quick new js file: ' + this.name+".js");
  },

  setup: function () {
    this.dest.write( this.name + '.js', [
      '/** @jsx React.DOM */',
      'import React from \'react\';',
      'const component = React.createClass({',
      '  propTypes:{},',
      '  getDefaultProps() {},',
      '  getInitialState() {},',
      '  render() {},',
      '  componentDidMount() {},',
      '  componentDidUpdate(){}',
      '  componentWillUnmount(){}',
      '});',
      'module.exports = component;'
    ].join('\n'));
  },

  done: function () {
    this.log('done');
  }
});