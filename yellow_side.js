import * as cont from   './controller.js'
import {cube} from "./controller.js";
import {uploadMoveSet} from "./cube_animator.js";
import {createCubeFromInput} from "./rubiks";

console.log("OH NO")
console.log(cont.cube)


//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   Y
function lookAtYellowCorners(val, val2){
    let whiteside = cube[4][2][2];
    let leftside = cube[0][0][2];
    let rightside = cube[1][0][0];

    if(whiteside === "Y" && leftside === val && rightside === val2){
        return "YYR"+val+"G"+val2;
    }else if(whiteside === "Y" && leftside === val2 && rightside === val) {
        return "YYR"+val2+"G"+val;
    }else if(whiteside === val && leftside === "Y" && rightside === val2) {
        return "Y"+val+"RYG"+val2;
    }else if(whiteside === val2 && leftside === "Y" && rightside === val) {
        return "Y"+val2+"RYG"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "Y") {
        return "Y"+val+"R"+val2+"GY";
    }else if(whiteside === val2 && leftside === val && rightside === "Y") {
        return "Y"+val2+"R"+val+"GY";
    }

    whiteside = cube[4][0][2];
    leftside = cube[1][0][2];
    rightside = cube[2][0][0];

    if(whiteside === "Y" && leftside === val && rightside === val2){
        return "YYG"+val+"O"+val2;
    }else if(whiteside === "Y" && leftside === val2 && rightside === val) {
        return "YYG"+val2+"O"+val;
    }else if(whiteside === val && leftside === "Y" && rightside === val2) {
        return "Y"+val+"GYO"+val2;
    }else if(whiteside === val2 && leftside === "Y" && rightside === val) {
        return "Y"+val2+"GYO"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "Y") {
        return "Y"+val+"G"+val2+"OY";
    }else if(whiteside === val2 && leftside === val && rightside === "Y") {
        return "Y"+val2+"G"+val+"OY";
    }

    whiteside = cube[4][0][0];
    leftside = cube[2][0][2];
    rightside = cube[3][0][0];

    if(whiteside === "Y" && leftside === val && rightside === val2){
        return "YYO"+val+"B"+val2;
    }else if(whiteside === "Y" && leftside === val2 && rightside === val) {
        return "YYO"+val2+"B"+val;
    }else if(whiteside === val && leftside === "Y" && rightside === val2) {
        return "Y"+val+"OYB"+val2;
    }else if(whiteside === val2 && leftside === "Y" && rightside === val) {
        return "Y"+val2+"OYB"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "Y") {
        return "Y"+val+"O"+val2+"BY";
    }else if(whiteside === val2 && leftside === val && rightside === "Y") {
        return "Y"+val2+"O"+val+"BY";
    }

    whiteside = cube[4][2][0];
    leftside = cube[3][0][2];
    rightside = cube[0][0][0];

    if(whiteside === "Y" && leftside === val && rightside === val2){
        return "YYB"+val+"R"+val2;
    }else if(whiteside === "Y" && leftside === val2 && rightside === val) {
        return "YYB"+val2+"R"+val;
    }else if(whiteside === val && leftside === "Y" && rightside === val2) {
        return "Y"+val+"BYR"+val2;
    }else if(whiteside === val2 && leftside === "Y" && rightside === val) {
        return "Y"+val2+"BYR"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "Y") {
        return "Y"+val+"B"+val2+"RY";
    }else if(whiteside === val2 && leftside === val && rightside === "Y") {
        return "Y"+val2+"B"+val+"RY";
    }

    return "X"
}

function yellowCornerRed(){
    let m = lookAtYellowCorners("R", "G")
    console.log(m)
    let moves = [];
    //U R U' L' U R' U' L
    if(m !== "X"){
        switch(m[2]){
            case "B":
                moves.push("FN")
                moves.push("TC")
                moves.push("BC")
                moves.push("TN")
                moves.push("FC")
                moves.push("TC")
                moves.push("BN")
                moves.push("TN")

                // moves.push("RN")
                // moves.push("TC")
                // moves.push("LC")
                // moves.push("TN")
                // moves.push("RC")
                // moves.push("TC")
                // moves.push("LN")
                // moves.push("TN")
                break;
            case "G":
                //U R U' L' U R' U' L
                moves.push("TN")
                moves.push("FN")
                moves.push("TC")
                moves.push("BC")
                moves.push("TN")
                moves.push("FC")
                moves.push("TC")
                moves.push("BN")
            case "O":
                moves.push("TN")
                moves.push("FN")
                moves.push("TC")
                moves.push("BC")
                moves.push("TN")
                moves.push("FC")
                moves.push("TC")
                moves.push("BN")
                break;
        }
    }

    console.log(moves)
    return moves;

}

function otherCorners(){
    let m = lookAtYellowCorners("G", "O");
    let moves = [];

    switch (m[2]){
        case "O":
            //U R U' L' U R' U' L
            moves.push("TN")
            moves.push("RN")
            moves.push("TC")
            moves.push("LC")
            moves.push("TN")
            moves.push("RC")
            moves.push("TC")
            moves.push("LN")
        case "B":
            moves.push("TN")
            moves.push("RN")
            moves.push("TC")
            moves.push("LC")
            moves.push("TN")
            moves.push("RC")
            moves.push("TC")
            moves.push("LN")
            break;
        case "G":
            break;
    }
    return moves;
}

