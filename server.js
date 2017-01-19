var express    = require('express')
var app        = express()
var bodyParser = require('body-parser')
var routes = require('./app/game')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

var router = express.Router()

router.get('/test', function(req, res) {
  routes.test(req, res)
})

router.post('/create', function(req, res) {
  routes.create(req, res)
})

router.put('/update', function(req, res) {
  routes.update(req, res)
})

app.use('/battleship', router)

app.listen(port)
console.log('Server started on port ' + port)

module.exports = app
