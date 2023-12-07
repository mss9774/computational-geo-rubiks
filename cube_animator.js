import {handleRotate} from "./controller";
import * as cont from "./controller";

let current_moves = []
let current_step = 0

export function uploadMoveSet(moveList){
    finishCurrentSet()
    current_moves = moveList
    current_step = 0
    movesInterupter(current_moves[0])
    document.getElementById('ani_count').innerText= (current_step+1) + "/" + current_moves.length;
}

function finishCurrentSet(){
    for(let i = current_step; i<current_moves.length; i++){

    }
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

const right = document.getElementById('ani_right');
right.addEventListener('click', () => {
        if(current_step + 1 < current_moves.length){
            current_step += 1
        }
    document.getElementById('ani_count').innerText= (current_step+1) + "/" + current_moves.length;
});

const count = document.getElementById('ani_count');
count.addEventListener('click', () => {
    movesInterupter(current_moves[current_step])
});

const left = document.getElementById('ani_left');
left.addEventListener('click', () => {
    if(current_step - 1 >= 0){
        current_step -= 1
    }
    document.getElementById('ani_count').innerText= (current_step+1) + "/" + current_moves.length;
});