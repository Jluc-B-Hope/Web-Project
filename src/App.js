import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build an app', completed: false },
  ]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: text, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Welcome to My To-Do App</h1>
      
      <div className="card">
        <h2>Add a Task</h2>
        <button className="btn" onClick={() => addTask('New Task')}>
          Add New Task
        </button>
      </div>
      
      <div className="card">
        <h2>Your Tasks</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.text}
                </span>
                <button
                  className="btn"
                  onClick={() => removeTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks available!</p>
        )}
      </div>
    </div>
  );
};

export default App;
