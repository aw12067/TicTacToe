import './styles.scss'
import { useState } from 'react'
import Board from './components/Board'
import { calculateWinner } from './winner'
import StatusMessage from './components/StatusMessage'
import History from './components/History'

function App() {
  const[history,setHistory] = useState([{squares:Array(9).fill(null),isXNext:false}])
  const[currentMove,setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);

  console.log({history,currentMove});
  
    const handleSquareClick = clickedPosition =>{
      if(gamingBoard.squares[clickedPosition] || winner){
        return;
      }
        setHistory(currentHistory =>{
          const isTraversing = currentMove+1 !== currentHistory.length;

          const lastGamingState = isTraversing? currentHistory[currentMove]: currentHistory[currentHistory.length-1];

            const nextSqaureState =  lastGamingState.squares.map((squareValue,position) => {
                if(clickedPosition==position){
                    return lastGamingState.isXNext ? 'X':'O';
                }

                return squareValue;
            });

            const base = isTraversing?currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1):currentHistory;
            return base.concat({squares:nextSqaureState,isXNext:!lastGamingState.isXNext})
        });
        
        setCurrentMove(move => move+1);
    }; 
    
    const moveTo =(move) => {
      setCurrentMove(move);
    }

    const onNewGameStart = () =>{
       setHistory([{squares:Array(9).fill(null),isXNext:false}]);
       setCurrentMove(0);
    }

  return (
    <div className='app'>  
    <h1>
      <span className='text-green'>TIC</span> <span className='text-orange'>TAC</span> <span className='text-green'>TOE</span>
    </h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick}/>
      <button type='button' onClick={onNewGameStart} className={
        `btn-reset ${winner ? 'active':''}`
      }>
        Start new game
      </button>
      <h2>Current game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove }/>
      <div className='bg-balls'/>
    </div>
  );
}

export default App