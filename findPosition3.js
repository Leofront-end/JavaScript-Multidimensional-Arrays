function isPositionStrategic(board, row, col) {
    return ((row > 0 && board[row - 1][col] === 'E') || (col > 0 && board[row][col - 1] === 'E') || (col > 0 && board[row][col+1] === 'E')
            // TODO: Complete the remaining conditions for down, left, and right
        );
}

// Board game configuration: 'E' for empty, 'P' for piece
const gameBoard = [
    ['E', 'P'],
    ['P', 'E']
];

// TODO: Check if position (0, 1) is strategic and print the result
let position = isPositionStrategic(gameBoard,0,1)
console.log(position);

