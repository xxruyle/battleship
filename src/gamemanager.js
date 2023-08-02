import { Ship } from './ship';


const GameManager = (board, enemyBoard) => { 
    let canPlace = true; 


    let carrier = Ship('carrier-ship', 5);
    let battle = Ship('battle-ship', 4);
    let cruiser = Ship('cruiser-ship', 3);
    let submarine = Ship('submarine-ship', 3);
    let destroyer = Ship('destroyer-ship', 2);

    let enemy_carrier = Ship('carrier-ship', 5);
    let enemy_battle = Ship('battle-ship', 4);
    let enemy_cruiser = Ship('cruiser-ship', 3);
    let enemy_submarine = Ship('submarine-ship', 3);
    let enemy_destroyer = Ship('destroyer-ship', 2);


    let shipDic = {
        0: carrier, 
        1: battle, 
        2: cruiser, 
        3: submarine, 
        4: destroyer 
    };

    let enemyShipDic = {
        0: enemy_carrier, 
        1: enemy_battle, 
        2: enemy_cruiser, 
        3: enemy_submarine, 
        4: enemy_destroyer 
    }


    let shipPointer = 0 
    let currentShip = shipDic[shipPointer]; 

    let enemyShipPointer = 0; 
    let currentEnemyShip = enemyShipDic[enemyShipPointer];

    const incrementShipPointer = () => {
        if (shipPointer < 5) {
            shipPointer += 1; 
            currentShip = shipDic[shipPointer];
        } 

        if (shipPointer === 5) {
            changeCanPlace();
        }
    }

    const incrementEnemyShipPointer = () => {
        if (enemyShipPointer < 5) {
            enemyShipPointer += 1; 
            currentEnemyShip = enemyShipDic[enemyShipPointer];
        } 
    }

    const changeCanPlace = () => {
        canPlace = false; 
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

    const placeRandom = () => {
        while (getCurrentEnemyPointer() < 5) 
        {
            let randomCoord = Math.floor(Math.random() * 100);

            let randomRotate = Math.random(); 

            if (randomRotate < 0.5) {
                getEnemyShip().rotate();
            }

            let placeResult = enemyBoard.place(randomCoord, getEnemyShip());

            if (placeResult) {
                incrementEnemyShipPointer();
            }

        }
    }





    const getCurrentShip = () => {
        return currentShip; 
    }

    const getCurrentPointer = () => {
        return shipPointer;
    }

    const getEnemyShip = () => {
        return currentEnemyShip; 
    }

    const getCurrentEnemyPointer = () => {
        return enemyShipPointer;
    }
    
    const getCanPlace = () => {
        return canPlace; 
    }



    return {placeRandom, detectRotate, incrementShipPointer, incrementEnemyShipPointer, detectPlacement, getCurrentShip, shipPointer, getCurrentPointer, getEnemyShip, getCurrentEnemyPointer, getCanPlace};
    
}

export {
    GameManager
}