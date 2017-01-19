## Battleship Coding Challenge (Node)

Node version of the [Battleship interview exercise](github.com/github/battleship)

My hope is to stay fairly true to the Rails implementation, but while also being close enough to standard Node practices that a Node developer wouldn't be disgusted by this.

For this coding challenge you'll build a simplified version of [battleship](https://en.wikipedia.org/wiki/Battleship_(game)). You'll have 3 ships that will be placed on a 10 by 10 grid which is the battleground. Each cell in the battleground is identified by its space on an x,y axis with [0,0] being the cell in the bottom left corner. Each ship is 1 cell wide and 3 cells long. On initial placement, each ship is oriented vertically. To initialize the playing field you'll receive a 2 dimensional array where each element in the array contains the x,y coordinates of each ship's topmost cell. So for example, if you receive this array [[0,3],[4,8],[6,6]] then your initial playing board will have ships that occupy the following cells:

`[[0,3],[0,2],[0,1]]`, `[[4,8],[4,7],[4,6]]` and `[[6,6],[6,5],[6,4]]`

Your game interface will be a basic HTTP API. We want you to flesh out the provided `battleships` app so that the `create` handler accepts a 2-dimensional array that contains the topmost cell coordinates of ships to initialize the playing board. You'll then need to complete the `update` handler to take x and y parameters and return the string "hit" if the coordinate lands on a ship. The `update` handler should return the string "miss" if the coordinate does not land on a ship. If a ship has been hit on all 3 of its cells then the `update` handler should return "sunk".

### Getting Started

1. This problem was built and tested with Node version 6.3.1
2. You should have received an email with a repo url. Clone this repo
3. `cd` into your local directory copy
4. `npm install`
5. `npm test`

### Inputs

All inputs are given as strings

### Other Notes

To make things easier (and remove the need for persistent storage) feel free to use global variables or something else to maintain state between subsequent HTTP API calls. You can assume that only one agent is accessing the API.

Q. _Say what?! You're suggesting we could use a global variable in a node application. Isn't that frowned upon?_

A. We agree with you and in our production code we avoid maintaining state in a node application. However, if design decisions should be made in context, then we think it's ok to use a global variable for this exercise. We're more interested in other aspects of your solution. You don't have to use a global variable (some people do, and some people don't). We promise not to judge you for using a global variable if you don't judge us too harshly for having a problem that encourages it.


## What we're looking for

We want you to submit a solution you're proud of and we want you to be successful so here are some of the things we're looking for in a solution:

* A solution that is correct for various input values. We're big fans of writing tests to help us build quality software.
* A solution that shows good object oriented (or functional) programming principles but doesn't go overboard.
* A solution that shows familiarity with the language used.
