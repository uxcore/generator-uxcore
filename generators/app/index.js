'use strict';
var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    init: function() {
    },

    askFor: function() {
        var done = this.async();

        var prompts = [{
            name: 'name',
            message: 'Input uxcore Component Name (must start width `uxcore-`)',
            default: path.basename(process.cwd())
        },{
            name: 'description',
            message: 'Description',
            default: path.basename(process.cwd()) + ' component for uxcore.'
        }, {
            name: 'keywords',
            message: 'Key your keywords (comma to split)'
        }, {
            name: 'authorName',
            message: 'Author\'s Name',
            store: true
        }, {
            type: 'confirm',
            name: 'skipInstall',
            message: 'Skip install the dependencies?',
            default: false
        }];

        this.prompt(prompts, function(answers) {
            this.name = answers.name;
            this.ComponentName = _.capitalize(_.camelCase(answers.name))
                .replace(/Uxcore/, '');

            this.keywords = answers.keywords.split(',').map(function(el) {
                return el.trim();
            });

            this.props = answers;
            done();
        }.bind(this));
    },

    app: function() {
        this.config.save();
        this.copy('_gitignore', '.gitignore');
        this.copy('_editorconfig', '.editorconfig')
        this.copy('_jshintrc', '.jshintrc');
        ['gulpfile.js', 'HISTORY.md', 'webpack.dev.js'].forEach(function(item, index) {
            this.copy(item, item);
        }.bind(this));
        this.template('README.md', 'README.md');
        this.template('_package.json', 'package.json');
    },

    demoFiles: function() {
        this.template('index.html', 'index.html');
        this.template('demo/index.js', 'demo/index.js');
        this.template('demo/ComponentNameDemo.js', 'demo/'+this.ComponentName+'Demo.js');
        this.template('demo/ComponentNameDemo.less', 'demo/'+this.ComponentName+'Demo.less');
    },

    componentFiles: function () {
        this.template('src/index.js', 'src/index.js');
        this.template('src/ComponentName.js', 'src/'+this.ComponentName+'.js');
        this.template('src/ComponentName.less', 'src/'+this.ComponentName+'.less');
    },

    install: function() {
        if (this.props.skipInstall) {
            return;
        }
        this.spawnCommand('tnpm', [
            'install',
            '-d'
        ]).on('close', this.async());
    }
});