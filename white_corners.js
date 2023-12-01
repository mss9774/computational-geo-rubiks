import * as cont from   './controller.js'
import {cube} from "./controller.js";



//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W
function lookAtWhiteCorners(val, val2){
    let whiteside = cube[5][0][2];
    let leftside = cube[0][2][2];
    let rightside = cube[1][2][0];
    //   4
    // 3 0 1 2
    //   5

    //   Y
    // B R G O
    //   W

    if(whiteside === "W" && leftside === val && rightside === val2){
        return "WWR"+val+"G"+val2;
    }else if(whiteside === "W" && leftside === val2 && rightside === val) {
        return "WWR"+val2+"G"+val;
    }else if(whiteside === val && leftside === "W" && rightside === val2) {
        return "W"+val+"RWG"+val2;
    }else if(whiteside === val2 && leftside === "W" && rightside === val) {
        return "W"+val2+"RWG"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "W") {
        return "W"+val+"R"+val2+"GW";
    }else if(whiteside === val2 && leftside === val && rightside === "W") {
        return "W"+val2+"R"+val+"GW";
    }

    whiteside = cube[5][2][2];
    leftside = cube[1][2][2];
    rightside = cube[2][2][0];

    //   4
    // 3 0 1 2
    //   5

    //   Y
    // B R G O
    //   W

    if(whiteside === "W" && leftside === val && rightside === val2){
        return "WWG"+val+"O"+val2;
    }else if(whiteside === "W" && leftside === val2 && rightside === val) {
        return "WWG"+val2+"O"+val;
    }else if(whiteside === val && leftside === "W" && rightside === val2) {
        return "W"+val+"GWO"+val2;
    }else if(whiteside === val2 && leftside === "W" && rightside === val) {
        return "W"+val2+"GWO"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "W") {
        return "W"+val+"G"+val2+"OW";
    }else if(whiteside === val2 && leftside === val && rightside === "W") {
        return "W"+val2+"G"+val+"OW";
    }

    whiteside = cube[5][2][0];
    leftside = cube[2][2][2];
    rightside = cube[3][2][0];
    //   4
    // 3 0 1 2
    //   5

    //   Y
    // B R G O
    //   W

    if(whiteside === "W" && leftside === val && rightside === val2){
        return "WWO"+val+"B"+val2;
    }else if(whiteside === "W" && leftside === val2 && rightside === val) {
        return "WWO"+val2+"B"+val;
    }else if(whiteside === val && leftside === "W" && rightside === val2) {
        return "W"+val+"OWB"+val2;
    }else if(whiteside === val2 && leftside === "W" && rightside === val) {
        return "W"+val2+"OWB"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "W") {
        return "W"+val+"O"+val2+"BW";
    }else if(whiteside === val2 && leftside === val && rightside === "W") {
        return "W"+val2+"O"+val+"BW";
    }

    whiteside = cube[5][0][0];
    leftside = cube[3][2][2];
    rightside = cube[0][2][0];

    if(whiteside === "W" && leftside === val && rightside === val2){
        return "WWB"+val+"R"+val2;
    }else if(whiteside === "W" && leftside === val2 && rightside === val) {
        return "WWB"+val2+"R"+val;
    }else if(whiteside === val && leftside === "W" && rightside === val2) {
        return "W"+val+"BWR"+val2;
    }else if(whiteside === val2 && leftside === "W" && rightside === val) {
        return "W"+val2+"BWR"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "W") {
        return "W"+val+"B"+val2+"RW";
    }else if(whiteside === val2 && leftside === val && rightside === "W") {
        return "W"+val2+"B"+val+"RW";
    }
    return "X"
}

//   4
// 3 0 1 2
//   5

