import * as cont from   './controller.js'
import {cube} from "./controller.js";

console.log("OH NO")
console.log(cont.cube)



//   4
// 3 0 1 2
//   5
function yellowCross(){
    let temp = [...cont.cube]
    console.log(temp)
    let redside = temp[4][2][1];
    let greenside = temp[4][1][2];
    let blueside = temp[4][1][0];
    console.log(redside);
    console.log(greenside);
    console.log(blueside);
    let moves = [];

    if(redside === "Y"){
        if(blueside === "Y"){
            if(greenside === "Y") {
                return moves;
            } else {
                moves.push("TN");
            }
        }else{
            if(greenside === "Y"){
                moves.push("TN");
                moves.push("TN");
            } else {
                moves.push("TN");
            }
        }
    } else {
        if(blueside !== "Y"){
            if(greenside === "Y"){
                moves.push("TC");
            }
        }
    }

    moves.push("FN");
    moves.push("RN");
    moves.push("TN");
    moves.push("RC");
    moves.push("TC");
    moves.push("FC");

    console.log(moves);
    return moves;

}

function yellowSidesRed(){
    let m = lookAtYellowEdges("R");
    console.log(m)
    let moves = []
    if(m[3] !== "R"){
        switch (m[3]){
            case "O":
                moves.push("TC");
                moves.push("TC");
                break;
            case "B":
                moves.push("TC");
                break;
            case "G":
                moves.push("TN")
                break;
            case "R":
                break;
        }
    }
    return moves;
}

function yellowSidesBlue(){
    let m = lookAtYellowEdges("B");
    let moves = [];
    if(m[3] !== "B"){
        //R U R' U R U2 R' U
        // R = F
        switch (m[3]){
            case "G":
                moves.push("TC");

                moves.push("FN");
                moves.push("TN");
                moves.push("FC");
                moves.push("TN");
                moves.push("FN");
                moves.push("TN");
                moves.push("TN");
                moves.push("FC");
                moves.push("TN");

                moves.push("TN");
            case "O":
                moves.push("FN");
                moves.push("TN");
                moves.push("FC");
                moves.push("TN");
                moves.push("FN");
                moves.push("TN");
                moves.push("TN");
                moves.push("FC");
                moves.push("TN");
                break;

        }
    }

    return moves;
}

function yellowSidesOrange(){
    let m = lookAtYellowEdges("O");
    let moves = [];
    if(m[3] !== "O"){
        //R U R' U R U2 R' U
        // R = F
        moves.push("TC");

        moves.push("FN");
        moves.push("TN");
        moves.push("FC");
        moves.push("TN");
        moves.push("FN");
        moves.push("TN");
        moves.push("TN");
        moves.push("FC");
        moves.push("TN");

        moves.push("TN");

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

const findRed = document.getElementById('solve-yellowcross');
findRed.addEventListener('click', () => {
    console.log([...cont.cube])
    let m = yellowCross();
    movesInterupter(m)
    let n = yellowCross();
    movesInterupter(n);
    let o = yellowCross();
    movesInterupter(o);

    let t = m.concat(n).concat(o)
    if(t.length === 0){
        const temp = document.getElementById('move-label');
        temp.textContent = "The cross is already solved!"
    }else{
        displayMoves(t)
    }
    const temp = document.getElementById('desc-label');
    temp.textContent = "This step creates the cross but not in the right position."
});

const yellowSides = document.getElementById('solve-yellowsides');
yellowSides.addEventListener('click', () => {
    console.log([...cont.cube])
    let m = yellowSidesRed();
    movesInterupter(m)
    let n = yellowSidesBlue();
    movesInterupter(n);
    let o = yellowSidesOrange();
    movesInterupter(o);

    let t = m.concat(n).concat(o)
    if(t.length === 0){
        const temp = document.getElementById('move-label');
        temp.textContent = "The cross is already aligned!"
    }else{
        displayMoves(t)
    }
    const temp = document.getElementById('desc-label');
    temp.textContent = "This step creates the completed cross by swapping edges."
});