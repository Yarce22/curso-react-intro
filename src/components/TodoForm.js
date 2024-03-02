import React from 'react'
import '../styles/TodoForm.css'
import { TodoContext } from './TodoConext';

function TodoForm () {
  const {setOpenModal, addTodo} = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = () => {
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form >
      <label>
        Escribre tu nuevo TODOS
      </label>
      <textarea 
      placeholder='Escribe aqui tu nueva tarea'
      value={newTodoValue}
      onChange={onChange}
      required
      />
      <div className='TodoFrom-buttonContainer'>
        <button className='TodoForm-button TodoForm-button--cancel' type='button' onClick={onCancel}>Cancelar</button>
        <button className='TodoForm-button TodoForm-button--add' onClick={onSubmit}>Agregar</button>
      </div>
    </form>
  );
}

export { TodoForm };
