/*-------------------------------- Constants --------------------------------*/
const tiles = ['sun', 'jellyfish', 'mermaid', 'drink', 'palmtree', 'pineapple', 'turtle']


/*-------------------------------- Variables --------------------------------*/

let flippedTile, lockBoard, firstTile, secondTile, matchedPair


/*------------------------ Cached Element References ------------------------*/

const newGameBtn = document.querySelector("#button")
const tilesOnBoardEl = document.querySelectorAll("section > div")
const lightDarkBtn = document.querySelector("#light-dark-button")



/*----------------------------- Event Listeners -----------------------------*/

// newGameBtn.addEventListener("click", handleClick)
// lightDarkBtn.addEventListener("click", colorScheme.change)
tilesOnBoardEl.forEach((board) => {
    board.addEventListener("click", handleClick)
})

/*-------------------------------- Functions --------------------------------*/

//1) Load game board

// 1.2 => light/dark mode button function
    //Light/Dark mode => game resets every time light or dark mode is clicked

// 2) Player clicks first tile => stays open-faced
function flippedTile(evt){
    const player = evt.target.id === ""
}

// => if no second click, first tile flips back over
// => set timer function
    //board locks tiles to prevent more than 2 tiles from being open faced
// 2.1) Player clicks second tile
// => if no match, BOTH tiles flip over
// => if matchedPair, both tiles stay open faced

// winningGame
// all 12 tiles (6 pairs) must be matched to win game
// winning message appears "Congrats! You've matched all pairs!"

// render New Game function => reset game button function
