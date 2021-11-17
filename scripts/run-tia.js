const jest = require("jest")
const tia = require("./tia")

async function main() {
  const requiredTestFiles = []
  const allChangedFiles = JSON.parse(process.argv[2])
  const changedSourceFiles = allChangedFiles.filter((file) =>
    /src\/.*.js/gi.test(file)
  )

  console.log(changedSourceFiles)

  if (changedSourceFiles.length < 1)
    return console.log("No JS files in src directory changed. Aborted.")

  for (const sourceFile of changedSourceFiles) {
    for (const testFile of Object.keys(tia)) {
      if (tia[testFile].includes(sourceFile)) requiredTestFiles.push(testFile)
    }
  }

  await jest.run(requiredTestFiles)
}

main()
