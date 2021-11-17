const expect = require("expect")
const routeA = require("../src/route-a")
const routeC = require("../src/route-c")

describe("Route A", () => {
  it("has a handler function", () => {
    let result
    routeA.handler({}, { end: (text) => (result = text) })
    expect(result).toEqual("Route A")
  })
})

describe("Route C", () => {
  it("has a handler function", () => {
    let result
    routeC.handler({}, { end: (text) => (result = text) })
    expect(result).toEqual("Route C")
  })
})
