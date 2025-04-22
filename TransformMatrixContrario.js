function transformMatrix(matrix) {
    let rows = matrix.length;
    let cols = rows > 0 ? matrix[0].length : 0;
    let result = [];


    // TODO: Modify the loop to transpose the matrix in reverse order
    for (let i = 0; i < cols; i++) {
        result[i] = []
        for (let j = 0; j < rows; j++) {
            result[i][j] = matrix[j][cols- 1 - i]
        }
    }

    return result;
}

let matrix = [
    [101, 102, 103, 104],
    [201, 202, 203, 204],
    [301, 302, 303, 304]
];

// TODO: Store the result of transformMatrix in transposedMatrix and print it
let transposedMatrix = transformMatrix(matrix)
for (let rows of transposedMatrix) {
    console.log(rows)
}