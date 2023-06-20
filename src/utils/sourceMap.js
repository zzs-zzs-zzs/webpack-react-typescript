/** 通过source-map 定位源码错误位置 */

const fs = require("fs")
const path = require("path")
const { SourceMapConsumer } = require("source-map")

const stack = `
  Error: 手动抛出错误
  at onClick (http://localhost:3000/static/js/main.87948f53.js:2:12253)
  at te (http://localhost:3000/static/js/vendor.30784604.js:2:131903)
  at Object.Ie (http://localhost:3000/static/js/vendor.30784604.js:2:596135)
  at De (http://localhost:3000/static/js/vendor.30784604.js:2:596289)
  at http://localhost:3000/static/js/vendor.30784604.js:2:616171
  at Zr (http://localhost:3000/static/js/vendor.30784604.js:2:616265)
  at zr (http://localhost:3000/static/js/vendor.30784604.js:2:616679)
  at http://localhost:3000/static/js/vendor.30784604.js:2:622117
  at cu (http://localhost:3000/static/js/vendor.30784604.js:2:685488)
  at Ae (http://localhost:3000/static/js/vendor.30784604.js:2:595268)
`

function processShowErrorLocation() {
  const dirName = path.resolve(__dirname, "../../dist/static/js")
  const isExit = fs.existsSync(dirName)
  if (!isExit) {
    console.log(
      "%c [ 文件夹路径不存在，是不是没有打包，可执行命令yarn build:prod ]-26",
      "font-size:13px; background:pink; color:#bf2c9f;",
    )
    return
  }
  const files = fs.readdirSync(dirName)
  const regex = /^(?!vendor).*\.js.map$/
  files.forEach((item) => {
    if (!regex.test(item)) {
      return
    }
    const filePath = path.join(dirName, item)
    getSourceCodeLocation(filePath)
  })
}

async function getSourceMapConsumer(filePath) {
  const mapFile = path.resolve(filePath)
  const sourceMapContent = fs.readFileSync(mapFile).toString()
  return await new SourceMapConsumer(sourceMapContent)
}

async function getSourceCodeLocation(filePath) {
  const match = /(\w+\.js):(\d+):(\d+)/.exec(stack)
  const line = parseInt(match[2], 10)
  const column = parseInt(match[3], 10)
  const consumer = await getSourceMapConsumer(filePath)
  const originalPosition = consumer.originalPositionFor({
    line,
    column,
    bias: SourceMapConsumer.GREATEST_LOWER_BOUND,
  })
  originalPosition.mapFilePath = filePath
  if (!originalPosition.source) {
    return
  }

  console.log(originalPosition) // { source: 'test.js', line: 2, column: 0, name: 'sum' }
}

processShowErrorLocation()
