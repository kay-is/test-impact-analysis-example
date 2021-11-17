const expect = require("expect")
const route = require("../src/route-a")

describe("Route A", () => {
  it("has a handler function", () => {
    let result;
    route.handler({}, {end: (text) => result = text})
    expect(result).toEqual("Route A")
  })
})