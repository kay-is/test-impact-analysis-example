const expect = require("expect")
const routeA = require("../src/route-a")
const routeC = require("../src/route-c")

describe("Route A", () => {
  it("has a handler function", (done) => {
    routeA.handler(null, {
      end: (text) => {
        expect(text).toEqual("Route A")
        done()
      },
    })
  })
})

describe("Route C", () => {
  it("has a handler function", (done) => {
    routeC.handler(null, {
      end: (text) => {
        expect(text).toEqual("Route C")
        done()
      },
    })
  })
})
