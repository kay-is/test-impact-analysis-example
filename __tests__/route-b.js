const expect = require("expect")
const route = require("../src/route-b")

describe("Route B", () => {
  it("has a handler function", () => {
    let result;
    route.handler({}, {end: (text) => result = text})
    expect(result).toEqual("Route B")
  })
})