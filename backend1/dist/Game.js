"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const chess_js_1 = require("chess.js");
const message_1 = require("./message");
class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = new chess_js_1.Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type: message_1.INIT_GAME,
            payload: {
                color: "white",
            },
        }));
        this.player2.send(JSON.stringify({
            type: message_1.INIT_GAME,
            payload: {
                color: "black",
            },
        }));
    }
    makeMove(socket, move) {
        if (this.board.move.length % 2 === 0 && socket !== this.player1) {
            return;
        }
        if (this.board.move.length % 2 === 1 && socket !== this.player2) {
            return;
        }
        // validation here
        /*
            check if it is user's turn
            check if the move is valid
    
            then...
            update the board
            push the move
            check if the game is over
            send the updated board to both players
             */
        try {
            this.board.move(move);
        }
        catch (e) {
            return;
        }
        if (this.board.isGameOver()) {
            this.player1.emit(JSON.stringify({
                type: message_1.Game_Over,
                payload: {
                    winner: this.board.turn() === "w" ? "black" : "white",
                },
            }));
            return;
        }
        if (this.board.moves.length % 2 === 0) {
            this.player2.emit(JSON.stringify({
                type: message_1.MOVE,
                payload: {
                    move,
                },
            }));
        }
        else {
            this.player1.emit(JSON.stringify({
                type: message_1.MOVE,
                payload: {
                    move,
                },
            }));
        }
    }
}
exports.Game = Game;
