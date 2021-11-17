const express = require("express")

const routes = [
  require("./route-a"),
  require("./route-b"),
  require("./route-c"),
]

const api = express()

routes.forEach(({ path, handler }) => api.get(path, handler))

api.listen(8000, () => console.log("API running!"))
