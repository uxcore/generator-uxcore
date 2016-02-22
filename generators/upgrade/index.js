'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var file = require('html-wiring');

var sortObjByKey = function(unordered) {
    var ordered = {};
    Object.keys(unordered).sort().forEach(function(key) {
        ordered[key] = unordered[key];
    })
    return ordered;
}

module.exports = yeoman.generators.Base.extend({
    inherit: function() {
        var me = this;
        var pkg = JSON.parse(file.readFileAsString('package.json'));
        pkg.devDependencies = _.assign({}, pkg.devDependencies, {
            "babel": "~6.3.26",
            "babel-core": "~6.4.0",
            "babel-loader": "~6.2.1",
            "babel-plugin-add-module-exports": "~0.1.2",
            "babel-preset-es2015": "~6.3.13",
            "babel-preset-react": "~6.3.13",
            "babel-preset-stage-1": "~6.3.13",
            "browser-sync": "~2.11.0",
            "gulp-babel": "~6.1.1"
        });

        pkg.devDependencies = sortObjByKey(pkg.devDependencies);

        pkg.main = 'build/index.js';

        file.writeFileFromString(JSON.stringify(pkg, null, '  '), 'package.json');
        ['gulpfile.js', 'webpack.dev.js'].forEach(function(item, index) {
            this.copy(item, item);
        }.bind(this));
        this.template('_gitignore', '.gitignore');
    }
});
