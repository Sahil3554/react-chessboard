import React from 'react'
import './Board.css'
import BoardBlock from '../BoardBlock'
const Board = () => {
    const boardSize = 8;
    return (
        <div className='board'>
            {Array(boardSize).fill(0).map((_, rowIndex) =>
                <div className="row">
                    {Array(boardSize).fill(0).map((_, colIndex) => <BoardBlock backgroundColor={(rowIndex + colIndex) % 2 == 0 ? 'white' : 'black'} />
                    )}
                </div>
            )}


        </div>
    )
}

export default Board