//   Y
// B R G O
//   W
function lookAtYellowCorners(val, val2){
    let whiteside = cube[4][2][2];
    let leftside = cube[0][0][2];
    let rightside = cube[1][0][0];

    if(whiteside === "W" && leftside === val && rightside === val2){
        return "YWR"+val+"G"+val2;
    }else if(whiteside === "W" && leftside === val2 && rightside === val) {
        return "YWR"+val2+"G"+val;
    }else if(whiteside === val && leftside === "W" && rightside === val2) {
        return "Y"+val+"RWG"+val2;
    }else if(whiteside === val2 && leftside === "W" && rightside === val) {
        return "Y"+val2+"RWG"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "W") {
        return "Y"+val+"R"+val2+"GW";
    }else if(whiteside === val2 && leftside === val && rightside === "W") {
        return "Y"+val2+"R"+val+"GW";
    }

    whiteside = cube[4][0][2];
    leftside = cube[1][0][2];
    rightside = cube[2][0][0];

    if(whiteside === "W" && leftside === val && rightside === val2){
        return "YWG"+val+"O"+val2;
    }else if(whiteside === "W" && leftside === val2 && rightside === val) {
        return "YWG"+val2+"O"+val;
    }else if(whiteside === val && leftside === "W" && rightside === val2) {
        return "Y"+val+"GWO"+val2;
    }else if(whiteside === val2 && leftside === "W" && rightside === val) {
        return "Y"+val2+"GWO"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "W") {
        return "Y"+val+"G"+val2+"OW";
    }else if(whiteside === val2 && leftside === val && rightside === "W") {
        return "Y"+val2+"G"+val+"OW";
    }

    whiteside = cube[4][0][0];
    leftside = cube[2][0][2];
    rightside = cube[3][0][0];

    if(whiteside === "W" && leftside === val && rightside === val2){
        return "YWO"+val+"B"+val2;
    }else if(whiteside === "W" && leftside === val2 && rightside === val) {
        return "YWO"+val2+"B"+val;
    }else if(whiteside === val && leftside === "W" && rightside === val2) {
        return "Y"+val+"OWB"+val2;
    }else if(whiteside === val2 && leftside === "W" && rightside === val) {
        return "Y"+val2+"OWB"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "W") {
        return "Y"+val+"O"+val2+"BW";
    }else if(whiteside === val2 && leftside === val && rightside === "W") {
        return "Y"+val2+"O"+val+"BW";
    }

    whiteside = cube[4][2][0];
    leftside = cube[3][0][2];
    rightside = cube[0][0][0];

    if(whiteside === "W" && leftside === val && rightside === val2){
        return "YWB"+val+"R"+val2;
    }else if(whiteside === "W" && leftside === val2 && rightside === val) {
        return "YWB"+val2+"R"+val;
    }else if(whiteside === val && leftside === "W" && rightside === val2) {
        return "Y"+val+"BWR"+val2;
    }else if(whiteside === val2 && leftside === "W" && rightside === val) {
        return "Y"+val2+"BWR"+val;
    }else if(whiteside === val && leftside === val2 && rightside === "W") {
        return "Y"+val+"B"+val2+"RW";
    }else if(whiteside === val2 && leftside === val && rightside === "W") {
        return "Y"+val2+"B"+val+"RW";
    }

    return "X"
}

function whiteCornerRed(){
    let m = lookAtWhiteCorners("B", "R");
    console.log(m)
    let moves = []
    if(m[0] !== "X"){
        if(m[1] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("LN");
                    moves.push("TN");
                    moves.push("LC");
                    break;
                case "G":
                    moves.push("BN");
                    moves.push("TN");
                    moves.push("BC");
                    break;
                case "R":
                    moves.push("RN");
                    moves.push("TN");
                    moves.push("RC");
                    break;
                case "B":
                    break;
            }
        } else if (m[3] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("BC");
                    moves.push("TC");
                    moves.push("BN");
                    break;
                case "G":
                    moves.push("RC");
                    moves.push("TC");
                    moves.push("RN");
                    break;
                case "R":
                    moves.push("FC");
                    moves.push("TC");
                    moves.push("FN");
                    break;
                case "B":
                    moves.push("LC");
                    moves.push("TC");
                    moves.push("LN");
                    break;
            }
        } else if (m[5] === "W"){
            switch (m[4]){
                case "O":
                    moves.push("BN");
                    moves.push("TN");
                    moves.push("BC");
                    break;
                case "G":
                    moves.push("RN");
                    moves.push("TN");
                    moves.push("RC");
                    break;
                case "R":
                    moves.push("FN");
                    moves.push("TN");
                    moves.push("FC");
                    break;
                case "B":
                    moves.push("LN");
                    moves.push("TN");
                    moves.push("LC");
                    break;
            }
        }

    }
    m = lookAtYellowCorners("B", "R")
    console.log(m)
    if(m[0] !== "X"){
        if(m[1] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TC");
                    break;
                case "G":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "R":
                    moves.push("TN");
                    break;
                case "B":
                    break;
            }
            moves.push("FN");
            moves.push("TC");
            moves.push("FC");


            // moves.push("RN");
            // moves.push("LC");
            // moves.push("TN");
            // moves.push("TN");
            // moves.push("RC");
            // moves.push("LN");
        } else if (m[3] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TC");
                    break;
                case "G":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "R":
                    moves.push("TN");
                    break;
                case "B":
                    break;
            }
            moves.push("FC");
            moves.push("LN");
            moves.push("FN");
            moves.push("LC");
        } else if (m[5] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TC");
                    break;
                case "G":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "R":
                    moves.push("TN");
                    break;
                case "B":
                    break;
            }
            moves.push("LN");
            moves.push("FC");
            moves.push("LC");
            moves.push("FN");
        }
    }
    console.log(moves)
    return moves
}

