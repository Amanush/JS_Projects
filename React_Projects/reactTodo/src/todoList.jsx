import React, { useState } from 'react';
import TodoItem from './todoItem';

const TodoList = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [newItem, setNewItem] = useState('');
  
    const addItem = () => {
      if (newItem.trim() !== '') {
        setTodoItems([...todoItems, newItem]);
        setNewItem('');
      }
    };
  
    const removeItem = (index) => {
      const newTodos = [...todoItems];
      newTodos.splice(index, 1);
      setTodoItems(newTodos);
    };
  
    return (
      <div className="container mt-4">
        <h1 className="mb-4">Todo List</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a to Do Item"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={addItem}>
              Add
            </button>
          </div>
        </div>
        <ul className="list-group">
          {todoItems.map((task, index) => (
            <TodoItem index={index} task={task} onClick={removeItem}/>
          
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;