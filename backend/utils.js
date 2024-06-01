const { promises: fsPromises, constants: fsConstants } = require('fs')

const checkFileExists = async (filePath) => {
  return fsPromises.access(filePath, fsConstants.R_OK)
    .then(() => true)
    .catch(() => false)
}

module.exports = {
  checkFileExists
}
