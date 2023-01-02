const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 4000

// Line 7 is to connect the index file & express app to the static HTML page
app.use(express.static('./public'))
app.use(bodyParser.json())

// This is connecting the index JS file to the router file, which will flow into the controller and DB file
let userRoute = require("./routes/users")
app.use(userRoute)

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})