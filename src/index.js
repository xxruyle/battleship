import './style.css'
import { GameBoard } from './gameboard'
import { Ship } from './ship';
import { GameManager } from './gamemanager';


function main() {
    let playerBoard = GameBoard(document.querySelector('.board-player'));
    let enemyBoard = GameBoard(document.querySelector('.board-enemy'));

    playerBoard.initBoard();
    enemyBoard.initBoard();



    let game = GameManager(playerBoard, enemyBoard);
    game.placeRandom()
    game.detectRotate();
    game.detectPlacement(playerBoard);


    // playerBoard.highlightHover(game.getCurrentShip());


}

main();


