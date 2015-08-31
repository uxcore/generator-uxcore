'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    inherit: function() {
        var me = this;
        // 从 package.json 中取回脚手架初始化项目时指定的一些变量
        var pkg = JSON.parse(me.readFileAsString('package.json'));
        pkg.dependencies = {
            "classnames": "^2.1.2",
            "object-assign": "^2.0.0",
            "react": "^0.13.3",
            "uxcore-kuma": "~1.0.6"
        };

        pkg.devDependencies = {
            "babel-core": "^5.6.18",
            "babel-loader": "^5.3.1",
            "browser-sync": "~2.8.2",
            "console-polyfill": "~0.2.1",
            "es5-shim": "~4.1.10",
            "gulp": "~3.9.0",
            "gulp-concat": "~2.6.0",
            "gulp-just-replace": "~1.0.2",
            "gulp-less": "~3.0.3",
            "gulp-sourcemaps": "~1.5.2",
            "webpack": "^1.10.5"
        }
        me.writeFileFromString(JSON.stringify(pkg, null, '  '), 'package.json');
        me.bulkCopy('gulpfile.js', 'gulpfile.js');
    }
});