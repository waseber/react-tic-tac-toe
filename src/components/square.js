import React from 'react';

const Square = ({isX, onClick}) => {
    let output = "";
    return(
        <div className="square" onClick={onClick}>
            <span style={{
                color: isX === "X" ? "red" : "black"
            }}>{isX}</span>
        </div>
    )
}

export default Square;