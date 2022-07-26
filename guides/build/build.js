const { exec } = require('child_process')
const util = require('util')
const execPromise = util.promisify(exec)

const SOURCE_DIR = 'src'
const BUILD_DIR = 'dist'

const build = async () => {
    await execPromise(`
      ./node_modules/.bin/babel ${SOURCE_DIR} --out-dir ${BUILD_DIR}
  `)
}

build()