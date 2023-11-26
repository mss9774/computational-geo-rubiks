import * as cont from   './controller.js'
import {cube} from "./controller.js";

console.log("OH NO")
console.log(cont.cube)

//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W
function lookAtWhiteEdges(val){
    let oneside = cube[5][0][1];
    let oppside = cube[0][2][1];
    if(oneside === "W" && oppside === val)
        return "WW"+val+"R";
    else if(oppside === "W" && oneside === val)
        return "W"+val+"WR";

    oneside = cube[5][1][2];
    oppside = cube[1][2][1];
    if(oneside === "W" && oppside === val)
        return "WW"+val+"G";
    else if(oppside === "W" && oneside === val)
        return "W"+val+"WG";

    oneside = cube[5][2][1];
    oppside = cube[2][2][1];
    if(oneside === "W" && oppside === val)
        return "WW"+val+"O";
    else if(oppside === "W" && oneside === val)
        return "W"+val+"WO";

    oneside = cube[5][1][0];
    oppside = cube[3][2][1];
    if(oneside === "W" && oppside === val)
        return "WW"+val+"B";
    else if(oppside === "W" && oneside === val)
        return "W"+val+"WB";

    return "X";
}

//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W
function lookAtYellowEdges(val){
    let oneside = cube[4][2][1];
    let oppside = cube[0][0][1];
    if(oneside === "W" && oppside === val)
        return "YW"+val+"R";
    else if(oppside === "W" && oneside === val)
        return "Y"+val+"WR";

    oneside = cube[4][1][2];
    oppside = cube[1][0][1];
    if(oneside === "W" && oppside === val)
        return "YW"+val+"G";
    else if(oppside === "W" && oneside === val)
        return "Y"+val+"WG";

    oneside = cube[4][0][1];
    oppside = cube[2][0][1];
    if(oneside === "W" && oppside === val)
        return "YW"+val+"O";
    else if(oppside === "W" && oneside === val)
        return "Y"+val+"WO";

    oneside = cube[4][1][0];
    oppside = cube[3][0][1];
    if(oneside === "W" && oppside === val)
        return "YW"+val+"B";
    else if(oppside === "W" && oneside === val)
        return "Y"+val+"WB";
    return "X";
}

//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W
function lookAtMiddleEdges(val){
    let oneside = cube[0][1][2];
    let oppside = cube[1][1][0];
    if(oneside === "W" && oppside === val)
        return "RW" + val + "G";
    else if(oppside === "W" && oneside === val)
        return "R"+val+"WG";

    oneside = cube[1][1][2];
    oppside = cube[2][1][0];
    if(oneside === "W" && oppside === val)
        return "GW" + val + "O";
    else if(oppside === "W" && oneside === val)
        return "G"+val+"WO";

    oneside = cube[2][1][2];
    oppside = cube[3][1][0];
    if(oneside === "W" && oppside === val)
        return "OW" + val + "B";
    else if(oppside === "W" && oneside === val)
        return "O"+val+"WB";

    oneside = cube[3][1][2];
    oppside = cube[0][1][0];
    if(oneside === "W" && oppside === val)
        return "BW" + val + "R";
    else if(oppside === "W" && oneside === val)
        return "B"+val+"WR";

    return "X";
}

