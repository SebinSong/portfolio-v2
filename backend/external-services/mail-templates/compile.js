const pug = require('pug')
const { readFile } = require('fs/promises')
const templateRenderer = pug.compileFile('inquiry-confirmation.pug')

async function run () {
  const combined = templateRenderer({ name: '세빈' })


  console.log('!@# combined and rendered: ', combined)
}

run()
