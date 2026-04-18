// game object

// gameboard object
  // gameboard array with 9 boxes
const gameboard = (function() {
  let currentBoard = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => currentBoard;
  
  const markBoard = (index, mark) => {
    if (currentBoard[index] === "") {
      currentBoard[index] = mark;
    }
  }

  const resetBoard = () => {
    currentBoard = ["", "", "", "", "", "", "", "", ""];
  }

  return {getBoard, markBoard, resetBoard};
})();


// player objects




const winning_combinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];