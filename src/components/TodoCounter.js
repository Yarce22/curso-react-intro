import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from './TodoConext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    totalTodos === 0 ? 
      <h1 className="TodoCounter">
        <span>No tienes tareas pendientes por completar ¡Felicitaciones!</span>
      </h1>
      :
      <h1 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
  );
}

export default TodoCounter;
