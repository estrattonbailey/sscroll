import tinkerbell from 'tinkerbell'

const getOffset = node => node.getBoundingClientRect().top + window.pageYOffset

export default (target, opts = {}) => {
  if (!target) return

  const end = getOffset(target) + (opts.offset || 0)
  const duration = opts.duration || 500

  return duration ? (
    tinkerbell(window.pageYOffset, end, duration, (t, b, c, d) => {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * ((--t) * (t - 2) - 1) + b
    })(p => window.scrollTo(0, p))
  ) : (
    window.scrollTo(0, end)
  )
}
