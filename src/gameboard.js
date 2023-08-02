const GameBoard = (boardNode) => {
    let possibleShips = ['carrier-ship', 'battle-ship', 'cruiser-ship', 'submarine-ship', 'destroyer-ship'];


    const initBoard = () => {
        for (let i = 0; i < 100; i++)  {
            const squareNode = document.createElement('div');
            squareNode.classList.add('square');
            squareNode.id = i; 

            boardNode.appendChild(squareNode);
        }
    }

    const placeRandom = (game) => {
        while (game.getCurrentPointer() < 5) 
        {
            let randomCoord = Math.floor(Math.random() * 100);

            let randomRotate = Math.random(); 

            if (randomRotate < 0.5) {
                game.getEnemyShip().rotate();
            }

            let placeResult = place(randomCoord, game.getEnemyShip());

            if (placeResult) {
                game.incrementEnemyShipPointer();
            }

        }
    }

    const containsMissle = (classArray) => {
        return classArray.includes('missle');
    }


    const containsShipClass = (classArray) => {
        for (let i = 0; i < possibleShips.length; i++) {
            if (classArray.includes(possibleShips[i])) {
                return true 
            }
        }

        return false
    }

    
    const isValidPlacement = (coordinate, ship) => {
        // checks to see if the coordinate placement is valid 
        if (coordinate < 0) {
            return false; 
        }

        if (ship.isOnBoard()) {
            return false; 
        }


        if (ship.getRotation() === 0) { // horizontal
            const horizontalCeiling = Math.ceil((coordinate + 1) / 10) * 10 ;
            return coordinate + ship.length - 1 < horizontalCeiling; 
        } else { // vertical 
            const coordinateString = String(coordinate);
            let column; 
            coordinateString.length === 2 ? column = coordinateString[1] : column = coordinateString;  
            const verticalCeiling = Number(`9${column}`) ;
            console.log(coordinate + ship.length * 10);

            return coordinate + (ship.length - 1) * 10 <= verticalCeiling; 


        }
    }


    const isEmptySquares = (coordinate, ship) => { // the ship placement has empty squares 
        let coord = coordinate; 


        for (let i = 0; i < ship.length; i++)
        {
            let locationNode = boardNode.querySelector(`[id='${coord}']`);
            if (!containsShipClass(Array.from(locationNode.classList))) {

                if (ship.getRotation() === 0) { // horizontal


                    coord += 1; 
                } else { // vertical 
                    coord += 10; 
                }
            } else {

                return false; 
            }

        }

        return true; 
    

    }




    const place = (coordinate, ship) => {   
        let coord = coordinate; 
        if (!isValidPlacement(coordinate, ship) || (!isEmptySquares(coordinate, ship)))
        {
            console.log("Not a valid placement!");
            return false; 
        } else {
            ship.place(); // make is placed true 
            for (let i = 0; i < ship.length; i++)
            {
    
                
                let locationNode = boardNode.querySelector(`[id='${coord}']`);
                locationNode.classList.add(ship.name);

                if (ship.getRotation() === 0) { // horizontal
                    coord += 1; 
                } else { // vertical 
                    coord += 10; 
                }
            }
        }

        clearHighlights();
        return true; // returns true if placement was successful
    }   


    const showShipPreview = (id, currentShip) => {
        if (isValidPlacement(id, currentShip) && (isEmptySquares(id, currentShip))) {
            for (let i = 0; i < ship.length; i++)
            {
    
                
                let locationNode = boardNode.querySelector(`[id='${id}']`);
                locationNode.classList.add('highlight');

                if (currentShip.getRotation() === 0) { // horizontal
                    id += 1; 
                } else { // vertical 
                    id += 10; 
                }
            }
        }   
    }



    const checkPlayerWin = () => {
        let enemyBoard = document.querySelector('.board-enemy');
        let opponentBoard = document.querySelector('.board-opponent');

        let enemySquares = enemyBoard.querySelectorAll('.square');

        let res = true; 


        enemySquares.forEach((square) => {
            let squareClasses = Array.from(square.classList);

            let opponentSquare = opponentBoard.querySelector(`[id='${square.id}']`)
            let opponentClasses = Array.from(opponentSquare.classList);



            if (containsShipClass(squareClasses)) {
                if (!containsMissle(opponentClasses)) {
                    console.log(square, 'its not a win!');
                    res = false; 
                }
            }

        })

        return res; 

    }

    const checkEnemyWin = () => {
        let playerBoard = document.querySelector('.board-player');

        let playerSquares = playerBoard.querySelectorAll('.square');

        let res = true; 

        playerSquares.forEach((square) => {
            let squareClasses = Array.from(square.classList);

            if (containsShipClass(squareClasses)) {
                if (!containsMissle(squareClasses)) {
                    res = false; 
                }
            }

        })

        return res; 
    }



    const detectPlayerAttack = (roundHandler, gameManager) => {
        let opponentBoard = document.querySelector('.board-opponent')


        opponentBoard.addEventListener('click', (event) => {
            console.log(roundHandler.getCurrentMover(), gameManager.getCanPlace())
            if (roundHandler.getCurrentMover() === "player" && !gameManager.getCanPlace())
            {

                let enemyAttackSquare = boardNode.querySelector(`[id='${event.target.id}']`)

                if (containsShipClass(Array.from(enemyAttackSquare.classList)))
                {
                    event.target.classList.add(Array.from(enemyAttackSquare.classList)[Array.from(enemyAttackSquare.classList).length - 1]);
                    event.target.classList.add('missle');


                }

                event.target.textContent = "X";
                roundHandler.switchMover();
                randomEnemyAttack(roundHandler);

                if (checkPlayerWin()) {
                    alert("player won!");
                    location.reload();
                }

            } else {
                console.log("Not player's turn")
            }
        })
    }

    const randomEnemyAttack = (roundHandler) => {
        if (roundHandler.getCurrentMover() === "enemy")
        {
            let foundSquare = false; 

            while (!foundSquare) {
                let randomCoord = Math.floor(Math.random() * 100);
                let playerBoard = document.querySelector('.board-player');
                let coordNode = playerBoard.querySelector(`[id='${Number(randomCoord)}']`);

                if (!containsMissle(Array.from(coordNode.classList))) {
                    coordNode.textContent = "X"; 
                    foundSquare = true;
                    roundHandler.switchMover();
                }
            }

            if (checkEnemyWin()) {
                alert("Enemy has won!")
            }
        }
    }





    const clearHighlights = () => {
        const board = document.querySelector('#board');

        const squares = board.querySelectorAll('.square');

        squares.forEach((square) => {
            if (Array.from(square.classList).includes('highlight'))
            {
                square.classList.remove('highlight');
            }
        })
    }

    const highlightHover = (currentShip) => {
        const board = document.querySelector('#board');

        board.addEventListener('mouseover', () => {
            const squares = document.querySelectorAll('.square');


/*             squares.forEach((square) => {
                if (Array.from(square.classList).includes('highlight'))
                {
                    square.classList.remove('highlight');
                }
            }) */

            squares.forEach((square) => {
                square.addEventListener('mouseover', () => {


                    showShipPreview(Number(square.id), currentShip)

                })


/*                 if (Array.from(e.target.classList).includes('highlight')) {
                } */
            })
        }) 
    }



    return {initBoard, placeRandom, place, highlightHover, detectPlayerAttack}
}

export {
    GameBoard
}