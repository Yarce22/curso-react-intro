import React from 'react';
import TodoCounter from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoLoading } from './TodoLoading';
import { TodosError } from './TodosError';
import { EmptyTodos } from './EmptyTodos';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContext } from './TodoConext';

function AppUI () {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
  
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => {
          <TodoList>
          {loading && (
            <>
              <TodoLoading />
              <TodoLoading />
              <TodoLoading />
            </>
          )}
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        }}
      </TodoContext.Consumer>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}
export {AppUI};