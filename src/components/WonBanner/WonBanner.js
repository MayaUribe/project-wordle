import React from 'react';

import Banner from '../Banner/Banner';

function WonBanner({ totalGuesses }) {
  return (
    <Banner status="happy">
      <p>
        Congratulations! You got it in{' '}
        <strong>
          {totalGuesses === 1 ? '1 guess' : `${totalGuesses} guesses`}.
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
