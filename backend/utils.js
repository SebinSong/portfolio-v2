const { promises: fsPromises, constants: fsConstants } = require('fs')

const checkFileExists = async (filePath) => {
  return fsPromises.access(filePath, fsConstants.R_OK)
    .then(() => true)
    .catch(() => false)
}

const sendBadRequestErr = (res, msg, errData = null) => {
  res.status(400)
  if (errData) {
    res.errData = errData
  }

  throw new Error(msg)
}

const checkRequiredFieldsAndThrow = (req, res, keys = []) => {
  for (const key of keys) {
    const val = req.body[key]

    if (!val) {
      sendBadRequestErr(
        res,
        `[${key}] field is missing in the request payload`,
        { errType: 'missing-field', fieldName: key }
      )
    }
  }
}

module.exports = {
  checkFileExists,
  sendBadRequestErr,
  checkRequiredFieldsAndThrow
}
