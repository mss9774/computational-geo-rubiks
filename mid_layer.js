import * as cont from   './controller.js'
import {cube} from "./controller.js";


//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W

function lookAtYellowEdges(val, val2){
    let oneside = cube[4][2][1];
    let oppside = cube[0][0][1];
    if(oneside === val2 && oppside === val)
        return "Y"+val2+val+"R";
    else if(oppside === val2 && oneside === val)
        return "Y"+val+val2+"R";

    oneside = cube[4][1][2];
    oppside = cube[1][0][1];
    if(oneside === val2 && oppside === val)
        return "Y"+val2+val+"G";
    else if(oppside === val2 && oneside === val)
        return "Y"+val+val2+"G";

    oneside = cube[4][0][1];
    oppside = cube[2][0][1];
    if(oneside === val2 && oppside === val)
        return "Y"+val2+val+"O";
    else if(oppside === val2 && oneside === val)
        return "Y"+val+val2+"O";

    oneside = cube[4][1][0];
    oppside = cube[3][0][1];
    if(oneside === val2 && oppside === val)
        return "Y"+val2+val+"B";
    else if(oppside === val2 && oneside === val)
        return "Y"+val+val2+"B";
    return "X";
}

//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W
function lookAtMiddleEdges(val, val2){
    let oneside = cube[0][1][2];
    let oppside = cube[1][1][0];
    if(oneside === val2 && oppside === val)
        return "R"+val2 + val + "G";
    else if(oppside === val2 && oneside === val)
        return "R"+val+val2+"G";

    oneside = cube[1][1][2];
    oppside = cube[2][1][0];
    if(oneside === val2 && oppside === val)
        return "G"+val2 + val + "O";
    else if(oppside === val2 && oneside === val)
        return "G"+val+val2+"O";

    oneside = cube[2][1][2];
    oppside = cube[3][1][0];
    if(oneside === val2 && oppside === val)
        return "O"+val2 + val + "B";
    else if(oppside === val2 && oneside === val)
        return "O"+val+val2+"B";

    oneside = cube[3][1][2];
    oppside = cube[0][1][0];
    if(oneside === val2 && oppside === val)
        return "B"+val2 + val + "R";
    else if(oppside === val2 && oneside === val)
        return "B"+val+val2+"R";

    return "X";
}

//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W

function redGreenMid(){
    let m = lookAtMiddleEdges("R", "G")
    let moves = []
    if(m !== "X"){
        if(!(m[0] === "R" && m[1] === "R")){
            switch (m[0]){
                case "B":
                    moves.push("FN");
                    moves.push("TC");
                    moves.push("FC");
                    moves.push("TC");
                    moves.push("LC");
                    moves.push("TN");
                    moves.push("LN");
                    break;
                case "O":
                    moves.push("LN");
                    moves.push("TC");
                    moves.push("LC");
                    moves.push("TC");
                    moves.push("BC");
                    moves.push("TN");
                    moves.push("BN");
                    break;
                case "G":
                    moves.push("BN");
                    moves.push("TC");
                    moves.push("BC");
                    moves.push("TC");
                    moves.push("RC");
                    moves.push("TN");
                    moves.push("RN");
                    break;
                case "R":
                    moves.push("RN");
                    moves.push("TC");
                    moves.push("RC");
                    moves.push("TC");
                    moves.push("FC");
                    moves.push("TN");
                    moves.push("FN");
                    break;

            }
        }

    }
    m = lookAtYellowEdges("R", "G")
    if(m !== "X") {
        switch (m[2]){
            case "G":
                switch (m[3]) {
                    case "O":
                        moves.push("TN");
                        break;
                    case "B":
                        moves.push("TC");
                        moves.push("TC");
                        break;
                    case "R":
                        moves.push("TC");
                        break;
                    case "G":
                        break;
                }
                moves.push("TC")
                moves.push("FC");
                moves.push("TN");
                moves.push("FN");
                moves.push("TN");
                moves.push("RN");
                moves.push("TC");
                moves.push("RC");
                break;
            case "R":
                switch (m[3]) {
                    case "O":
                        moves.push("TC");
                        moves.push("TC");
                        break;
                    case "B":
                        moves.push("TC");
                        break;
                    case "R":
                        break;
                    case "G":
                        moves.push("TN");
                        break;
                }
                moves.push("TN");
                moves.push("RN");
                moves.push("TC");
                moves.push("RC");
                moves.push("TC");
                moves.push("FC");
                moves.push("TN");
                moves.push("FN");
                break;

        }
    }
    console.log(moves);
    return moves
}



