const path = require('node:path')
const asyncHandler = require('../middlewares/asyncHandler')
const { checkFileExists } = require('../utils')

const relToFixtures = filename => path.resolve(__dirname, `../fixtures/${filename}`)
const RESUME_ABS_PATH = relToFixtures('resume_sebinsong.pdf')

const downloadHandler = asyncHandler(async (req, res, next) => {
  const { resource } = req.query
  const download = (filePath, name) => {
    return res.status(200).download(filePath, name)
  }

  switch (resource) {
    case 'resume': {
      if (await checkFileExists(RESUME_ABS_PATH)) {
        return download(RESUME_ABS_PATH, 'resume_SebinSong.pdf')
      }
    }
    default: {
      const resourcePath = relToFixtures(resource)

      if (await checkFileExists(resourcePath)) {
        return download(resourcePath, resource)
      }
    }
  }

  next()
})

module.exports = {
  downloadHandler
}
