import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from './TodoConext';

function TodoSearch() {
  const {
    state,
    setState,
  } = React.useContext(TodoContext);
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
