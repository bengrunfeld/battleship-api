module.exports = {
  validateCoords: function(arr) {
    let isValid = true 

    // Check that coordinates are valid (>2 && <9)
    arr.forEach((item, i) => {
      if (item[0] < 0 || item[0] > 9 || item[1] < 2 || item[1] > 9) {
        isValid = false
      }
    })

    return isValid
  },

  create: function(req, res) {
    var positions = req.body.positions
    
    // Fill in body to initialize the game and return a response that indicates success.

    // Access state via Environment Variable
    let state = JSON.parse(process.env['STATE'])

    // Grab coordinates from POST request
    let coords = req.body.positions

    // Validate the Coordinates
    if (!this.validateCoords(coords)) {
      res.json({ message: 'Invalid coordinates' })
      return false
    }
    
    res.json({ message: 'OK' })
  },

  update: function(req, res) {
    x = req.body.x
    y = req.body.y

    // Fill in body to take x and y coordinates and return result as "miss", "hit" or "sunk"
    var result = null

    res.json({ message: result })
  }
}
