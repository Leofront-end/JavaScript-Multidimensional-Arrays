function transformMatrix(matrix) {
    let rows = matrix.length;
    let cols = rows > 0 ? matrix[0].length : 0;
    let transposed = []

    // TODO: Complete the transposition process by filling in the transposed matrix
    for (let i = 0; i < cols; i++) {
        transposed[i] = []
        for (let j = 0; j < rows; j++) {
            transposed[i][j] = matrix[j][i]
        }
    }

    return transposed;
}

let originalMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// TODO: Call transformMatrix with originalMatrix and store the result in a variable
let result = transformMatrix(originalMatrix)
// TODO: Print out the transposed matrix
for (let rows of result) {
    console.log(rows)
}