function whiteCrossBlue() {
    let moves = []
    let v = lookAtWhiteEdges("B")
    if(v[0] !== "X"){
        console.log(v)
        if(v[1] === "W"){
            switch (v[3]){
                case "G":
                    moves.push("DN")
                    moves.push("DN")
                    moves.push("LC")
                    moves.push("DC")
                    moves.push("DC")
                    moves.push("LN")
                    break;
                case "O":
                    moves.push("DN")
                    moves.push("LC")
                    moves.push("DC")
                    moves.push("LN")
                    break;
                case "R":
                    moves.push("DC")
                    moves.push("LC")
                    moves.push("DN")
                    moves.push("LN")
                    break;
                case "B":
                    console.log("It's Perfect")
                    break;

            }
        } else {
            switch (v[3]) {
                case "B":
                    moves.push("LC")
                    break;
                case "O":
                    moves.push("BC")
                    break;
                case "R":
                    moves.push("FC")
                    break;
                case "G":
                    moves.push("RC")
                    break;
            }
        }
    }
    v = lookAtMiddleEdges("B")
    if(v[0] !== "X") {
        if(v[0] === "O"){
            if(v[1] === "W"){
                moves.push("LC");
            } else {
                moves.push("BC");
                moves.push("TC");
                moves.push("BN");
                moves.push("LC");
                moves.push("LC");
            }
        } else if(v[0] === "B") {
            if(v[1] === "W"){
                moves.push("FN");
                moves.push("TN");
                moves.push("LC");
                moves.push("LC");
            } else {
                moves.push("LN");
            }
        } else if(v[0] === "R") {
            if(v[1] === "W"){
                moves.push("RN");
                moves.push("TC");
                moves.push("TC");
                moves.push("RC");
            } else {
                moves.push("FC");
                moves.push("TN");
                moves.push("FN");
            }
            moves.push("LC");
            moves.push("LC");
        } else {
            if(v[1] === "W"){
                moves.push("BN");
                moves.push("TC");
                moves.push("BC");
            } else {
                moves.push("RC");
                moves.push("TC");
                moves.push("TC");
                moves.push("RN");
            }
            moves.push("LC");
            moves.push("LC");
        }
        console.log(v);
    }
    v = lookAtYellowEdges("B");
    if(v[0] !== "X") {
        if(v[1] === "W"){
            switch (v[3]){
                case "G":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "R":
                    moves.push("TN");
                    break;
                case "O":
                    moves.push("TC");
                    break;
                case "B":
                    break;
            }
            moves.push("LC");
            moves.push("LC");
        } else {
            switch (v[3]){
                case "G":
                    moves.push("TN");
                    moves.push("FC");
                    moves.push("LN");
                    moves.push("FN");
                    break;
                case "R":
                    moves.push("FC");
                    moves.push("LN");
                    moves.push("FN");
                    break;
                case "O":
                    moves.push("BN");
                    moves.push("LC");
                    moves.push("BC");
                    break;
                case "B":
                    moves.push("TN");
                    moves.push("BN");
                    moves.push("LC");
                    moves.push("BC");
                    break;
            }
        }

    } else {
        console.log("This Happens");
    }


    console.log(moves);
    return moves;
}

function whiteCrossRed() {
    let moves = []
    let v = lookAtWhiteEdges("R")
    if(v[0] !== "X"){
        console.log(v)
        if(v[1] === "W"){
            switch (v[3]){
                case "O":
                    moves.push("DN")
                    moves.push("DN")
                    moves.push("FC")
                    moves.push("DC")
                    moves.push("DC")
                    moves.push("FN")
                    break;
                case "B":
                    moves.push("DN")
                    moves.push("FC")
                    moves.push("DC")
                    moves.push("FN")
                    break;
                case "G":
                    moves.push("DC")
                    moves.push("FC")
                    moves.push("DN")
                    moves.push("FN")
                    break;
                case "R":
                    console.log("It's Perfect")
                    break;

            }
        } else {
            switch (v[3]) {
                case "B":
                    moves.push("LC")
                    break;
                case "O":
                    moves.push("BC")
                    break;
                case "R":
                    moves.push("FC")
                    break;
                case "G":
                    moves.push("RC")
                    break;
            }
        }

    }
    v = lookAtMiddleEdges("R")
    if(v[0] !== "X") {
        if(v[0] === "B"){
            if(v[1] === "W"){
                moves.push("FC");
            } else {
                moves.push("LC");
                moves.push("TC");
                moves.push("LN");
                moves.push("FC");
                moves.push("FC");
            }
        } else if(v[0] === "R") {
            if(v[1] === "W"){
                moves.push("RN");
                moves.push("TN");
                moves.push("FC");
                moves.push("FC");
            } else {
                moves.push("FN");
            }
        } else if(v[0] === "G") {
            if(v[1] === "W"){
                moves.push("BN");
                moves.push("TC");
                moves.push("TC");
                moves.push("BC");
            } else {
                moves.push("RC");
                moves.push("TN");
                moves.push("RN");
            }
            moves.push("FC");
            moves.push("FC");
        } else {
            if(v[1] === "W"){
                moves.push("LN");
                moves.push("TC");
                moves.push("LC");
            } else {
                moves.push("BC");
                moves.push("TC");
                moves.push("TC");
                moves.push("BN");
            }
            moves.push("FC");
            moves.push("FC");
        }
        console.log(v);
    }
    v = lookAtYellowEdges("R");
    if(v[0] !== "X") {
        if(v[1] === "W"){
            switch (v[3]){
                case "O":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "G":
                    moves.push("TN");
                    break;
                case "B":
                    moves.push("TC");
                    break;
                case "R":
                    break;
            }
            moves.push("FC");
            moves.push("FC");
        } else {
            switch (v[3]){
                case "O":
                    moves.push("TN");
                    moves.push("RC");
                    moves.push("FN");
                    moves.push("RN");
                    break;
                case "G":
                    moves.push("RC");
                    moves.push("FN");
                    moves.push("RN");
                    break;
                case "B":
                    moves.push("LN");
                    moves.push("FC");
                    moves.push("LC");
                    break;
                case "R":
                    moves.push("TN");
                    moves.push("LN");
                    moves.push("FC");
                    moves.push("LC");
                    break;
            }
        }

    } else {
        console.log("This Happens");
    }



    console.log(moves);
    return moves;
}

