import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
