function zigzagTraverse(grid) {
    // TODO: Determine the number of rows and columns in 'grid'
    const rows = grid.length
    const cols = grid[0].length
    let row = rows - 1
    let col = cols - 1
    let direction = "up"
    const traversalPath = [];
    
    // TODO: Traverse 'grid' in a zigzag pattern starting from the bottom right
    for (let index = 0; index < rows * cols; index++) {
        traversalPath[index] = grid[row][col];

        if (direction === "up") {
            if (row - 1 < 0) {
                direction = "down";
                col -= 1;
            } else {
                row -= 1;
            }
        } else {
            if (row + 1 === rows) {
                direction = "up";
                col -= 1;
            } else {
                row += 1;
            }
        }
    }

    
    return traversalPath;
}

const grid = [
    [101, 102, 103, 104],
    [201, 202, 203, 204]
];

// TODO: Print the zigzag traversal path of items in 'grid'
const result = zigzagTraverse(grid)
console.log(result.join(" "))