function movesInterupter(movelist){
    movelist.forEach((element) => {
        switch (element[0]) {
            case "L":
                if(element[1] === "C")
                    cont.handleRotate("left", true);
                else
                    cont.handleRotate("left", false);
                break;
            case "R":
                if(element[1] === "C")
                    cont.handleRotate("right", true);
                else
                    cont.handleRotate("right", false);
                break;
            case "D":
                if(element[1] === "C")
                    cont.handleRotate("bottom", true);
                else
                    cont.handleRotate("bottom", false);
                break;
            case "T":
                if(element[1] === "C")
                    cont.handleRotate("top", true);
                else
                    cont.handleRotate("top", false);
                break;
            case "B":
                if(element[1] === "C")
                    cont.handleRotate("back", true);
                else
                    cont.handleRotate("back", false);
                break;
            case "F":
                if(element[1] === "C")
                    cont.handleRotate("front", true);
                else
                    cont.handleRotate("front", false);
                break;

        }
    });
}

function solveTop(){
    let m = lookAtYellowCorners("B", "R");
    let moves = []
    let tot = 0
    //R' D' R D
    if(m[1] !== "Y"){
        if(m[3] === "Y"){
            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")
        }else{
            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")
        }
    }

    m = lookAtYellowCorners("R", "G");

    //R' D' R D
    if(m[1] !== "Y"){
        moves.push("TN")
        tot += 1;
        if(m[3] === "Y"){
            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")
        }else{
            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")
        }
    }

    m = lookAtYellowCorners("G", "O");

    //R' D' R D
    if(m[1] !== "Y"){
        if(tot !== 1){
            moves.push("TN");
            tot += 1
        }
        moves.push("TN");
        tot += 1
        if(m[3] === "Y"){
            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")
        }else{
            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")
        }
    }

    m = lookAtYellowCorners("O", "B");

    //R' D' R D
    if(m[1] !== "Y"){
        if(tot === 1){
            moves.push("TN")
        } else if (tot === 0) {
            moves.push("TN")
            moves.push("TN")
        }
        moves.push("TN")
        if(m[3] === "Y"){
            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")
        }else{
            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")

            moves.push("FC")
            moves.push("DC")
            moves.push("FN")
            moves.push("DN")
        }
    }
    return moves
}

function cleanCube(){
    let m = lookAtYellowEdges("R")
    console.log(m)
    let moves = []
    switch (m[3]) {
        case "G":
            moves.push("TN")
            console.log("DONE")
            break
        case "B":
            moves.push("TC")
            console.log("DONE")
            break
        case "O":
            moves.push("TN");
            moves.push("TN");
            console.log("DONE");
            break;
        case "R":
            console.log("DONE");
            break;

    }
    return moves;
}

function lookAtYellowEdges(val){
    let oneside = cube[4][2][1];
    let oppside = cube[0][0][1];
    if(oneside === "Y" && oppside === val)
        return "YY"+val+"R";
    else if(oppside === "Y" && oneside === val)
        return "Y"+val+"YR";

    oneside = cube[4][1][2];
    oppside = cube[1][0][1];
    if(oneside === "Y" && oppside === val)
        return "YY"+val+"G";
    else if(oppside === "Y" && oneside === val)
        return "Y"+val+"YG";

    oneside = cube[4][0][1];
    oppside = cube[2][0][1];
    if(oneside === "Y" && oppside === val)
        return "YY"+val+"O";
    else if(oppside === "Y" && oneside === val)
        return "Y"+val+"YO";

    oneside = cube[4][1][0];
    oppside = cube[3][0][1];
    if(oneside === "Y" && oppside === val)
        return "YY"+val+"B";
    else if(oppside === "Y" && oneside === val)
        return "Y"+val+"YB";
    return "X";
}

function updateMovesList(movelist){
    let moves = [];
    movelist.forEach((element) => {
        switch (element[0]) {
            case "L":
                if(element[1] === "C")
                    moves.push("L'");
                else
                    moves.push("L");
                break;
            case "R":
                if(element[1] === "C")
                    moves.push("R'");
                else
                    moves.push("R");
                break;
            case "D":
                if(element[1] === "C")
                    moves.push("D'");
                else
                    moves.push("D");
                break;
            case "T":
                if(element[1] === "C")
                    moves.push("U'");
                else
                    moves.push("U");
                break;
            case "B":
                if(element[1] === "C")
                    moves.push("B'");
                else
                    moves.push("B");
                break;
            case "F":
                if(element[1] === "C")
                    moves.push("F'");
                else
                    moves.push("F");
                break;

        }
    });
    return moves
}
function displayMoves(n){
    let t =  updateMovesList(n);
    console.log(t)
    let output = ""
    t.forEach((element) =>{
        output += " " + element
    });

    const temp = document.getElementById('move-label');
    temp.textContent = output
}

const yellowSides = document.getElementById('solve-yellowcorner');
yellowSides.addEventListener('click', () => {
    createCubeFromInput(cube)
    console.log([...cont.cube])
    let m = yellowCornerRed();
    movesInterupter(m)
    let n = otherCorners();
    movesInterupter(n);

    let t = m.concat(n)
    uploadMoveSet(t)
    if(t.length === 0){
        const temp = document.getElementById('move-label');
        temp.textContent = "This step is already done!"
    }else{
        displayMoves(t)
    }
    const temp = document.getElementById('desc-label');
    temp.textContent = "This step places each corner in it's proper location but not necessarily face up"
});

const cubeFin = document.getElementById('solve-cube');
cubeFin.addEventListener('click', () => {
    createCubeFromInput(cube)
    console.log([...cont.cube])
    let m = solveTop();
    movesInterupter(m)
    let n = cleanCube();
    movesInterupter(n)

    let t = m.concat(n)
    uploadMoveSet(t)
    if(t.length === 0){
        const temp = document.getElementById('move-label');
        temp.textContent = "The cube is already solved!"
    }else{
        displayMoves(t)
    }
    const temp = document.getElementById('desc-label');
    temp.textContent = "Through repeating this pattern each corner is now face up and the cube is solved!"

});
