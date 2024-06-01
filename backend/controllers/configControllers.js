const path = require('node:path')
const asyncHandler = require('../middlewares/asyncHandler')
const { checkFileExists } = require('../utils')

const relToFixtures = filename => path.resolve(__dirname, `../fixtures/${filename}`)
const RESUME_ABS_PATH = relToFixtures('resume.pdf')

const downloadHandler = asyncHandler(async (req, res, next) => {
  const { resource } = req.query

  switch (resource) {
    case 'resume': {
      res.status(200).download(RESUME_ABS_PATH, 'resume_SebinSong.pdf')
      break
    }
    default {
      const resourcePath = relToFixtures(resource)

      if (await checkFileExists(resourcePath)) {
        res.status(200).download(resourcePath, resource)
      }
    }
  }

  next()
})

module.exports = {
  downloadHandler
}
