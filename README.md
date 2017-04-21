# sscroll
Tiny isomorphic smooth-scroll utility. **1.4kb gzipped** with dependencies.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Usage
```javascript
import sscroll from 'sscroll'

const target = document.getElementById('target')

sscroll(target, {
  speed: 500, // in px/second
  offset: 50 // positive values scroll further
})
```

MIT License
