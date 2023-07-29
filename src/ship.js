const Ship = (name, length) => {
    let numHits = 0; 
    let isSunk = false; 
    let isPlaced = false; 
    let rotation = 0; 


    const hit = () => {
        numHits += 1; 
    }

    const getShipNode = (type) => {
        const shipNode = document.createElement('div');
        shipNode.id = 'ship';
        shipNode.classList.add(type);
        shipNode.draggable = true; 

        return shipNode; 
    }

    const sink = () => {
        isSunk = true; 
    }


    const isOnBoard = () => {
        return isPlaced; 
    }

    const place = () => {
        isPlaced = true; 
    }

    const rotate = () => {
        rotation === 0 ? rotation = 90 : rotation = 0; 
    }

    const getRotation = () => {
        return rotation; 
    }

    return {
        name, isOnBoard, place, length, hit, numHits, sink, isSunk, getShipNode, rotate, getRotation
    }
}


export {
    Ship
}