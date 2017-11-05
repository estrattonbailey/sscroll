# sscroll
Tiny isomorphic smooth-scroll utility. **864b gzipped**.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Usage
```javascript
import sscroll from 'sscroll'

const target = document.getElementById('target')

const scroller = sscroll(target, {
  speed: 500, // px/second
  duration: 500, // ms
  offset: 50 // positive values scroll further
})
```
scroll returns the [Tweezer](https://github.com/jaxgeller/tweezer.js/) directly, meaning you have full access to its methods.
```javascript
scroller.on('done', () => {
  // all done
})

scroller.stop()
```

## Dependencies
- [Tweezer](https://github.com/jaxgeller/tweezer.js/) - A small, dependency-free, ES6 library for smooth animations, by [@jaxgeller](https://github.com/jaxgeller)

MIT License
