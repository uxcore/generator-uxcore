## <%= name%>

<%= descriptionName%>

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/<%= name%>.svg?style=flat-square
[npm-url]: http://npmjs.org/package/<%= name%>
[travis-image]: https://img.shields.io/travis/uxcore/<%= name%>.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/<%= name%>
[coveralls-image]: https://img.shields.io/coveralls/uxcore/<%= name%>.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/<%= name%>?branch=master
[dep-image]: http://img.shields.io/david/uxcore/<%= name%>.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/<%= name%>
[devdep-image]: http://img.shields.io/david/dev/uxcore/<%= name%>.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/<%= name%>#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/<%= name%>.svg
[sauce-image]: https://saucelabs.com/browser-matrix/<%= name%>.svg
[sauce-url]: https://saucelabs.com/u/<%= name%>


### Development

```sh
git clone https://github.com/uxcore/<%= name%>
cd <%= name%>
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/<%= name%>
cd <%= name%>
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/<%= demoName%>

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|

