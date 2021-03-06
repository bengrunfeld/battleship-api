// call the packages we need
var express    = require('express')
var app        = express()
var bodyParser = require('body-parser')
var routes = require('./app/game')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 3000

// ROUTING
var router = express.Router()

router.post('/', function(req, res) {
  routes.create(req, res)
})

router.put('/', function(req, res) {
  routes.update(req, res)
})

// Define all of our ROUTES
app.use('/battleship', router)

function initializeBoard() {
  // Set up Environment Variable to maintain game state
  let gameState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  process.env['STATE'] = JSON.stringify(gameState)
}

app.listen(port, initializeBoard)
console.log('Server started on port ' + port)

module.exports = app
