/*
  Below is pretty much the short logic of 
  function (fn) {
    return async (req, res, next) => {
      try {
        await fn(req, res, next)
      } catch (err) {
        next(err)
      }
    }
  }
 */

module.exports = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}