//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W

function greenOrangeMid(){
    let m = lookAtMiddleEdges("G", "O")
    let moves = []
    if(m !== "X"){
        if(!(m[0] === "G" && m[1] === "G")){
            switch (m[0]){
                case "B":
                    moves.push("FN");
                    moves.push("TC");
                    moves.push("FC");
                    moves.push("TC");
                    moves.push("LC");
                    moves.push("TN");
                    moves.push("LN");
                    break;
                case "O":
                    moves.push("LN");
                    moves.push("TC");
                    moves.push("LC");
                    moves.push("TC");
                    moves.push("BC");
                    moves.push("TN");
                    moves.push("BN");
                    break;
                case "G":
                    moves.push("BN");
                    moves.push("TC");
                    moves.push("BC");
                    moves.push("TC");
                    moves.push("RC");
                    moves.push("TN");
                    moves.push("RN");
                    break;
                case "R":
                    moves.push("RN");
                    moves.push("TC");
                    moves.push("RC");
                    moves.push("TC");
                    moves.push("FC");
                    moves.push("TN");
                    moves.push("FN");
                    break;

            }
        }

    }
    m = lookAtYellowEdges("G", "O")
    if(m !== "X") {
        switch (m[2]){
            case "O":
                switch (m[3]) {
                    case "B":
                        moves.push("TN");
                        break;
                    case "R":
                        moves.push("TC");
                        moves.push("TC");
                        break;
                    case "G":
                        moves.push("TC");
                        break;
                    case "O":
                        break;
                }
                moves.push("TC")
                moves.push("RC");
                moves.push("TN");
                moves.push("RN");
                moves.push("TN");
                moves.push("BN");
                moves.push("TC");
                moves.push("BC");
                break;
            case "G":
                switch (m[3]) {
                    case "B":
                        moves.push("TC");
                        moves.push("TC");
                        break;
                    case "R":
                        moves.push("TC");
                        break;
                    case "G":
                        break;
                    case "O":
                        moves.push("TN");
                        break;
                }
                moves.push("TN");
                moves.push("BN");
                moves.push("TC");
                moves.push("BC");
                moves.push("TC");
                moves.push("RC");
                moves.push("TN");
                moves.push("RN");
                break;

        }
    }
    console.log(moves);
    return moves
}


function orangeBlueMid(){
    let m = lookAtMiddleEdges("O", "B")
    let moves = []
    if(m !== "X"){
        if(!(m[0] === "O" && m[1] === "O")){
            switch (m[0]){
                case "B":
                    moves.push("FN");
                    moves.push("TC");
                    moves.push("FC");
                    moves.push("TC");
                    moves.push("LC");
                    moves.push("TN");
                    moves.push("LN");
                    break;
                case "O":
                    moves.push("LN");
                    moves.push("TC");
                    moves.push("LC");
                    moves.push("TC");
                    moves.push("BC");
                    moves.push("TN");
                    moves.push("BN");
                    break;
                case "G":
                    moves.push("BN");
                    moves.push("TC");
                    moves.push("BC");
                    moves.push("TC");
                    moves.push("RC");
                    moves.push("TN");
                    moves.push("RN");
                    break;
                case "R":
                    moves.push("RN");
                    moves.push("TC");
                    moves.push("RC");
                    moves.push("TC");
                    moves.push("FC");
                    moves.push("TN");
                    moves.push("FN");
                    break;

            }
        }

    }
    m = lookAtYellowEdges("O", "B")
    if(m !== "X") {
        switch (m[2]){
            case "B":
                switch (m[3]) {
                    case "R":
                        moves.push("TN");
                        break;
                    case "G":
                        moves.push("TC");
                        moves.push("TC");
                        break;
                    case "O":
                        moves.push("TC");
                        break;
                    case "B":
                        break;
                }
                moves.push("TC")
                moves.push("BC");
                moves.push("TN");
                moves.push("BN");
                moves.push("TN");
                moves.push("LN");
                moves.push("TC");
                moves.push("LC");
                break;
            case "O":
                switch (m[3]) {
                    case "R":
                        moves.push("TC");
                        moves.push("TC");
                        break;
                    case "G":
                        moves.push("TC");
                        break;
                    case "O":
                        break;
                    case "B":
                        moves.push("TN");
                        break;
                }
                moves.push("TN");
                moves.push("LN");
                moves.push("TC");
                moves.push("LC");
                moves.push("TC");
                moves.push("BC");
                moves.push("TN");
                moves.push("BN");
                break;

        }
    }
    console.log(moves);
    return moves
}

