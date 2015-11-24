'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var file = require('html-wiring');

module.exports = yeoman.generators.Base.extend({
    inherit: function() {
        var me = this;
        var pkg = JSON.parse(file.readFileAsString('package.json'));
        pkg.dependencies['object-assign'] = '^4.0.0';
        file.writeFileFromString(JSON.stringify(pkg, null, '  '), 'package.json');
    }
});