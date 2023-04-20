const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

require("./config/mongoose.config")
app.use(express.json(), express.urlencoded({extended: true}))

const AllProductRoutes = require('./routes/products.routes')
AllProductRoutes(app)

app.listen(8000, () => console.log("Server is listening on port 8000"))