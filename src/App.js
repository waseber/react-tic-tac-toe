import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link} from 'react-router-dom'; 
import Square from './components/square';
import './App.css';

function App() {

  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [player, setPlayer] = useState("X");
  const handleClick = (i) => {
    const newBoard = [...boardState];
    newBoard[i] = player;
    winner(newBoard);
    setBoardState(newBoard);
    setIsXturn(!isXturn);

    console.log(newBoard)
    
  }

  useEffect(()=>{
    console.log('hi')
    if(isXturn){
      setPlayer("X");
    } else{
      setPlayer("O");
    } 
  });

  const winner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log("Winner", board[a])
        return board[a];
      }
    }
    return null;
  }


  return (
    <div className="App">
      <h1>It is {player}'s turn</h1>
      <div id="board-outline">
        {
          boardState.map(
            (v,i) => <Square isX={v} key={i} onClick={() => handleClick(i)}/>
          )
        }
        
      </div>
    </div>
  );
}

export default App;
