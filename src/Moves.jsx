import React from 'react';

export default function Moves({ history, jumpTo }) {
  const moves = history.map((_, move) => {
    const description = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return <ol>{moves}</ol>;
}