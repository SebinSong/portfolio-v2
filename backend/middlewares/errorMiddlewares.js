'use strict'

const notFound = (req, res, next) => {
  const err = new Error(`Not Found - ${req.originalUrl}`)

  res.status(404)
  next(err)
}

const globalErrorHandler = (err, req, res, next) => {
  let code = res.statusCode === 200 ? 500 : res.statusCode
  let msg = err.message || 'Server experienced an issue'

  res.status(code).json({
    errorMessage: msg,
    stack: err.stack || null,
    data: {
      ...(res.errData || {})
    }
  })
}

module.exports = {
  notFound,
  globalErrorHandler
}
