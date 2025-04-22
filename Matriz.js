function reflectOverSecondaryDiagonal(matrix) {
    let size = matrix.length;
    let newMatrix = [];

    for (let i = 0; i < size; ++i) {
        newMatrix[i] = [];
        for (let j = 0; j < size; ++j) {
            newMatrix[i][j] = matrix[size - 1 - j][size - 1 - i ]
            // TODO: Complete the code to obtain the reflected square matrix in newMatrix.
        }
    }
    return newMatrix;
}

// Example square matrix to reflect over the secondary diagonal
let squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// TODO: Call the function on squareMatrix and store the result in transformedMatrix.
let resultado = reflectOverSecondaryDiagonal(squareMatrix)
// Print the transformed matrix.
for (let row of resultado) {
    console.log(row)
}
