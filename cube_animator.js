// import {handleRotate} from "./controller";
import * as cont from "./controller.js";
import {rotateLayer, createCubeFromInput, animationLoop, animation} from './rubiks.js'

import {cube} from "./controller.js";

let current_moves = []
let current_step = 0

export function uploadMoveSet(moveList){
    //finishCurrentSet()
    current_moves = moveList
    current_step = -1
    // movesInterupter(current_moves[0])
    document.getElementById('ani_count').innerText= (current_step+1) + "/" + current_moves.length;
}

function finishCurrentSet(){
    createCubeFromInput(cube)
}

document.addEventListener('keydown', function (event) {
        var direction = getArrowDirection(event.key);
        if (direction === "Right") {
            if(current_step + 1 < current_moves.length){
                current_step += 1

            }
        } else if (direction === "Left"){
            if(current_step - 1 >= 0){
                current_step -= 1
            }
        }


});

function getArrowDirection(key) {
    switch (key) {
        case 'ArrowUp':
            return 'Up';
        case 'ArrowDown':
            return 'Down';
        case 'ArrowLeft':
            return 'Left';
        case 'ArrowRight':
            return 'Right';
        default:
            return null;
    }
}
function movesInterupter(movelist){
        switch (movelist[0]) {
            case "L":
                if(movelist[1] === "C")
                    animationLoop("left", true);
                else
                    animationLoop("left", false);
                break;
            case "R":
                if(movelist[1] === "C")
                    animationLoop("right", true);
                else
                    animationLoop("right", false);
                break;
            case "D":
                if(movelist[1] === "C")
                    animationLoop("bottom", true);
                else
                    animationLoop("bottom", false);
                break;
            case "T":
                if(movelist[1] === "C")
                    animationLoop("top", true);
                else
                    animationLoop("top", false);
                break;
            case "B":
                if(movelist[1] === "C")
                    animationLoop("back", true);
                else
                    animationLoop("back", false);
                break;
            case "F":
                if(movelist[1] === "C")
                    animationLoop("front", true);
                else
                    animationLoop("front", false);
                break;

        }
    
}

const right = document.getElementById('ani_right');
right.addEventListener('click', () => {
        if(current_step + 1 < current_moves.length && !animation){
            current_step += 1
            movesInterupter(current_moves[current_step])
        }
    document.getElementById('ani_count').innerText= (current_step+1) + "/" + current_moves.length;
});


const left = document.getElementById('ani_left');
left.addEventListener('click', () => {
    if(current_step - 1 >= -1 && !animation){

        if(current_moves[current_step][1] === "N"){
            movesInterupter(current_moves[current_step][0] + "C")
        } else {
            movesInterupter(current_moves[current_step][0] + "N")
        }
        current_step -= 1
    }
    document.getElementById('ani_count').innerText= (current_step+1) + "/" + current_moves.length;
});