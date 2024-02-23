import TodoCounter from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import './App.css';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Task1', completed: true},
  {text: 'Task2', completed: false},
  {text: 'Task3', completed: false},
  {text: 'Task4', completed: false},
  {text: 'Task5', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter
        completed={16}
        total={25}
      />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
