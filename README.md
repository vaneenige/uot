# Update Over Time (uot)

[![npm version](https://img.shields.io/npm/v/uot.svg)](https://www.npmjs.com/package/uot)
[![gzip size](http://img.badgesize.io/https://unpkg.com/uot/dist/uot.mjs?compression=gzip)](https://unpkg.com/uot)
[![license](https://img.shields.io/npm/l/uot.svg)](https://github.com/vaneenige/uot/blob/master/LICENSE)
[![dependencies](https://img.shields.io/badge/dependencies-none-ff69b4.svg)](https://github.com/vaneenige/uot/blob/master/package.json)

Update Over Time (uot) is a **200b** library to provide the easiest way for updating values over time. Provide a callback and a duration you're ready to go!

This utility can be useful for CSS animations, DOM changes, WebGL transitions or anything that can be updated based on a progress value.

>It's basically a setTimeout with progress.

#### Features:

- Small in size, no dependencies
- Based on requestAnimationFrame
- Optimized for multiple instances

## Install

```
$ npm install --save uot
```

## Usage

Import the library:
```js
import updateOverTime from 'uot';
```

Provide a callback and a duration:
```js
updateOverTime((progress) => {
  // Progress value: 0 ... 1
  if (progress === 1) {
    // Handle complete
  }
}, 2000);
```

Use the progress value to update the DOM (or anything):
```js
updateOverTime((progress) => {
  // Add easing to the progress value
  progress = easeInOutQuad(progress);
  // Output the progress value to the DOM
  document.body.textContent = progress.toFixed(2);
}, 4000);
```

> At any given time only a single requestAnimationFrame will be called.

## License

MIT © <a href="https://use-the-platform.com">Colin van Eenige</a>

