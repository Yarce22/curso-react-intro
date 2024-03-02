import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider ({ children }) {
  const {item: todos, saveItems: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [state, setState] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(state.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      state,
      setState,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }