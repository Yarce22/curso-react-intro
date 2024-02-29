import React from 'react';
import TodoCounter from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function AppUI ({
  loading,
  error,
  completedTodos,
  totalTodos,
  state,
  setState,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch 
        state={state}
        setState={setState}
      />
  
      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>No pudimos cargar los TODOs</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea un TODO</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={deleteTodo}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export {AppUI};