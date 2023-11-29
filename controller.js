import {rotateLayer} from './rubiks.js'
// import {func} from "three/addons/nodes/code/FunctionNode";

// Define a 3x3x3 matrix to represent the Rubik's Cube
export const cube = [
    // Define the six faces of the cube
//   4
// 3 0 1 2
//   5
    // 0 = RED
    // 1 = GREEN
    // 2 = ORANGE
    // 3 = BLUE
    // 4 = YELLOW
    // 5 = WHITE
    [
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
    ],
    [
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
    ],
    [
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],

    ],
    [
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
    ],
    [
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
    ],
    [
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
    ],
];
function rotateMatrixClockwise(matrix) {
    const n = matrix.length;

    // Check if the matrix is a valid 3x3 matrix
    if (n !== 3 || matrix.some(row => row.length !== 3)) {
        throw new Error('Invalid matrix size. Must be 3x3.');
    }

    // Create a new empty 3x3 matrix to store the rotated result
    const rotatedMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotatedMatrix[i][j] = matrix[n - 1 - j][i];
        }
    }

    return rotatedMatrix;
}

function rotateMatrixCounterclockwise(matrix) {
    const n = matrix.length;

    // Check if the matrix is a valid 3x3 matrix
    if (n !== 3 || matrix.some(row => row.length !== 3)) {
        throw new Error('Invalid matrix size. Must be 3x3.');
    }

    // Create a new 3x3 matrix to store the rotated result
    const rotatedMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    // for (let row = 0; row < n; row++) {
    //     for (let col = 0; col < n; col++) {
    //         // Rotate counterclockwise by swapping rows and inverting column indices
    //         rotatedMatrix[row][col] = matrix[col][n - 1 - row];
    //     }
    // }
    rotatedMatrix[0][0] = matrix[0][2]
    rotatedMatrix[0][1] = matrix[1][2]
    rotatedMatrix[0][2] = matrix[2][2]

    rotatedMatrix[1][0] = matrix[0][1]
    rotatedMatrix[1][1] = matrix[1][1]
    rotatedMatrix[1][2] = matrix[2][1]

    rotatedMatrix[2][0] = matrix[0][0]
    rotatedMatrix[2][1] = matrix[1][0]
    rotatedMatrix[2][2] = matrix[2][0]
    return rotatedMatrix;
}
function replaceColumn(matrixA, matrixB, columnToReplace, columnFromMatrixB, reverse) {
    if (
        matrixA.length !== 3 ||
        matrixB.length !== 3 ||
        matrixA[0].length !== 3 ||
        matrixB[0].length !== 3
    ) {
        throw new Error('Both matrices must be 3x3.');
    }

    // Create a new 3x3 matrix to store the result
    const resultMatrix = new Array(3).fill(0).map(() => new Array(3).fill(0));

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (col === columnToReplace) {
                // Replace the specified column with the corresponding column from matrixB
                if(!reverse){
                    resultMatrix[row][col] = matrixB[row][columnFromMatrixB];
                }else {
                    resultMatrix[row][col] = matrixB[2-row][columnFromMatrixB];
                }
            } else {
                // Copy the rest of the elements from matrixA
                resultMatrix[row][col] = matrixA[row][col];
            }
        }
    }

    return resultMatrix;
}


function replaceColumnWithRow(matrixA, matrixB, columnToReplace, rowFromMatrixB, reverse) {
    if(
        matrixA.length !== 3 ||
        matrixB.length !== 3 ||
        matrixA[0].length !== 3 ||
        matrixB[0].length !== 3
    ) {
        throw new Error('Both matrices must be 3x3.');
    }

    // Create a new 3x3 matrix to store the result
    const resultMatrix = new Array(3).fill(0).map(() => new Array(3).fill(0));

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (col === columnToReplace) {
                // Replace the specified column with the corresponding row from matrixB
                if(!reverse){
                    resultMatrix[row][col] = matrixB[rowFromMatrixB][row];
                }else {
                    resultMatrix[row][col] = matrixB[rowFromMatrixB][2-row];
                }

            } else {
                // Copy the rest of the elements from matrixA
                resultMatrix[row][col] = matrixA[row][col];
            }
        }
    }

    return resultMatrix;
}

