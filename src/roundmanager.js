const RoundManager = () => {
    let current_mover = "player";


    const switchMover = () => {
        current_mover === "player" ? current_mover = "enemy" : current_mover = "player"; 
    }



    const getCurrentMover = () => {
        return current_mover; 
    }



    return {current_mover, switchMover, getCurrentMover};

}


export {
    RoundManager
}