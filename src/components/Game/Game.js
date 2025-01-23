import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSaveGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert('You have reached the maximum number of guesses 🥲');
      return;
    }

    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSaveGuess={handleSaveGuess} />
    </>
  );
}

export default Game;
