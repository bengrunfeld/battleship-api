## Battleship Coding Challenge (Node)

For this coding challenge you'll build a simplified version of [battleship](https://en.wikipedia.org/wiki/Battleship_(game)). You'll have 3 ships that will be placed on a 10 by 10 grid which is the battleground. Each cell in the battleground is identified by its space on an x,y axis with [0,0] being the cell in the bottom left corner. Each ship is 1 cell wide and 3 cells long. On initial placement, each ship is oriented vertically. To initialize the playing field you'll receive a 2 dimensional array where each element in the array contains the x,y coordinates of each ship's topmost cell. So for example, if you receive this array [[0,3],[4,8],[6,6]] then your initial playing board will have ships that occupy the following cells:

`[[0,3],[0,2],[0,1]]`, `[[4,8],[4,7],[4,6]]` and `[[6,6],[6,5],[6,4]]`

Your game interface will be a basic HTTP API. You should assume that you are implementing a spec that has already been published to clients and they will use the spec to learn how to interact with the game. Each of the methods should return a JSON response with a single property named `message`. 

We want you to flesh out the provided battleship app so that the `create` function in `app/game/index.js` accepts a 2-dimensional array (represented as JSON) that contains the topmost cell coordinates of ships to initialize the playing board. 

### Acceptance Criteria

Once you implement the `create` function you'll then need to complete the `update` function to take x and y parameters and return the following JSON responses under the given conditions: 

| Response | Condition |
| --- | --- |
| `{"message":"miss"}` | When the coordinate does not land on a ship. |
| `{"message":"hit"}` | When the coordinate lands on a ship and the ship is not yet sunk. Multiple attacks on the same spot should return as hit unless the ship is already sunk. |
| `{"message":"sunk"}` | When the ship has been hit on all 3 of its cells. Subsequent attacks on a sunk ship should continue to return a sunk response. |

All responses should be lowercase letters only. We will evaluate your submission in two stages:

1. **Correctness** - When you submit your solution, we will run it through a suite of automated tests to verify the above acceptance criteria are satisfied. 
2. **Code quality** - If your solution satisfies the correctness check, then it will be evaluated by a pair of engineers for code quality. For more details see the [What we're looking for](#what-were-looking-for) section.

### Getting Started

1. This problem was built and tested with Node version 6.3.1
2. You should have received an email with a repo url. Clone this repo
3. `cd` into your local directory copy
4. `npm install`
5. `npm test`

### Inputs and Outputs

When running against a local server the following sequence of commands should result in the following:

| Command   | Response Body  |
|---|---|
| `curl -X POST -H 'Content-Type: application/json' --data '{"positions":[[0,3], [4,8], [6,6]]}' http://localhost:3000/battleship` | `{"message":"OK"}` |
| `curl -X PUT -H 'Content-Type: application/json' --data '{"x":0, "y":1}' http://localhost:3000/battleship` | `{"message":"hit"}` |

Note that on Windows, these commands have been tested in the CMD shell. They will not run as shown in PowerShell.

### Other Notes

To make things easier (and remove the need for persistent storage) feel free to use global variables or something else to maintain state between subsequent HTTP API calls. You can assume that only one agent is accessing the API.

Q. _Say what?! You're suggesting we could use a global variable in a node application. Isn't that frowned upon?_

A. We agree with you and in our production code we avoid maintaining state in a node application. However, if design decisions should be made in context, then we think it's ok to use a global variable for this exercise. We're more interested in other aspects of your solution. You don't have to use a global variable (some people do, and some people don't). We promise not to judge you for using a global variable if you don't judge us too harshly for having a problem that encourages it.


## What we're looking for

We want you to submit a solution you're proud of and we want you to be successful so here are some of the things we're looking for in a solution:

* A solution that is correct for various input values. We're big fans of writing tests to help us build quality software.
* A solution that shows good object oriented (or functional) programming principles but doesn't go overboard.
* A solution that shows familiarity with the language used.
