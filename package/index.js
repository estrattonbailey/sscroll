import Tweezer from 'tweezer.js'

const getOffset = node => node.getBoundingClientRect().top + window.pageYOffset

export default (target, opts = {}) => {
  if (!target) return

  const end = getOffset(target) + (opts.offset || 0)
  const duration = opts.duration !== undefined ? opts.duration : opts.speed ? ((end / (opts.speed || 1000)) * 1000) : 0

  return new Tweezer({
    start: window.pageYOffset,
    end,
    duration
  }).on('tick', p => window.scrollTo(0, p)).begin()
}
