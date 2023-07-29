import { Ship } from './ship';


const GameManager = (board) => { 
    let canPlace = true; 


    let carrier = Ship('carrier-ship', 5);
    let battle = Ship('battle-ship', 4);
    let cruiser = Ship('cruiser-ship', 3);
    let submarine = Ship('submarine-ship', 3);
    let destroyer = Ship('destroyer-ship', 2);

    let ships = [carrier, battle, cruiser, submarine, destroyer];
    let shipPointer = 0 
    let currentShip = ships[shipPointer]; 

    const incrementShipPointer = () => {
        if (shipPointer < ships.length - 1) {
            shipPointer += 1; 
            currentShip = ships[shipPointer];
        } else { 
            canPlace = false; 
        }
    }


    const detectRotate = () => {
        let rotateBtn = document.querySelector('.rotate');

        rotateBtn.addEventListener('click', () => {
            currentShip.rotate();
        })
    }


    const detectPlacement = () => {
        let boardNode = document.querySelector('.board-player'); 

        boardNode.addEventListener('click', (event) => {
            if (canPlace) {
                let placeResult = board.place(Number(event.target.id), currentShip);

                if (placeResult) {
                    incrementShipPointer();
                }
            }

        })
    }


    return {detectRotate, detectPlacement};
    
}

export {
    GameManager
}