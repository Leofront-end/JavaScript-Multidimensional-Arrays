function verticalTraverse(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = rows - 1
    let col = cols - 1
    const result = [];
    // TODO: Append each element's value to the result array by following the vertical pattern.
    for (let index = 0; index < rows * cols; index++) {
        result[index] = matrix[row][col];
        if (row - 1 < 0) {
            row = rows - 1
            col -= 1;
        } else {
            row -= 1;
        }

    }
    return result;
}

const data = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const traversal = verticalTraverse(data);
console.log(traversal.join(" "));