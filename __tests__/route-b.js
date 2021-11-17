const expect = require("expect")
const route = require("../src/route-b")

describe("Route B", () => {
  it("has a handler function", (done) => {
    route.handler(null, {
      end: (text) => {
        expect(text).toEqual("Route B")
        done()
      },
    })
  })
})
