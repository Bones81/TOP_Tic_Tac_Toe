// gameboard object
  // gameboard array with 9 boxes
const gameboard = (function() {
  let currentBoard = ["", "", "", "", "", "", "", "", ""];
  
  const getBoard = () => currentBoard;
  
  const markBoard = (index, playerMark) => {
    if (currentBoard[index] === "") {
      currentBoard[index] = playerMark;
    } else if (currentBoard[index] !== "") {
      console.log("This box is already marked. Please choose another one.");
    }
  }

  const resetBoard = () => {
    currentBoard = ["", "", "", "", "", "", "", "", ""];
  }

  const checkBoard = () => {
    // Implementation for checking win conditions
    const checkTie = () => {
      if (!currentBoard.includes("")) {
        console.log("It's a draw!");
        resetBoard;
      }
    }
    const checkWin = () => {
      const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];

      for (let condition of winConditions) {
        if (currentBoard[condition[0]] && currentBoard[condition[0]] === currentBoard[condition[1]] && currentBoard[condition[0]] === currentBoard[condition[2]]) {
          const winningPlayer = () => {
            if (currentBoard[condition[0]] === "X") {
              return players()[0].name;
            } else {
              return players()[1].name;
            }
          }
          console.log(`${winningPlayer()} wins!`);
          resetBoard();
          return;
        }
      }

      checkTie();
    }
    checkWin();
  }

  return {getBoard, markBoard, checkBoard, resetBoard};
})();


// player objects
const players = (playerOneName = "Player 1", playerTwoName = "Player 2") => [
  { name: playerOneName, mark: "X" },
  { name: playerTwoName, mark: "O" }
];

const gameController = function() {

  const playTurn = (index) => {
    const currentPlayer = players()[currentPlayerIndex];
    gameboard.markBoard(index, currentPlayer.mark);
    currentPlayerIndex === 0 ? currentPlayerIndex = 1 : currentPlayerIndex = 0;
    console.log(`${currentPlayer.name} played at index ${index + 1}`);
    logBoard();
    gameboard.checkBoard();
  }

  const resetGame = () => {
    gameboard.resetBoard();
    currentPlayerIndex = 0;
    console.log("Game reset!");
    logBoard();
  }

  const logBoard = () => {
    const row1 = `${gameboard.getBoard()[0]} | ${gameboard.getBoard()[1]} | ${gameboard.getBoard()[2]}`;
    const row2 = `${gameboard.getBoard()[3]} | ${gameboard.getBoard()[4]} | ${gameboard.getBoard()[5]}`;
    const row3 = `${gameboard.getBoard()[6]} | ${gameboard.getBoard()[7]} | ${gameboard.getBoard()[8]}`;
    console.log(row1);
    console.log(row2);
    console.log(row3);
  }

  resetGame();
  logBoard();
  playTurn(0);
  playTurn(4);
  playTurn(1);
  playTurn(3);
  playTurn(2);

  return {resetGame, playTurn}
}

const game = gameController();
