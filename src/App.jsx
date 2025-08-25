import './App.css';

import Game from "./components/Game";
import StartScreen from './components/StartScreen';
import { useState } from 'react';

function App() {

    const [gameStarted, setGameStarted] = useState(false);
    const [difficulty, setDifficulty] = useState(null);


    return (
        <div className="App">
            {gameStarted ? (
                <Game onRestart={() => setGameStarted(false)} difficulty={difficulty}/>
            ) : (
                <StartScreen onStart={(chosenDifficulty) => {
                    setDifficulty(chosenDifficulty);
                    setGameStarted(true);
                }}/>)}
        </div>
    );
}

export default App;