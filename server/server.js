const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const corsOption = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOption))

//Models
const db = require('./app/models')

//Sequelize
db.connex.sync()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//initial test
app.get('/', (req, res) => {
    res.json({message: "Welcome" })
})

//api 
require('./app/routes/product.route')(app)
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('Api server is running on port ' + PORT)
})
