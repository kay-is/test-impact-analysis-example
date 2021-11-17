const { exec } = require("child_process")
const jest = require("jest")
const tia = require("./tia")

function getFilesInLatestCommit() {
  return new Promise((resolve, reject) => {
    exec("git show --pretty=%gd --stat", (error, stdOut) => {
      if (error) return reject(error)
      resolve(stdOut.match(/src\/.*.js/gi).map((f) => "./" + f))
    })
  })
}

async function main() {
  const affectedSourceFiles = await getFilesInLatestCommit()
  const requiredTestFiles = []

  for (const sourceFile of affectedSourceFiles) {
    for (const testFile of Object.keys(tia)) {
      if (tia[testFile].includes(sourceFile)) requiredTestFiles.push(testFile)
    }
  }

  await jest.run(requiredTestFiles)
}

main()