function whiteCornerBlue(){
    let m = lookAtWhiteCorners("O", "B");
    console.log(m)
    let moves = []
    if(m[0] !== "X"){
        if(m[1] === "W"){
            switch (m[2]){
                case "O":
                    break;
                case "G":
                    moves.push("BN");
                    moves.push("TN");
                    moves.push("BC");
                    break;
                case "R":
                    moves.push("RN");
                    moves.push("TN");
                    moves.push("RC");
                    break;
                case "B":
                    moves.push("FN");
                    moves.push("TN");
                    moves.push("FC");
                    break;
            }
        } else if (m[3] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("BC");
                    moves.push("TC");
                    moves.push("BN");
                    break;
                case "G":
                    moves.push("RC");
                    moves.push("TC");
                    moves.push("RN");
                    break;
                case "R":
                    moves.push("FC");
                    moves.push("TC");
                    moves.push("FN");
                    break;
                case "B":
                    moves.push("LC");
                    moves.push("TC");
                    moves.push("LN");
                    break;
            }
        } else if (m[5] === "W"){
            switch (m[4]){
                case "O":
                    moves.push("BN");
                    moves.push("TN");
                    moves.push("BC");
                    break;
                case "G":
                    moves.push("RN");
                    moves.push("TN");
                    moves.push("RC");
                    break;
                case "R":
                    moves.push("FN");
                    moves.push("TN");
                    moves.push("FC");
                    break;
                case "B":
                    moves.push("LN");
                    moves.push("TN");
                    moves.push("LC");
                    break;
            }
        }

    }
    m = lookAtYellowCorners("O", "B")
    console.log(m)
    if(m[0] !== "X"){
        if(m[1] === "W"){
            switch (m[2]){
                case "O":
                    break;
                case "G":
                    moves.push("TC");
                    break;
                case "R":
                    moves.push("TC");
                    moves.push("TC");

                    break;
                case "B":
                    moves.push("TN");

                    break;
            }
            moves.push("LN");
            moves.push("TC");
            moves.push("LC");
            // moves.push("FN");
            // moves.push("BC");
            // moves.push("TN");
            // moves.push("TN");
            // moves.push("FC");
            // moves.push("BN");
        } else if (m[3] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TC");
                    break;
                case "G":
                    break;
                case "R":
                    moves.push("TN");
                    break;
                case "B":
                    moves.push("TN");
                    moves.push("TN");
                    break;
            }
            moves.push("LN");
            moves.push("TC");
            moves.push("LC");
        } else if (m[5] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TC");
                    break;
                case "G":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "R":
                    moves.push("TN");
                    break;
                case "B":
                    break;
            }

            moves.push("BC");
            moves.push("TN")
            moves.push("BN");
        }
    }
    console.log(moves)
    return moves
}

function whiteCornerOrange(){
    let m = lookAtWhiteCorners("G", "O");
    console.log(m)
    let moves = []
    if(m[0] !== "X"){
        if(m[1] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("LN");
                    moves.push("TN");
                    moves.push("LC");
                    break;
                case "G":
                    break;
                case "R":
                    moves.push("RN");
                    moves.push("TN");
                    moves.push("RC");
                    break;
                case "B":
                    moves.push("FN");
                    moves.push("TN");
                    moves.push("FC");
                    break;
            }
        } else if (m[3] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("BC");
                    moves.push("TC");
                    moves.push("BN");
                    break;
                case "G":
                    moves.push("RC");
                    moves.push("TC");
                    moves.push("RN");
                    break;
                case "R":
                    moves.push("FC");
                    moves.push("TC");
                    moves.push("FN");
                    break;
                case "B":
                    moves.push("LC");
                    moves.push("TN");
                    moves.push("LN");
                    break;
            }
        } else if (m[5] === "W"){
            switch (m[4]){
                case "O":
                    moves.push("BN");
                    moves.push("TN");
                    moves.push("BC");
                    break;
                case "G":
                    moves.push("RN");
                    moves.push("TN");
                    moves.push("RC");
                    break;
                case "R":
                    moves.push("FN");
                    moves.push("TN");
                    moves.push("FC");
                    break;
                case "B":
                    moves.push("LN");
                    moves.push("TN");
                    moves.push("LC");
                    break;
            }
        }

    }
    m = lookAtYellowCorners("G", "O")
    console.log(m)
    if(m[0] !== "X"){
        if(m[1] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TN");
                    break;
                case "G":
                    break;
                case "R":
                    moves.push("TC");
                    break;
                case "B":
                    moves.push("TN");
                    moves.push("TN");
                    break;
            }
            moves.push("BN");
            moves.push("TC");
            moves.push("BC");
            // moves.push("FC");
            // moves.push("BN");
            // moves.push("TN");
            // moves.push("TN");
            // moves.push("BC");
            // moves.push("FN");
        } else if (m[3] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "G":
                    moves.push("TN");
                    break;
                case "R":
                    break;
                case "B":
                    moves.push("TC");
                    break;
            }
            moves.push("BN");
            moves.push("TC");
            moves.push("BC");
        } else if (m[5] === "W"){
            switch (m[2]){
                case "O":
                    break;
                case "G":
                    moves.push("TC");
                    break;
                case "R":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "B":
                    moves.push("TN");
                    break;
            }
            moves.push("RC");
            moves.push("TN");
            moves.push("RN");
        }
    }
    console.log(moves)
    return moves
}

