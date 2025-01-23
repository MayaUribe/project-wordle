import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const guessStatus = value ? checkGuess(value, answer) : null;

  return (
    <p className="guess">
      {range(5).map((num) => {
        const letter = value ? value[num] : undefined;
        const status = guessStatus ? guessStatus[num].status : undefined;

        return <Cell key={num} letter={letter} status={status} />;
      })}
    </p>
  );
}

export default Guess;
