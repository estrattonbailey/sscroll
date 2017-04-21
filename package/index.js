import Tweezer from 'tweezer.js'

const getOffset = node => node.getBoundingClientRect().top + window.pageYOffset

export default (target, opts = {}) => {
  if (!target) return

  const offset = getOffset(target) + (opts.offset || 0)

  new Tweezer({
    start: window.pageYOffset,
    end: offset,
    duration: offset * ((opts.speed || 500) / 1000)
  }).on('tick', p => window.scrollTo(0, p)).begin()
}
