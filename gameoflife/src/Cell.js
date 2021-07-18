import React from "react";
import "./Cell.css";

const Cell = ({value, clickHandler}) => {
    const classes = `cell ${value === 1 ? "black" : "white"}`
    return (
        <div onClick={clickHandler} className={classes}>
        </div>
    );
}

export default Cell;