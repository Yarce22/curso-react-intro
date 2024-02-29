import React from "react";

const defaultTodos = [
  {text: 'Agregar tareas', completed: false},
]

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem = JSON.parse(localStorageItem) || defaultTodos;
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