function replaceRowWithColumn(matrixA, matrixB, rowToReplace, columnFromMatrixB, reverse) {
    if (
        matrixA.length !== 3 ||
        matrixB.length !== 3 ||
        matrixA[0].length !== 3 ||
        matrixB[0].length !== 3
    ) {
        throw new Error('Both matrices must be 3x3.');
    }

    // Create a new 3x3 matrix to store the result
    const resultMatrix = new Array(3).fill(0).map(() => new Array(3).fill(0));

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (row === rowToReplace) {
                // Replace the specified row with the corresponding column from matrixB
                if(!reverse){
                    resultMatrix[row][col] = matrixB[col][columnFromMatrixB];
                }else {
                    resultMatrix[row][col] = matrixB[2-col][columnFromMatrixB];
                }

            } else {
                // Copy the rest of the elements from matrixA
                resultMatrix[row][col] = matrixA[row][col];
            }
        }
    }

    return resultMatrix;
}

//   4
// 3 0 1 2
//   5
//Centers on 1 //Moves 2L 4R 5B 6T
function rotateFrontCounterClockwise() {

    cube[0] = rotateMatrixCounterclockwise(cube[0])
    const temp1 = [...cube[1]];
    const temp3 = [...cube[3]];
    const temp4 = [...cube[4]];
    const temp5 = [...cube[5]];
    cube[3] = replaceColumnWithRow(cube[3], temp4, 2, 2, true);
    cube[5] = replaceRowWithColumn(cube[5], temp3,  0, 2, false);
    cube[1] = replaceColumnWithRow(cube[1], temp5, 0, 0, true);
    cube[4] = replaceRowWithColumn(cube[4], temp1, 2, 0, false);

}

//   4
// 3 0 1 2
//   5
function rotateRightCounterClockwise() {

    cube[1] = rotateMatrixCounterclockwise(cube[1])
    const temp0 = [...cube[0]];
    const temp2 = [...cube[2]];
    const temp4 = [...cube[4]];
    const temp5 = [...cube[5]];
    cube[0] = replaceColumn(temp0, temp4, 2, 2, false);
    cube[5] = replaceColumn(temp5, temp0, 2, 2, false);
    cube[2] = replaceColumn(temp2, temp5, 0, 2, true);
    cube[4] = replaceColumn(temp4, temp2, 2, 0, true);

}

//   4
// 3 0 1 2
//   5
function rotateBackCounterClockwise(){
    cube[2] = rotateMatrixCounterclockwise(cube[2])
    const temp1 = [...cube[1]];
    const temp3 = [...cube[3]];
    const temp4 = [...cube[4]];
    const temp5 = [...cube[5]];
    cube[1] = replaceColumnWithRow(cube[1], cube[4], 2, 0, false);
    cube[5] = replaceRowWithColumn(temp5, temp1,  2, 2, true);
    cube[3] = replaceColumnWithRow(temp3, temp5, 0, 2, false);
    cube[4] = replaceRowWithColumn(temp4, temp3, 0, 0, true);
}

//   4
// 3 0 1 2
//   5
function rotateLeftCounterClockwise() {

    cube[3] = rotateMatrixCounterclockwise(cube[3])
    const temp0 = [...cube[0]];
    const temp2 = [...cube[2]];
    const temp4 = [...cube[4]];
    const temp5 = [...cube[5]];
    cube[2] = replaceColumn(temp2, temp4, 2, 0, true);
    cube[5] = replaceColumn(temp5, temp2, 0, 2, true);
    cube[0] = replaceColumn(temp0, temp5, 0, 0, false);
    cube[4] = replaceColumn(temp4, temp0, 0, 0, false);

}

//   4
// 3 0 1 2
//   5
function rotateTopCounterClockwise() {

    cube[4] = rotateMatrixCounterclockwise(cube[4])
    const temp0 = [...cube[0]];
    const temp1 = [...cube[1]];
    const temp2 = [...cube[2]];
    const temp3 = [...cube[3]];
    cube[0][0] = temp3[0]
    cube[1][0] = temp0[0]
    cube[2][0] = temp1[0]
    cube[3][0] = temp2[0]
}

//   4
// 3 0 1 2
//   5
function rotateBottomCounterClockwise() {
    cube[5] = rotateMatrixCounterclockwise(cube[5])
    const temp0 = [...cube[0]];
    const temp1 = [...cube[1]];
    const temp2 = [...cube[2]];
    const temp3 = [...cube[3]];
    cube[3][2] = temp0[2]
    cube[2][2] = temp3[2]
    cube[1][2] = temp2[2]
    cube[0][2] = temp1[2]
}

function rotateBottomClockwise(){
    rotateBottomCounterClockwise()
    rotateBottomCounterClockwise()
    rotateBottomCounterClockwise()
}

function rotateFrontClockwise(){
    rotateFrontCounterClockwise()
    rotateFrontCounterClockwise()
    rotateFrontCounterClockwise()

}

function rotateRightClockwise(){
    rotateRightCounterClockwise()
    rotateRightCounterClockwise()
    rotateRightCounterClockwise()
}

