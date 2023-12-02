import * as cont from   './controller.js'
import {cube} from "./controller.js";

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
                moves.push("RN")
                moves.push("TC")
                moves.push("LC")
                moves.push("TN")
                moves.push("RC")
                moves.push("TC")
                moves.push("LN")
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

const yellowSides = document.getElementById('solve-yellowcorner');
yellowSides.addEventListener('click', () => {
    console.log([...cont.cube])
    let m = yellowCornerRed();
    movesInterupter(m)
    let n = otherCorners();
    movesInterupter(n);
});