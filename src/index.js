const express = require("express")
const helmet = require("helmet")
const app = express()

// body parser
app.use(express.json())
app.use(helmet())

// Server config
const { config } = require("./config")

//Routes
const platziStore = require("./routes")
const authApi = require("./routes/auth")

app.get("/", (req, res) => {
  let userInfo = req.header("user-agent")
  res.send(`UserInfo: ${userInfo}`)
})

platziStore(app)
authApi(app)

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error: ", err)
    return
  }
  console.log(`Listening http://localhost:${config.port}`)
})
