import React, {useState} from 'react'
import Cell from './Cell';
import './App.css';

const changeState = (props) => {

}

const App = () => {
    const generateGrid = () => {
        let board = new Array(10).fill(0).map(row => new Array(10).fill(0));
        //console.log(board);
        return board;
    }
    const toggleValue = (i, j) => {
        const copy = [...grid]

        if (copy[i][j] === 0) {
            copy[i][j] = 1;
        } else {
            copy[i][j] = 0;
        }
        setGrid(copy)
    }
    const reset = () => {
        setGrid(generateGrid);
    }

    const tick = (grid) => {
        let neighbor = 0;
        let copy = generateGrid()
        for (let i = 1; i < grid.length-1; i++) {
            for (let j = 1; j < grid[i].length-1; j++) {
                neighbor = 0
                if (grid[i - 1][j] === 1)
                    neighbor++;
                if (grid[i - 1][j - 1] === 1)
                    neighbor++;
                if (grid[i][j - 1] === 1)
                    neighbor++;
                if (grid[i + 1][j] === 1)
                    neighbor++;
                if (grid[i + 1][j + 1] === 1)
                    neighbor++;
                if (grid[i][j + 1] === 1)
                    neighbor++;
                if (grid[i - 1][j + 1] === 1)
                    neighbor++;
                if (grid[i + 1][j - 1] === 1)
                    neighbor++;
                if ((neighbor === 2 || neighbor === 3) && (grid[i][j] === 1))
                    copy[i][j] = 1;
                else if (grid[i][j] === 0 && neighbor === 3)
                    copy[i][j] = 1;
                else if (grid[i][j] === 1)
                    copy[i][j] = 0;
                else
                    copy[i][j] = 0;
                console.log(neighbor, i , j);
            }
        }
        for(let j = 1; j < grid.length-1; j++){
            neighbor = 0;
            if (grid[0][j-1] === 1)
                neighbor++;
            if (grid[0][j+1] === 1)
                neighbor++;
            if (grid[1][j] === 1)
                neighbor++;
            if (grid[1][j-1] === 1)
                neighbor++;
            if (grid[1][j+1] === 1)
                neighbor++;
            if ((neighbor === 2 || neighbor === 3) && (grid[0][j] === 1))
                copy[0][j] = 1;
            else if (grid[0][j] === 0 && neighbor === 3)
                copy[0][j] = 1;
            else if (grid[0][j] === 1)
                copy[0][j] = 0;
            else
                copy[0][j] = 0;
            console.log(neighbor, 0 , j);
        }
        for(let j = 1; j < grid.length-1; j++){
            neighbor = 0;
            if (grid[9][j-1] === 1)
                neighbor++;
            if (grid[9][j+1] === 1)
                neighbor++;
            if (grid[8][j] === 1)
                neighbor++;
            if (grid[8][j-1] === 1)
                neighbor++;
            if (grid[8][j+1] === 1)
                neighbor++;
            if ((neighbor === 2 || neighbor === 3) && (grid[9][j] === 1))
                copy[9][j] = 1;
            else if (grid[9][j] === 0 && neighbor === 3)
                copy[9][j] = 1;
            else if (grid[9][j] === 1)
                copy[9][j] = 0;
            else
                copy[9][j] = 0;
            console.log(neighbor, 9 , j);
        }
        for(let j = 1; j < grid.length-1; j++){
            neighbor = 0;
            if (grid[j-1][0] === 1)
                neighbor++;
            if (grid[j+1][0] === 1)
                neighbor++;
            if (grid[j][1] === 1)
                neighbor++;
            if (grid[j+1][1] === 1)
                neighbor++;
            if (grid[j-1][1] === 1)
                neighbor++;
            if ((neighbor === 2 || neighbor === 3) && (grid[j][0] === 1))
                copy[j][0] = 1;
            else if (grid[j][0] === 0 && neighbor === 3)
                copy[j][0] = 1;
            else if (grid[j][0] === 1)
                copy[j][0] = 0;
            else
                copy[j][0] = 0;
            console.log(neighbor, j , 0);
        }
        for(let j = 1; j < grid.length-1; j++){
            neighbor = 0;
            if (grid[j-1][9] === 1)
                neighbor++;
            if (grid[j+1][9] === 1)
                neighbor++;
            if (grid[j][8] === 1)
                neighbor++;
            if (grid[j+1][8] === 1)
                neighbor++;
            if (grid[j-1][8] === 1)
                neighbor++;
            if ((neighbor === 2 || neighbor === 3) && (grid[j][9] === 1))
                copy[j][9] = 1;
            else if (grid[j][9] === 0 && neighbor === 3)
                copy[j][9] = 1;
            else if (grid[j][9] === 1)
                copy[j][9] = 0;
            else
                copy[j][9] = 0;
            console.log(neighbor, j , 9);
        }
        neighbor = 0;
        if (grid[0][1] === 1)
            neighbor++;
        if (grid[1][1] === 1)
            neighbor++;
        if (grid[1][0] === 1)
            neighbor++;
        if ((neighbor === 2 || neighbor === 3) && (grid[0][0] === 1))
            copy[0][0] = 1;
        else if (grid[0][0] === 0 && neighbor === 3)
            copy[0][0] = 1;
        else if (grid[0][0] === 1)
            copy[0][0] = 0;
        else
            copy[0][0] = 0;

        neighbor = 0;
        if (grid[9][8] === 1)
            neighbor++;
        if (grid[8][9] === 1)
            neighbor++;
        if (grid[8][8] === 1)
            neighbor++;
        if ((neighbor === 2 || neighbor === 3) && (grid[9][9] === 1))
            copy[9][9] = 1;
        else if (grid[9][9] === 0 && neighbor === 3)
            copy[9][9] = 1;
        else if (grid[9][9] === 1)
            copy[9][9] = 0;
        else
            copy[9][9] = 0;

        neighbor = 0;
        if (grid[8][0] === 1)
            neighbor++;
        if (grid[9][1] === 1)
            neighbor++;
        if (grid[8][1] === 1)
            neighbor++;
        if ((neighbor === 2 || neighbor === 3) && (grid[9][0] === 1))
            copy[9][0] = 1;
        else if (grid[9][0] === 0 && neighbor === 3)
            copy[9][0] = 1;
        else if (grid[9][0] === 1)
            copy[9][0] = 0;
        else
            copy[9][0] = 0;

        neighbor = 0;
        if (grid[0][8] === 1)
            neighbor++;
        if (grid[1][9] === 1)
            neighbor++;
        if (grid[1][8] === 1)
            neighbor++;
        if ((neighbor === 2 || neighbor === 3) && (grid[0][9] === 1))
            copy[0][9] = 1;
        else if (grid[0][9] === 0 && neighbor === 3)
            copy[0][9] = 1;
        else if (grid[0][9] === 1)
            copy[0][9] = 0;
        else
            copy[0][9] = 0;

        setGrid(copy);
    }

    const [grid, setGrid] = useState(generateGrid());
    return (
        <>
            <div>
                <button  onClick={() => tick(grid)}>
                    Simulate
                </button>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
            <div className="grid">
                {grid.map((row, i) => (
                    <div className="row" key={i}>
                        {row.map((col, j) => (
                            <Cell value={grid[i][j]} clickHandler={() => toggleValue(i, j)} key={j}>{col}</Cell>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}
export default App;
