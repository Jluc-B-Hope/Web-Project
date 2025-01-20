import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
