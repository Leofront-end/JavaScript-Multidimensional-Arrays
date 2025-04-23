function isEmptyNeighbor(board, x, y) {
    let rows = board.length;
    let cols = board[0].length;

    // Check that (x, y) is within board boundaries
    if (x >= 0 && x < rows && y >= 0 && y < cols) {
        return board[x][y] === 'E';
    }
    return false;
}

function findPositions(board) {
    let positions = [];
    let rows = board.length;
    let cols = board[0].length;

    // TODO: Modify the code to check for empty spot with an empty neighbor to the left and right only
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'E') {
                if (board[i][j] === 'E' && (isEmptyNeighbor(board, i, j - 1) || isEmptyNeighbor(board, i, j + 1))) {
                    positions.push([i, j]);
                }
            }
        }
    }
    return positions;
}

let board = [
    ['P', 'E', 'E', 'P'],
    ['E', 'P', 'E', 'P'],
    ['P', 'E', 'P', 'P'],
    ['P', 'E', 'P', 'E']
];

let positions = findPositions(board);

for (let i = 0; i < positions.length; i++) {
    console.log(`(${positions[i][0]}, ${positions[i][1]})`);
};