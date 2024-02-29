import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../hooks/useLocalStorage';

function App() {
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
    <AppUI
    loading = {loading}
    error = {error}
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    state = {state}
    setState = {setState}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;
