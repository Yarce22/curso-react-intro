import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({
  state,
  setState,
}) {
  return (
    <input
      placeholder="Search"
      className="TodoSearch"
      value={state}
      onChange={(event) => {
        setState(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
