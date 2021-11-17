const expect = require("expect")
const route = require("../src/route-a")

describe("Route A", () => {
  it("has a handler function", (done) => {
    route.handler(null, {
      end: (text) => {
        expect(text).toEqual("Route A")
        done()
      },
    })
  })
})
