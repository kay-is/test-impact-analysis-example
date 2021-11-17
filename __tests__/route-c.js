const expect = require("expect")
const route = require("../src/route-c")

describe("Route C", () => {
  it("has a handler function", () => {
    let result;
    route.handler({}, {end: (text) => result = text})
    expect(result).toEqual("Route C")
  })
})