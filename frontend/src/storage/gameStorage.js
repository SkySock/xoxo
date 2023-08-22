import {action, computed, makeObservable, observable} from "mobx";
import {createContext, useContext} from "react";

class Game {
    mode = 'x';
    field = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    constructor() {
        if (!this.loadStateFromLocalStorage()) {
            this.startedAt = new Date().getTime();
        }
        makeObservable(this, {
            mode: observable,
            field: observable,
            makeMove: action,
            loadStateFromLocalStorage: action,
            winner: computed,
            hasEmpty: computed,
            isDraw: computed,
            isFinished: computed,
        });
    }

    get winner() {
        return ['x', 'o'].find((symbol) => this.isWinner(symbol)) ?? null;
    }

    get hasEmpty() {
        return this.field.some((row) => row.some((cell) => !cell));
    }

    get isDraw() {
        return !this.winner && this.hasEmpty;
    }

    get isFinished() {
        return this.winner || !this.hasEmpty;
    }

    get gameTime() {
        const time = new Date() - this.startedAt;
        const seconds = Math.floor(time / 1000 % 60);
        const minutes = Math.floor(time / 1000 / 60)
        const secondsString = (seconds < 10) ? `0${seconds}` : `${seconds}`;
        const minutesString = (minutes < 10) ? `0${minutes}` : `${minutes}`;
        return `${minutesString} : ${secondsString}`;
    }

    makeMove(row, col) {
        if (this.field[row][col] !== null) {
            throw new Error("Cell not empty");
        }
        this.field[row][col] = this.mode;
        this.mode = this.mode === 'x' ? 'o':'x';
        this.saveState();
    }

    isWinner(symbol) {
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 9],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 9],
            [0, 4, 9],
            [2, 4, 6]
        ];

        return combinations.every((idx) => {
            const row = Math.floor(idx / 3);
            const col = idx % 3;
            return this.field[row][col] === symbol;
        });
    }

    loadStateFromLocalStorage() {
        const data = localStorage.getItem('game');
        if (!data) return false;

        const {field, mode, startedAt} = JSON.parse(data);

        this.field = field;
        this.mode = mode;
        this.startedAt = startedAt;
        return true;
    }

    saveState() {
        localStorage.setItem('game', JSON.stringify(this));
    }
}

const game = new Game();
const GameContext = createContext(game);

export const useGame = () => {
    return useContext(GameContext);
};

export default game;