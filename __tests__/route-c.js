const expect = require("expect")
const route = require("../src/route-c")

describe("Route C", () => {
  it("has a handler function", (done) => {
    route.handler(null, {
      end: (text) => {
        expect(text).toEqual("Route C")
        done()
      },
    })
  })
})