function whiteCrossOrange() {
    let moves = []
    let v = lookAtWhiteEdges("O")
    if(v[0] !== "X"){
        console.log(v)
        if(v[1] === "W"){
            switch (v[3]){
                case "R":
                    moves.push("DN")
                    moves.push("DN")
                    moves.push("BC")
                    moves.push("DC")
                    moves.push("DC")
                    moves.push("BN")
                    break;
                case "G":
                    moves.push("DN")
                    moves.push("BC")
                    moves.push("DC")
                    moves.push("BN")
                    break;
                case "B":
                    moves.push("DC")
                    moves.push("BC")
                    moves.push("DN")
                    moves.push("BN")
                    break;
                case "O":
                    console.log("It's Perfect")
                    break;

            }
        } else {
            switch (v[3]) {
                case "B":
                    moves.push("LC")
                    break;
                case "O":
                    moves.push("BC")
                    break;
                case "R":
                    moves.push("FC")
                    break;
                case "G":
                    moves.push("RC")
                    break;
            }
        }
    }
    v = lookAtMiddleEdges("O")
    if(v[0] !== "X") {
        if(v[0] === "G"){
            if(v[1] === "W"){
                moves.push("BC");
            } else {
                moves.push("RC");
                moves.push("TC");
                moves.push("RN");
                moves.push("BC");
                moves.push("BC");
            }
        } else if(v[0] === "O") {
            if(v[1] === "W"){
                moves.push("LN");
                moves.push("TN");
                moves.push("BC");
                moves.push("BC");
            } else {
                moves.push("BN");
            }
        } else if(v[0] === "B") {
            if(v[1] === "W"){
                moves.push("FN");
                moves.push("TC");
                moves.push("TC");
                moves.push("FC");
            } else {
                moves.push("LC");
                moves.push("TN");
                moves.push("LN");
            }
            moves.push("BC");
            moves.push("BC");
        } else {
            if(v[1] === "W"){
                moves.push("RN");
                moves.push("TC");
                moves.push("RC");
            } else {
                moves.push("FC");
                moves.push("TC");
                moves.push("TC");
                moves.push("FN");
            }
            moves.push("BC");
            moves.push("BC");
        }
        console.log(v);
    }
    v = lookAtYellowEdges("O");
    if(v[0] !== "X") {
        if(v[1] === "W"){
            switch (v[3]){
                case "R":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "B":
                    moves.push("TN");
                    break;
                case "G":
                    moves.push("TC");
                    break;
                case "O":
                    break;
            }
            moves.push("BC");
            moves.push("BC");
        } else {
            switch (v[3]){
                case "R":
                    moves.push("TN");
                    moves.push("LC");
                    moves.push("BN");
                    moves.push("LN");
                    break;
                case "B":
                    moves.push("LC");
                    moves.push("BN");
                    moves.push("LN");
                    break;
                case "G":
                    moves.push("RN");
                    moves.push("BC");
                    moves.push("RC");
                    break;
                case "O":
                    moves.push("TN");
                    moves.push("RN");
                    moves.push("BC");
                    moves.push("RC");
                    break;
            }
        }

    } else {
        console.log("This Happens");
    }

    console.log(moves);
    return moves;
}