function rotateLeftClockwise(){
    rotateLeftCounterClockwise()
    rotateLeftCounterClockwise()
    rotateLeftCounterClockwise()
}

function rotateTopClockwise(){
    rotateTopCounterClockwise()
    rotateTopCounterClockwise()
    rotateTopCounterClockwise()
}

function rotateBackClockwise(){
    rotateBackCounterClockwise()
    rotateBackCounterClockwise()
    rotateBackCounterClockwise()
}

export function handleRotate(layer, count){
    rotateLayer(layer, count)
    // console.log(count)

    switch (layer) {
        case 'front':
            if(count){
                rotateFrontCounterClockwise()
            } else {
                rotateFrontClockwise()
            }
            break;
        case "back":
            if(count){
                rotateBackCounterClockwise()
            } else {
                rotateBackClockwise()
            }
            break;
        case "right":
            if(count){
                rotateRightCounterClockwise()
            } else {
                rotateRightClockwise()
            }
            break;
        case "left":
            if(count){
                rotateLeftCounterClockwise()
            } else {
                rotateLeftClockwise()
            }
            break;
        case "top":
            if(count){
                rotateTopCounterClockwise()
            } else {
                rotateTopClockwise()
            }
            break;
        case "bottom":
            if(count){
                rotateBottomCounterClockwise()
            } else {
                rotateBottomClockwise()
            }
            break;
    }


}

function randomScramble(){
    const myArray = ["front", "back", "top", "bottom", "left", "right"];
    for (let i = 0; i < 40; i++) {
        const randomIndex = Math.floor(Math.random() * myArray.length);
        const conter = Math.floor(Math.random() * 2);
        console.log(myArray[randomIndex], conter)
        if(conter === 1){
            handleRotate(myArray[randomIndex], true)
        } else  {
            handleRotate(myArray[randomIndex], false)
        }

    }
    console.log(cube)

}

function getScrambleInput() {
    let modal = document.getElementById("input-modal");
    let modal_content = document.getElementsByClassName("modal-content")[0];
    let close = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    close.onclick = () => { 
        modal.style.display = "none";
    }
}













const scramble = document.getElementById('scramble');
scramble.addEventListener('click', () => {
    randomScramble();
});

const input_scramble = document.getElementById('input-scramble');
input_scramble.addEventListener('click', () => {
    getScrambleInput();
});


const rotateFrontButton = document.getElementById('rotate-front-button');
rotateFrontButton.addEventListener('click', () => {
    handleRotate('front', true);
});

const rotateRightButton = document.getElementById('rotate-right-button');
rotateRightButton.addEventListener('click', () => {
    handleRotate('right', true);
});

const rotateLeftButton = document.getElementById('rotate-left-button');
rotateLeftButton.addEventListener('click', () => {
    handleRotate('left', true);
});

const rotateTopButton = document.getElementById('rotate-top-button');
rotateTopButton.addEventListener('click', () => {
    handleRotate('top', true);
});

const rotateBottomButton = document.getElementById('rotate-bottom-button');
rotateBottomButton.addEventListener('click', () => {
    handleRotate('bottom', true);
});

const rotateBackButton = document.getElementById('rotate-back-button');
rotateBackButton.addEventListener('click', () => {
    handleRotate('back', true);
});



const rotateFrontCButton = document.getElementById('rotate-front-button-c');
rotateFrontCButton.addEventListener('click', () => {
    handleRotate('front', false);
});

const rotateRightCButton = document.getElementById('rotate-right-button-c');
rotateRightCButton.addEventListener('click', () => {
    handleRotate('right', false);
});

const rotateLeftCButton = document.getElementById('rotate-left-button-c');
rotateLeftCButton.addEventListener('click', () => {
    handleRotate('left', false);
});

const rotateTopCButton = document.getElementById('rotate-top-button-c');
rotateTopCButton.addEventListener('click', () => {
    handleRotate('top', false);
});

const rotateBottomCButton = document.getElementById('rotate-bottom-button-c');
rotateBottomCButton.addEventListener('click', () => {
    handleRotate('bottom', false);
});

const rotateBackCButton = document.getElementById('rotate-back-button-c');
rotateBackCButton.addEventListener('click', () => {
    handleRotate('back', false);
});
//   4
// 3 0 1 2
//   5
// function getEdges(){
//     var rightEdges = [[cube[0][1][2], cube[1][1][0]],
//         [cube[1][1][2], cube[2][1][0]],
//         [cube[0][1][2], cube[1][1][0]],
//         [cube[0][1][2], cube[1][1][0]]]
//     var myArray = [];
//     for (var i = 0; i < 6; i++) {
//         for (var j = 0; j < 6; j++) {
//             myArray.push(((i,j), (cube[i])))
//         }
//     }
// }


