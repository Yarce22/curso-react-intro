import React from 'react';
import TodoCounter from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Agregar tareas', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [state, setState] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log([todos]);

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(state.toLowerCase());
  })

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
        {searchedTodos.map((todo) => (
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
