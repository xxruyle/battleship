const GameBoard = (boardNode) => {
    const initBoard = () => {
        for (let i = 0; i < 100; i++)  {
            const squareNode = document.createElement('div');
            squareNode.classList.add('square');
            squareNode.id = i; 

            boardNode.appendChild(squareNode);
        }
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
            if (Array.from(locationNode.classList).length < 2) {

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

    const shipStyling = (index, rotation) => {

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

        return true; // returns true if placement was successful
    }   





    return {initBoard, place}
}

export {
    GameBoard
}