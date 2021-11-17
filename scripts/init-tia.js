const fs = require("fs")
const jest = require("jest")

async function main() {
  const testFileNames = fs.readdirSync("./__tests__")
  const testImpact = {}

  for (const testFileName of testFileNames) {
    await jest.run(testFileName)

    const absoluteFilePaths = Object.keys(
      JSON.parse(fs.readFileSync("./coverage/coverage-final.json"))
    )

    testImpact[testFileName] = absoluteFilePaths.map((f) =>
      f.replace(process.cwd(), ".")
    )
  }

  fs.writeFileSync("./scripts/tia.json", JSON.stringify(testImpact, null, 2))
}

main()
