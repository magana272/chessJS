const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
class gameBoard{
  constructor(rows, cols){
      this.rows = rows;
      this.cols = cols;
      this.gameBoard = [];
      this.currentMove = [];
      this.gameBoard = this.createBoard();
      this.currentPlayer = "white";
    
  }
    createBoard () {
      this.gameBoard = new Array(["r", "k", "b", "q", "k", "b", "k", "r"],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      ["r", "k", "b", "q", "k", "b", "k", "r"]);
  }
  checkMove(){
    if((this.currentMove[0].textContent == this.currentMove[0].textContent.toUpperCase()) && this.currentPlayer == "white"){
      let pi = this.gameBoard[this.currentMove[0].id[0]][this.currentMove[0].id[1]];
      console.log(pi);
      return pi.checkMove(this.currentMove[0].id[0],this.currentMove[0].id[1],this.currentMove[1].id[0],myGame.currentMove[1].id[1]);
    }
  }
}
function PieceFactory(row,col, Color,vari){
    switch (vari) {
      case "ki":
       return new King(row,col, Color);
      case "p":
       return new Pawn(row,col, Color);
      case "q":
        return new Queen(row,col, Color);
      case "b":
        return new Bishop(row,col, Color);
      case "k":
        return new Knight(row,col, Color);
      case "r":
        return new Rook(row,col, Color);
      default:
        return new ChessPiece(row,col, Color,);
    }
}
class Game{
  constructor(gameBoard, currentPlayer)
  {
    this.currentPlayer = "white";
    this.gameBoard = gameBoard;
  }
}
class ChessPiece{
  constructor(Color,row, col){
    this.row = row;
    this.col = col;
    this.char = ""; 
  }
}
class Pawn extends ChessPiece{
  constructor(row, col, Color){
    super(row, col,Color);
    this.movedInitial = false;
    this.char = "p";
    this.Color = Color;
    if(Color === "white"){
      this.char = this.char.toUpperCase();
    }
  }
  checkMove(startRow, startCol, endRow, endCol){
    if(this.Color === "white"){
      // White pawn Moves up one square
      if(startCol == endCol && endRow == startRow-1){
        console.log("one");
        return true;
      }
      // White pawn moves up two squares
      else if(startCol == endCol && endRow == startRow-2){
        if (myGame.gameBoard[endCol-2][endRow].char == "")
        {
          console.log("two");
          return true;
        }
      }
      // White pawn Captures Left 
      else if(startCol == endCol+1 && endRow == startRow-1){
        if (myGame.gameBoard[endCol][endRow].char != "")
        {
          console.log("capturelefts");
          return true;
        }
      }
      // White pawn Captures Right
      else if(startCol == endCol+1 && endRow == startRow+1){
        if (myGame.gameBoard[endCol][endRow].char != "")
        {
          console.log("captureRight");
          return true;
        }
      }
    }else{
    // Black pawn Moves down one square
    if(startCol == endCol && endRow == startRow+1){
      if (myGame.gameBoard[startRow+1][startCol].char == "")
      {
        console.log("one");
        return true;
      }
    }
    // Black pawn moves down two squares
    else if(startCol == endCol && endRow == startRow+2){
      if (myGame.gameBoard[startRow+1][startCol] == "")
      {
        return true;
      }
  
    }
  // Black pawn Captures Left
    else if(startCol == endCol+1 && endRow == startRow+1){
      if (myGame.gameBoard[startRow+1][startCol+1] != "")
      {
        return true;
      }
    }
    // Black pawn Captures Right
    else if(startCol == endCol-1 && endRow == startRow+1){
      if(myGame.gameBoard[startRow+1][startCol-1] != "")
      {
        return true;
      }
    }
  }
}
}
 

class King extends ChessPiece{
  constructor(row, col,Color){
    super(row, col,Color);
    this.char = "ki";
    if(Color === "white"){
      this.char = this.char.toUpperCase();
    }
  }; 
  checkMove(startRow, startCol, endRow, endCol){
    return true;
  }

}

class Queen extends ChessPiece{
  constructor(row, col,Color){
    super(row, col,Color);
    this.char = "q";
    if(Color === "white"){
      this.char = this.char.toUpperCase();
    }
  }; 
  checkMove(startRow, startCol, endRow, endCol){
    return true;
  }
}
class Bishop extends ChessPiece{
  constructor(row, col,Color){
    super(row, col,Color);
    this.char = "b";
    if(Color === "white"){
      this.char = this.char.toUpperCase();
    }
  }; 
  checkMove(startRow, startCol, endRow, endCol){
    return true;
  }
}
class Knight extends ChessPiece{
  constructor(row, col,Color){
    super(row, col,Color);
    this.char = "k";
    if(Color === "white"){
      this.char = this.char.toUpperCase();
    }
  }; 
  checkMove(startRow, startCol, endRow, endCol){
    return true;
  }
}
class Rook extends ChessPiece{
  constructor(row, col,Color){
    super(row, col,Color);
    this.char = "r";
    if(Color === "white"){
      this.char = this.char.toUpperCase();
    }
  }; 
  checkMove(startRow, startCol, endRow, endCol){
    return true;
  }
}




function makeGrid(myGame,rows, cols) {
    // Create chess board
    // 1. Create a container  
    // 2. Create 64 divs
    // 3. Add class to each div
    // 4. Add event listener to each div
    // 5. Append each div to the container
    for (let i = 0; i < (rows); i++) {
      for (let j = 0; j < (cols); j++) {
        const gridItem = document.createElement("div");
        pi = document.createElement("p");
        pi.classList.add("piece");
        gridItem.contains = pi;
        if((i+j) % 2 === 0) {
          gridItem.classList.add("boxW");
          gridItem.classList.toggle("White");
    
        } else {
          gridItem.classList.add("boxB");
        }
        gridItem.addEventListener("click", getChessPiece);
        let char = myGame.gameBoard[i][j];
        let piceObject;
        if(i>=4){
          piceObject = PieceFactory(i,j, "white",char);
        }
        else{
          piceObject = PieceFactory(i,j, "black",char);
        }
        myGame.gameBoard[i][j] = piceObject;
        gridItem.textContent = piceObject.char;
        gridItem.id = String(i)+String(j);
        container.appendChild(gridItem);
    }
  }
}
function updateGameBoard(myGame,rows, cols) {
  for (let i = 0; i < (rows); i++) {
    for (let j = 0; j < (cols); j++) {
      document.getElementById(String(i)+String(j)).textContent = myGame.gameBoard[i][j].char;
    }
}
}
function getChessPiece(){
  // this.style.backgroundColor = "green";
  this.classList.toggle("green");
  myGame.currentMove  = myGame.currentMove.concat(this);
  if(myGame.currentMove.length >=2){
    myGame.currentMove.forEach(element =>
       {element.classList.toggle("green")})
    updateGame(myGame);
    myGame.currentMove = [];
  }
};

function updateGame(aGame){
  if(aGame.checkMove()){
    myGame.gameBoard[myGame.currentMove[1].id[0]][myGame.currentMove[1].id[1]] = myGame.gameBoard[myGame.currentMove[0].id[0]][myGame.currentMove[0].id[1]];
    myGame.gameBoard[myGame.currentMove[0].id[0]][myGame.currentMove[0].id[1]] = new ChessPiece();
    updateGameBoard(myGame,8, 8);
  }
}
const myGame = new gameBoard(8, 8); 
myGame.createBoard(); 
makeGrid(myGame,8, 8); 