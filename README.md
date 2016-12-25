# generator-neutrino-react [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> generate basic react project powered by [neutrino-preset-react](https://github.com/mozilla-neutrino/neutrino-preset-react)

This [neutrino](https://github.com/mozilla-neutrino/neutrino) preset enables building JSX-supported React-based web applications with a common configuration for Webpack, ESLint, Babel, Karma+Mocha, along with a static local development server. And **you don't need to maintain these package configurations and dependencies directly on your project**, neutrino and neutrino-presets handle these for you.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-neutrino-react using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-neutrino-react
```

Then create a project directory and initiate the generator

```bash
mkdir myweb
cd myweb
yo neutrino-react
```

## License

MIT © [Fred Lin](https://github.com/mozilla-neutrino/)


[npm-image]: https://badge.fury.io/js/generator-neutrino-react.svg
[npm-url]: https://npmjs.org/package/generator-neutrino-react
[travis-image]: https://travis-ci.org/gasolin/generator-neutrino-react.svg?branch=master
[travis-url]: https://travis-ci.org/gasolin/generator-neutrino-react
[daviddm-image]: https://david-dm.org/gasolin/generator-neutrino-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/gasolin/generator-neutrino-react
