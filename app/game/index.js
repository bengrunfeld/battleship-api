module.exports = {
  create: function(req, res) {
    var positions = JSON.parse(req.body.positions)

    // Fill in body to initialize the game and return a success response

    res.json({ message: 'success' })
  },

  update: function(req, res) {
    x = req.body.x
    y = req.body.y

    // Fill in body to take x and y coordinates and return result as "miss", "hit" or "sunk"
    var result = null

    res.json({ message: result })
  }
}
