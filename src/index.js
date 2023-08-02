import './style.css'
import { GameBoard } from './gameboard'
import { GameManager } from './gamemanager';
import { RoundManager } from './roundmanager';


function main() {
    let playerBoard = GameBoard(document.querySelector('.board-player'));
    let enemyBoard = GameBoard(document.querySelector('.board-enemy'));

    let opponentBoard = GameBoard(document.querySelector('.board-opponent'))

    

    playerBoard.initBoard();
    enemyBoard.initBoard();

    opponentBoard.initBoard();



    let game = GameManager(playerBoard, enemyBoard);
    game.placeRandom()
    game.detectRotate();
    game.detectPlacement(playerBoard);


    let roundManager = RoundManager();


    enemyBoard.detectPlayerAttack(roundManager, game);


    // playerBoard.highlightHover(game.getCurrentShip());


}

main();


