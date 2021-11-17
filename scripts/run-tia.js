const jest = require("jest")
const tia = require("./tia")

async function main() {
  const requiredTestFiles = []
  const allChangedFiles = JSON.parse(process.argv[2])
  const changedSourceFiles = allChangedFiles.filter((file) =>
    /src\/.*.js/gi.test(file)
  )

  if (changedSourceFiles.length < 1)
    return console.log("No JS files in src directory changed. Aborted.")

  for (const sourceFile of changedSourceFiles) {
    console.log("Finding tests for source file: ", sourceFile)
    for (const testFile of Object.keys(tia)) {
      console.log("Checking test file:", testFile)
      console.log("Impacted source files:", tia[testFile])
      if (tia[testFile].includes(sourceFile)) {
        console.log("test file includes source file!")
        requiredTestFiles.push(testFile)
      }
    }
  }

  await jest.run(requiredTestFiles)
}

main()
