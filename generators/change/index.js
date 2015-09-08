'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var fs = require('fs-extra');
var spawn = require('cross-spawn');

module.exports = yeoman.generators.Base.extend({
    inherit: function() {
        var me = this;

        // 从 package.json 中取回脚手架初始化项目时指定的一些变量
        var pkg = JSON.parse(me.readFileAsString('package.json'));
        me.authorName = pkg.author.name;
        me.ComponentName = _.capitalize(_.camelCase(pkg.name))
            .replace(/Uxcore/, '');
        me.name = pkg.name;
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

        pkg.scripts = {dev: "gulp server"};
        pkg.main = "src/index.js";
        me.writeFileFromString(JSON.stringify(pkg, null, '  '), 'package.json');
       
    },
    del: function() {
        var me = this;
        fs.remove('*.config.js');
        fs.remove('webpack.*.js');
        fs.remove('index*js');
    },
    copy: function() {
        var me = this;
        // gulpfile 和 gitignore 更新，不通知用户
        me.bulkCopy('_gitignore', '.gitignore');
        ['gulpfile.js', 'webpack.dev.js'].forEach(function(item, index) {
            me.bulkCopy(item, item);
        });
        me.template('index.html', 'index.html');
    },
    changeName: function() {
        var me = this;
        fs.copySync('lib', 'src', {});
        fs.copySync('example', 'demo', {});
        fs.remove('lib');
        fs.remove('example');
        fs.move('src/index.jsx', 'src/' + me.ComponentName + '.js', {}, function() {});
        fs.move('demo/index.jsx', 'demo/' + me.ComponentName + "Demo.js", {}, function() {});
        me.template('demo/ComponentNameDemo.less', 'demo/' + me.ComponentName + 'Demo.less');
        me.template('demo/index.js', 'demo/index.js');
        me.template('src/ComponentName.less', 'src/' + me.ComponentName + '.less');
        me.template('src/index.js', 'src/index.js');
    },
    install: function() {
        var me = this;
        var done = me.async();
        var args = [
            'install',
            '-d'
        ];
        var opts = {
            stdio: 'inherit'
        };
        spawn('tnpm', args, opts).on('error', function() {
            spawn('npm', args, opts).on('exit', done);
        }).on('exit', done);
    }
})
