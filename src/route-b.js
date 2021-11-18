module.exports = {
  path: "/route-b",
  handler: (request, response) => {
    setTimeout(() => {
      response.end("Route B")
    }, 100)
  },
}