function whiteCrossGreen() {
    let moves = []
    let v = lookAtWhiteEdges("G")
    if(v[0] !== "X"){
        console.log(v)
        if(v[1] === "W"){
            switch (v[3]){
                case "B":
                    moves.push("DN")
                    moves.push("DN")
                    moves.push("RC")
                    moves.push("DC")
                    moves.push("DC")
                    moves.push("RN")
                    break;
                case "R":
                    moves.push("DN")
                    moves.push("RC")
                    moves.push("DC")
                    moves.push("RN")
                    break;
                case "O":
                    moves.push("DC")
                    moves.push("RC")
                    moves.push("DN")
                    moves.push("RN")
                    break;
                case "G":
                    console.log("It's Perfect")
                    break;

            }
        }
        else {
            switch (v[3]) {
                case "B":
                    moves.push("LC")
                    break;
                case "O":
                    moves.push("BC")
                    break;
                case "R":
                    moves.push("FC")
                    break;
                case "G":
                    moves.push("RC")
                    break;
            }
        }
    }
    v = lookAtMiddleEdges("G")
    if(v[0] !== "X") {
        if(v[0] === "R"){
            if(v[1] === "W"){
                moves.push("RC");
            } else {
                moves.push("FC");
                moves.push("TC");
                moves.push("FN");
                moves.push("RC");
                moves.push("RC");
            }
        } else if(v[0] === "G") {
            if(v[1] === "W"){
                moves.push("BN");
                moves.push("TN");
                moves.push("RC");
                moves.push("RC");
            } else {
                moves.push("RN");
            }
        } else if(v[0] === "O") {
            if(v[1] === "W"){
                moves.push("LN");
                moves.push("TC");
                moves.push("TC");
                moves.push("LC");
            } else {
                moves.push("BC");
                moves.push("TN");
                moves.push("BN");
            }
            moves.push("RC");
            moves.push("RC");
        } else {
            if(v[1] === "W"){
                moves.push("FN");
                moves.push("TC");
                moves.push("FC");
            } else {
                moves.push("LC");
                moves.push("TC");
                moves.push("TC");
                moves.push("LN");
            }
            moves.push("RC");
            moves.push("RC");
        }
        console.log(v);
    }
    v = lookAtYellowEdges("G");
    if(v[0] !== "X") {
        if(v[1] === "W"){
            switch (v[3]){
                case "B":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "O":
                    moves.push("TN");
                    break;
                case "R":
                    moves.push("TC");
                    break;
                case "G":
                    break;
            }
            moves.push("RC");
            moves.push("RC");
        } else {
            switch (v[3]){
                case "B":
                    moves.push("TN");
                    moves.push("BC");
                    moves.push("RN");
                    moves.push("BN");
                    break;
                case "O":
                    moves.push("BC");
                    moves.push("RN");
                    moves.push("BN");
                    break;
                case "R":
                    moves.push("FN");
                    moves.push("RC");
                    moves.push("FC");
                    break;
                case "G":
                    moves.push("TN");
                    moves.push("FN");
                    moves.push("RC");
                    moves.push("FC");
                    break;
            }
        }

    } else {
        console.log("This Happens");
    }




    console.log(moves);
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


const findRed = document.getElementById('find-whitecross-red');
findRed.addEventListener('click', () => {
    let m = whiteCrossRed();
    movesInterupter(m)
    let n = whiteCrossRed();
    movesInterupter(n);
    let o = whiteCrossRed();
    movesInterupter(o)
});

const findBlue = document.getElementById('find-whitecross-blue');
findBlue.addEventListener('click', () => {
    let m = whiteCrossBlue();
    movesInterupter(m)
    let n = whiteCrossBlue();
    movesInterupter(n);
    let o = whiteCrossBlue()
    movesInterupter(o)
});

const findGreen = document.getElementById('find-whitecross-green');
findGreen.addEventListener('click', () => {
    let m = whiteCrossGreen();
    movesInterupter(m)
    let n = whiteCrossGreen();
    movesInterupter(n);
    let o = whiteCrossGreen();
    movesInterupter(o)
});

const findOrange = document.getElementById('find-whitecross-orange');
findOrange.addEventListener('click', () => {
    let m = whiteCrossOrange();
    movesInterupter(m)
    let n = whiteCrossOrange();
    movesInterupter(n);
    let o = whiteCrossOrange();
    movesInterupter(o)
});

const findWhiteCross = document.getElementById('solve-whitecross');
findWhiteCross.addEventListener('click', () => {
    let m = whiteCrossRed();
    movesInterupter(m)
    let n = whiteCrossRed();
    movesInterupter(n);
    let o = whiteCrossRed();
    movesInterupter(o);

    let p = whiteCrossBlue();
    movesInterupter(p)
    let q = whiteCrossBlue();
    movesInterupter(q);
    let r = whiteCrossBlue()
    movesInterupter(r)

    let s = whiteCrossGreen();
    movesInterupter(s)
    let t = whiteCrossGreen();
    movesInterupter(t);
    let u = whiteCrossGreen();
    movesInterupter(u)

    let v = whiteCrossOrange();
    movesInterupter(v)
    let w = whiteCrossOrange();
    movesInterupter(w);
    let x = whiteCrossOrange();
    movesInterupter(x)
});