function blueRedMid(){
    let m = lookAtMiddleEdges("B", "R")
    let moves = []
    if(m !== "X"){
        if(!(m[0] === "B" && m[1] === "B")){
            switch (m[0]){
                case "B":
                    moves.push("FN");
                    moves.push("TC");
                    moves.push("FC");
                    moves.push("TC");
                    moves.push("LC");
                    moves.push("TN");
                    moves.push("LN");
                    break;
                case "O":
                    moves.push("LN");
                    moves.push("TC");
                    moves.push("LC");
                    moves.push("TC");
                    moves.push("BC");
                    moves.push("TN");
                    moves.push("BN");
                    break;
                case "G":
                    moves.push("BN");
                    moves.push("TC");
                    moves.push("BC");
                    moves.push("TC");
                    moves.push("RC");
                    moves.push("TN");
                    moves.push("RN");
                    break;
                case "R":
                    moves.push("RN");
                    moves.push("TC");
                    moves.push("RC");
                    moves.push("TC");
                    moves.push("FC");
                    moves.push("TN");
                    moves.push("FN");
                    break;

            }
        }

    }
    m = lookAtYellowEdges("B", "R")
    if(m !== "X") {
        switch (m[2]){
            case "R":
                switch (m[3]) {
                    case "G":
                        moves.push("TN");
                        break;
                    case "O":
                        moves.push("TC");
                        moves.push("TC");
                        break;
                    case "B":
                        moves.push("TC");
                        break;
                    case "R":
                        break;
                }
                moves.push("TC")
                moves.push("LC");
                moves.push("TN");
                moves.push("LN");
                moves.push("TN");
                moves.push("FN");
                moves.push("TC");
                moves.push("FC");
                break;
            case "B":
                switch (m[3]) {
                    case "G":
                        moves.push("TC");
                        moves.push("TC");
                        break;
                    case "O":
                        moves.push("TC");
                        break;
                    case "B":
                        break;
                    case "R":
                        moves.push("TN");
                        break;
                }
                moves.push("TN");
                moves.push("FN");
                moves.push("TC");
                moves.push("FC");
                moves.push("TC");
                moves.push("LC");
                moves.push("TN");
                moves.push("LN");
                break;

        }
    }
    console.log(moves);
    return moves
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


const findRed = document.getElementById('find-mid-redgreen');
findRed.addEventListener('click', () => {
    let m = redGreenMid();
    movesInterupter(m)
    let n = redGreenMid();
    movesInterupter(n);
});

const findBlue = document.getElementById('find-mid-blueRed');
findBlue.addEventListener('click', () => {
    let m = blueRedMid();
    movesInterupter(m)
    let n = blueRedMid();
    movesInterupter(n);
});

const findOrange = document.getElementById('find-mid-orangeBlue');
findOrange.addEventListener('click', () => {
    let m = orangeBlueMid();
    movesInterupter(m)
    let n = orangeBlueMid();
    movesInterupter(n);
});

const findGreen = document.getElementById('find-mid-greenOrange');
findGreen.addEventListener('click', () => {
    let m = greenOrangeMid();
    movesInterupter(m)
    let n = greenOrangeMid();
    movesInterupter(n);
});

const findMid = document.getElementById('solve-midLayer');
findMid.addEventListener('click', () => {
    let m = redGreenMid();
    movesInterupter(m)
    let n = redGreenMid();
    movesInterupter(n);

    let o = blueRedMid();
    movesInterupter(o)
    let p = blueRedMid();
    movesInterupter(p);

    let q = orangeBlueMid();
    movesInterupter(q)
    let r = orangeBlueMid();
    movesInterupter(r);


    let s = greenOrangeMid();
    movesInterupter(s)
    let t = greenOrangeMid();
    movesInterupter(t);
});