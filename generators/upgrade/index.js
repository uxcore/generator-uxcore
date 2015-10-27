'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    inherit: function() {
        var me = this;
        me.bulkCopy('gulpfile.js', 'gulpfile.js');
        me.bulkCopy('webpack.dev.js', 'webpack.dev.js');
    }
});