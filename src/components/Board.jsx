import { useState } from "react";
import Square from "./Square";

const Board = () =>{

    const [sqaures,setSquares] = useState(Array(9).fill(null))

    const handleSquareClick = clickedPosition =>{
        setSquares(currentSquares =>{
            return currentSquares.map((squareValue,position) => {
                if(clickedPosition==position){
                    return 'X';
                }

                return squareValue;
            });
        });
    };

    const renderSquares = position => {
        return(
            <Square 
                value={sqaures[position]}
                onClick={()=>handleSquareClick(position)}
            />
        );
    };

    return(
        <>
            <div className="board">
                <div className="board-row">
                    {renderSquares(0)}
                    {renderSquares(1)}
                    {renderSquares(2)}
                </div>
                <div className="board-row">
                    {renderSquares(3)}
                    {renderSquares(4)}
                    {renderSquares(5)}
                </div>
                <div className="board-row">
                    {renderSquares(6)}
                    {renderSquares(7)}
                    {renderSquares(8)}
                </div>
            </div>
        </>
    );
};

export default Board;