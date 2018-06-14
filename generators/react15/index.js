'use strict';
var path = require('path');
var _ = require('lodash');
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    var prompts = [{
      name: 'name',
      message: 'Component Name (must start width `uxcore-`)',
      default: path.basename(process.cwd())
    }, {
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

    return this.prompt(prompts).then((answers) => {
      this.name = answers.name;
      this.demoName = this.name.split('-').slice(1).join('-');
      this.descriptionName = "React " + this.demoName.split('-').join(' ');
      this.ComponentName = _.upperFirst(_.camelCase(answers.name))
        .replace(/Uxcore/, '');

      this.keywords = answers.keywords.split(',').map(function (el) {
        return el.trim();
      });
      this.props = answers;
    });
  }

  app() {
    this.config.save();
    this.fs.copy(this.templatePath('_travis.yml'), this.destinationPath('.travis.yml'));
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('_npmignore'), this.destinationPath('.npmignore'));
    this.fs.copy(this.templatePath('_eslintrc.json'), this.destinationPath('.eslintrc.json'));
    this.fs.copy(this.templatePath('HISTORY.md'), this.destinationPath('HISTORY.md'));
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), this);
    this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this);
  }

  demoFiles() {
    this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('index.html'), this);
    this.fs.copyTpl(this.templatePath('demo/index.jsx'), this.destinationPath('demo/index.jsx'), this);
    this.fs.copyTpl(this.templatePath('demo/ComponentNameDemo.jsx'), this.destinationPath('demo/' + this.ComponentName + 'Demo.jsx'), this);
    this.fs.copyTpl(this.templatePath('demo/ComponentNameDemo.less'), this.destinationPath('demo/' + this.ComponentName + 'Demo.less'), this);
  }

  componentFiles() {
    this.fs.copyTpl(this.templatePath('src/index.js'), this.destinationPath('src/index.js'), this);
    this.fs.copyTpl(this.templatePath('src/ComponentName.jsx'), this.destinationPath('src/' + this.ComponentName + '.jsx'), this);
    this.fs.copyTpl(this.templatePath('src/ComponentName.less'), this.destinationPath('src/' + this.ComponentName + '.less'), this);
  }

  testFiles() {
    this.fs.copyTpl(this.templatePath('tests/ComponentName.spec.js'), this.destinationPath('tests/' + this.ComponentName + '.spec.js'), this);
    this.fs.copy(this.templatePath('tests/index.js'), this.destinationPath('tests/index.js'));
  }
};