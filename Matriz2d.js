// TODO: Define a function 'transposeSeating' that takes a 2D array 'arrangement' as its parameter.
function transposeSeating (matrix) {
    let rows = matrix.length
    let cols = rows > 0 ? matrix[0].length : 0
    let ConverterMatriz = []

    for ( let i = 0; i < cols;i++) {
        ConverterMatriz[i] = []
        for (let j = 0; j < rows; j++) {
            ConverterMatriz[i][j] = matrix[j][i]
        }
    }
    return ConverterMatriz
}

// Restaurant seating before transposition (rows)
let seatingBefore = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// TODO: Call the 'transposeSeating' function with 'seatingBefore' and print the result to see the new seating arrangement.
let resultado = transposeSeating(seatingBefore)
for (let row of resultado) {
    console.log(row)
}