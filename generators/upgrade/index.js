'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var file = require('html-wiring');
var shelljs = require('shelljs');

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
        var oldDev = {};

        for (var key in pkg.devDependencies) {
            if (/uxcore/.test(key)) {
                oldDev[key] = pkg.devDependencies[key];
            }
        }

        pkg.devDependencies = _.assign({}, oldDev, {
            "console-polyfill": "^0.2.2",
            "es5-shim": "^4.5.8",
            "react": "0.14.x",
            "react-dom": "0.14.x",
            "react-addons-test-utils": "0.14.x",
            "expect.js": "~0.3.1",
            "uxcore-tools": "0.2.x",
            "uxcore-kuma": "2.x",
            "kuma-base": "1.x"
        });

        pkg.devDependencies = sortObjByKey(pkg.devDependencies);
        pkg.scripts = {}
        var commands = ['start', 'server', 'lint', 'build', 'test', 'coverage', 'pub', 'dep', 'tnpm-dep', 'chrome', 'browsers', 'saucelabs', 'update', 'tnpm-update'];
        commands.forEach(function(item) {
            pkg.scripts[item] = 'uxcore-tools run ' + item;
        });
        var cwd = process.cwd();
        shelljs.rm('-rf', ['.editorconfig', '.jshintrc', 'gulpfile.js', 'webpack.dev.js'].map(function(item) {
            return cwd + '/' + item;
        }));

        file.writeFileFromString(JSON.stringify(pkg, null, '  '), 'package.json');
        this.ComponentName = _.capitalize(_.camelCase(pkg.name.split('-').slice(1).join('-')));
        this.template('tests/ComponentName.spec.js', 'tests/' + this.ComponentName + '.spec.js');
        this.copy('tests/index.js', 'tests/index.js');
        this.copy('_eslintrc.json', '.eslintrc.json');
        this.copy('_travis.yml', '.travis.yml');
        this.copy('_gitignore', '.gitignore');
        this.copy('_npmignore', '.npmignore');
    }
});