function whiteCornerGreen(){
    let m = lookAtWhiteCorners("R", "G");
    console.log(m)
    let moves = []
    if(m[0] !== "X"){
        if(m[1] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("LN");
                    moves.push("TN");
                    moves.push("LC");
                    break;
                case "G":
                    moves.push("BN");
                    moves.push("TN");
                    moves.push("BC");
                    break;
                case "R":
                    break;
                case "B":
                    moves.push("FN");
                    moves.push("TN");
                    moves.push("FC");
                    break;
            }
        } else if (m[3] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("BC");
                    moves.push("TC");
                    moves.push("BN");
                    break;
                case "G":
                    moves.push("RC");
                    moves.push("TC");
                    moves.push("RN");
                    break;
                case "R":
                    moves.push("FC");
                    moves.push("TC");
                    moves.push("FN");
                    break;
                case "B":
                    moves.push("LC");
                    moves.push("TC");
                    moves.push("LN");
                    break;
            }
        } else if (m[5] === "W"){
            switch (m[4]){
                case "O":
                    moves.push("BN");
                    moves.push("TN");
                    moves.push("BC");
                    break;
                case "G":
                    moves.push("RN");
                    moves.push("TN");
                    moves.push("RC");
                    break;
                case "R":
                    moves.push("FN");
                    moves.push("TN");
                    moves.push("FC");
                    break;
                case "B":
                    moves.push("LN");
                    moves.push("TN");
                    moves.push("LC");
                    break;
            }
        }

    }
    m = lookAtYellowCorners("R", "G")
    console.log(m)
    if(m[0] !== "X"){
        if(m[1] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "G":
                    moves.push("TN");
                    break;
                case "R":
                    break;
                case "B":
                    moves.push("TC");
                    break;
            }
            moves.push("RN");
            moves.push("TC");
            moves.push("RC");
            // moves.push("BN");
            // moves.push("FC");
            // moves.push("TN");
            // moves.push("TN");
            // moves.push("BC");
            // moves.push("FN");
        } else if (m[3] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TC");
                    break;
                case "G":
                    moves.push("TN");
                    moves.push("TN");
                    break;
                case "R":
                    moves.push("TN");
                    break;
                case "B":
                    break;
            }
            moves.push("RN");
            moves.push("TC");
            moves.push("RC");
        } else if (m[5] === "W"){
            switch (m[2]){
                case "O":
                    moves.push("TN");
                    break;
                case "G":
                    break;
                case "R":
                    moves.push("TC");
                    break;
                case "B":
                    moves.push("TN");
                    moves.push("TN");
                    break;
            }

            moves.push("FC");
            moves.push("TN")
            moves.push("FN");
        }
    }
    console.log(moves)
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


const findRed = document.getElementById('find-whitecorner-red');
findRed.addEventListener('click', () => {
    let m = whiteCornerRed();
    movesInterupter(m);
    let n = whiteCornerRed();
    movesInterupter(n)
});

const findBlue = document.getElementById('find-whitecorner-blue');
findBlue.addEventListener('click', () => {
    let m = whiteCornerBlue();
    movesInterupter(m);
    let n = whiteCornerBlue();
    movesInterupter(n)
});

const findGreen = document.getElementById('find-whitecorner-green');
findGreen.addEventListener('click', () => {
    let m = whiteCornerGreen();
    movesInterupter(m);
    let n = whiteCornerGreen();
    movesInterupter(n)
});

const findOrange = document.getElementById('find-whitecorner-orange');
findOrange.addEventListener('click', () => {
    let m = whiteCornerOrange();
    movesInterupter(m);
    let n = whiteCornerOrange();
    movesInterupter(n)
});

const findWhiteCorner = document.getElementById('solve-whitecorner');
findWhiteCorner.addEventListener('click', () => {
    let m = whiteCornerRed();
    movesInterupter(m);
    let n = whiteCornerRed();
    movesInterupter(n)

    let o = whiteCornerBlue();
    movesInterupter(o);
    let p = whiteCornerBlue();
    movesInterupter(p)

    let q = whiteCornerGreen();
    movesInterupter(q);
    let r = whiteCornerGreen();
    movesInterupter(r)

    let s = whiteCornerOrange();
    movesInterupter(s);
    let t = whiteCornerOrange();
    movesInterupter(t);

});
