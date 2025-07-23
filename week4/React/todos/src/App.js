import React, { useState } from 'react';
import Header from './components/Header.';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import './style.css';

function App() {
  const [todos, setTodos] = useState([
    
  ]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="Todo-Container">
      <Header />
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} onDelete={() => deleteTodo(index)} />
      ))}
      <Button onAdd={addTodo} />
    </div>
  );
}

export default App;
