const express = require('express')
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html", { domain: PORT })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})