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
            message: 'Component Name (must start width `uxcore-`)',
            default: path.basename(process.cwd())
        },{
            name: 'description',
            message: 'Description',
            default: path.basename(process.cwd()) + ' component for uxcore.'
        }, {
            name: 'keywords',
            message: 'Key your keywords (comma to split)',
            default: 'component'
        }, {
            name: 'authorName',
            message: 'Author\'s Name',
            default: 'eternalsky',
            store: true
        }];

        this.prompt(prompts, function(answers) {
            this.name = answers.name;
            this.demoName = this.name.split('-').slice(1).join('-');
            this.descriptionName = "React " + this.demoName.split('-').join(' ');
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
        this.copy('_travis.yml', '.travis.yml');
        this.copy('_gitignore', '.gitignore');
        this.copy('_npmignore', '.npmignore');
        this.copy('HISTORY.md', 'HISTORY.md');
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

    testFiles: function() {
        this.template('tests/ComponentName.spec.js', 'tests/' + this.ComponentName + '.spec.js');
        this.copy('tests/index.js', 'tests/index.js');
    }
});