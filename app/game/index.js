module.exports = {
  validateCoords: function(coords) {
    let isValid = true 

    // Check that coordinates are valid (>2 && <9)
    coords.forEach((item, i) => {
      if (item[0] < 0 || item[0] > 9 || item[1] < 2 || item[1] > 9) {
        isValid = false
      }
    })

    return isValid
  },

  detectOverlap: function(coords) {
    // Detect if ships overlap
    let overlap = false
    let sameX = []

    // Check if coords have same X Axis
    if (coords[0][0] === (coords[1][0])) {
      sameX.push([0,1])
    }

    if (coords[0][0] === (coords[2][0])) {
      sameX.push([0,2])
    }

    if (coords[1][0] === (coords[2][0])) {
      sameX.push([1,2])
    }

    // Go through the array of coords with same X Coord
    // And check for overlapping Y Coords
    sameX.forEach((item, i, arr) => {
      firstX = item[0]
      secondX = item[1]

      if (coords[firstX] <= coords[secondX]) {
        if (coords[firstX][1] > (coords[secondX][1] - 3)) {
          overlap = true
        }
      }

      if (coords[firstX] >= coords[secondX]) {
        if (coords[firstX][1] < (coords[secondX][1] + 3)) {
          overlap = true
        }
      }
    })

    return overlap
  },

  placeShipsOnBoard: function(coords) {
    let gameBoard = JSON.parse(process.env['STATE'])

    coords.forEach((item, i, arr) => {
      gameBoard[9 - item[1]][item[0]] = i + 1
      gameBoard[9 - item[1] + 1][item[0]] = i + 1
      gameBoard[9 - item[1] + 2][item[0]] = i + 1
    })

    process.env['STATE'] = JSON.stringify(gameBoard)
  },

  detectHit: function(x, y) {
    // If the attack hits a ship, return the ship number and successful hit
    let gameBoard = JSON.parse(process.env['STATE'])
    let result = {success: false, ship: null}
    let cellContents = gameBoard[9 - y][x]

    if (cellContents !== 0) {
      result = {success: true, ship: cellContents}
    }

    return result
  },

  updateShipStatus: function(ship) {
    // Update the number of hits a ship has taken
    
    if(typeof(process.env['SHIP' + ship]) === 'undefined') {
      // This is the ships first hit
      process.env['SHIP' + ship] = '1'
      return 'hit'
    } 
    
    if (parseInt(process.env['SHIP' + ship], 10) < 3) {
      // The ship has been hit, but has not been sunk yet.
      process.env['SHIP' + ship] = JSON.stringify(parseInt(process.env['SHIP' + ship], 10) + 1)
      return 'hit'
    } else {
      // Ship has already been sunk
      return 'sunk'
    }

  },

  create: function(req, res) {
    var positions = req.body.positions
    
    // Fill in body to initialize the game and return a response that indicates success.

    // Grab coordinates from POST request
    let coords = req.body.positions

    // Validate the Coordinates
    if (!this.validateCoords(coords)) {
      res.json({ message: 'Invalid coordinates' })
      return false
    }

    // Check for overlapping ships
    if (this.detectOverlap(coords)) {
      res.json({ message: 'Ships overlap' })
      return false
    }

    // Place the ships on the Game Board
    this.placeShipsOnBoard(coords)
    
    res.json({ message: 'OK' })
  },

  update: function(req, res) {
    x = req.body.x
    y = req.body.y

    // Fill in body to take x and y coordinates and return result as "miss", "hit" or "sunk"
    var result = 'miss'

    // Test the attack
    let wasHit = this.detectHit(x, y)

    if (wasHit.success) {
      result = this.updateShipStatus(wasHit.ship)
    }

    res.json({ message: result })
  }
}
