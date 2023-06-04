function generateChessboard() {
  let tbl = document.getElementById("tbl");
  let chessboard = '';

  for (let row = 0; row < 8; row++) {
    chessboard += '<tr>';

    for (let col = 0; col < 8; col++) {
      let cellColor = (row + col) % 2 == 0 ? 'white' : 'black';
      chessboard += `<td class="${cellColor}"></td>`;
    }

    chessboard += '</tr>';
  }

  tbl.innerHTML = chessboard;
}

generateChessboard();
