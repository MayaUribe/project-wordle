import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED, Status } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(Status.RUNNING);

  function handleSaveGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(Status.LOST);
    } else if (guess === answer) {
      setGameStatus(Status.WON);
    }
  }

  return (
    <>
      {gameStatus === Status.WON && <WonBanner totalGuesses={guesses.length} />}
      {gameStatus === Status.LOST && <LostBanner answer={answer} />}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSaveGuess={handleSaveGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
