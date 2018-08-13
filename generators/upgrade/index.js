var path = require('path');
var _ = require('lodash');
var Generator = require('yeoman-generator');
var file = require('html-wiring');
var shelljs = require('shelljs');
var fs = require('fs');

var tryIfNotExist = function (path, cb) {
  try {
    fs.statSync(path)
  } catch (e) {
    console.log(e);
    cb();
  }
}

module.exports = class extends Generator {
  app() {
    var pkg = JSON.parse(file.readFileAsString('package.json'));
    const deps = Object.keys(pkg.dependencies).filter(((item) => item.indexOf('uxcore') !== -1));
    this.deps = deps.map((item) => {
      return {
        name: item,
        CamelName: _.upperFirst(_.camelCase(item))
        .replace(/Uxcore/, ''),
      }
    });
    this.ComponentName = _.upperFirst(_.camelCase(pkg.name)).replace(/Uxcore/, '');
    this.fs.copyTpl(this.templatePath('style/index.js'), this.destinationPath('style/index.js'), this);
    this.fs.copy(this.templatePath('webpack.custom.js'), this.destinationPath('webpack.custom.js'));
  }
}
