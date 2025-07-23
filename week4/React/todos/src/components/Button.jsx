import React, { useState } from 'react';

function Button({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <div className="add-container">
      <input
        type="text"
        placeholder="Add todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="add-input"
      />
      <button onClick={handleAdd} className="add-btn">Add</button>
    </div>
  );
}

export default Button;