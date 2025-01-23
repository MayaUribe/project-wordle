import React from 'react';

function GuessInput({ handleSaveGuess }) {
  const [guess, setGuess] = React.useState('');

  function formatGuess(guess) {
    return guess.toUpperCase();
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleSaveGuess(guess);
    setGuess('');
    console.info({ guess });
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        onChange={(event) => setGuess(formatGuess(event.target.value))}
      />
    </form>
  );
}

export default GuessInput;
