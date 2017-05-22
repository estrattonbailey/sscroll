import Tweezer from 'tweezer.js'

const getOffset = node => node.getBoundingClientRect().top + window.pageYOffset

export default (target, opts = {}) => {
  if (!target) return

  const end = getOffset(target) + (opts.offset || 0)
  const duration = opts.duration ? opts.duration : opts.speed ? ((end / (opts.speed || 1000)) * 1000) : opts.duration === 0 ? 0 : 500

  new Tweezer({
    start: window.pageYOffset,
    end,
    duration
  }).on('tick', p => window.scrollTo(0, p)).begin()
}
