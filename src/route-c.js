module.exports = {
  path: "/route-c",
  handler: (request, response) => {
    setTimeout(() => {
      response.end("Route C")
    }, 1000)
  },
}
