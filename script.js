var currPiece;
var otherPiece;

var moves = 0;

window.onload = function() {
  let pieces = [];
  for (let i = 0; i < 25; i ++) {
    pieces.push(i);
  }

  //swapping pieces to randomize the order
  for (let i = 0; i < 25; i ++) {
    j = pieces[Math.floor(Math.random() * pieces.length)]
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  //adding all pieces to board
  for (let i = 0; i < 25; i ++) {
    let piece = document.createElement("img");
    piece.setAttribute("draggable", "true");
    piece.src = "./imageonline/" + pieces[i] + ".jpg";
    piece.addEventListener("dragstart", dragStart);
    piece.addEventListener("dragover", dragOver);
    piece.addEventListener("dragenter", dragEnter);
    piece.addEventListener("drop", drop);
    piece.addEventListener("dragEnd", dragEnd);
    document.getElementById("board").append(piece);
  }
}

function dragStart(e) {
  currPiece = this;
  console.log("drag start")
  console.log(currPiece.src)
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function drop(e) {
  otherPiece = e.target;
  console.log("dropped")
  console.log(otherPiece)
  let currImg = currPiece.src;
  let otherImg = otherPiece.src;
  currPiece.src = otherImg;
  otherPiece.src = currImg;
  moves += 1;
  document.getElementById("moves").innerText = moves;
}

function dragEnd() {
  
  consolelog("bruh")
}