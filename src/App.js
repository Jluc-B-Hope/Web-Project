import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build an app', completed: false },
  ]);
  const [filter, setFilter] = useState('all'); // Для фильтрации задач
  const [editTaskId, setEditTaskId] = useState(null); // ID задачи для редактирования
  const [newText, setNewText] = useState(''); // Новый текст для редактирования

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: text, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id) => {
    setEditTaskId(id);
    const taskToEdit = tasks.find((task) => task.id === id);
    setNewText(taskToEdit.text);
  };

  const handleSaveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, text: newText } : task
      )
    );
    setEditTaskId(null);
    setNewText('');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // Если фильтр 'all', то показываем все задачи
  });

  return (
    <div className="container">
      <h1>Welcome to My To-Do App</h1>
      
      {/* Фильтры */}
      <div className="filters">
        <button onClick={() => setFilter('all')} className="btn">All</button>
        <button onClick={() => setFilter('active')} className="btn">Active</button>
        <button onClick={() => setFilter('completed')} className="btn">Completed</button>
      </div>

      {/* Добавление задачи */}
      <div className="card">
        <h2>Add a Task</h2>
        <button className="btn" onClick={() => addTask('New Task')}>
          Add New Task
        </button>
      </div>
      
      {/* Редактирование задачи */}
      {editTaskId && (
        <div className="card">
          <h2>Edit Task</h2>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Enter new task name"
          />
          <button className="btn" onClick={handleSaveEdit}>
            Save
          </button>
        </div>
      )}

      {/* Список задач */}
      <div className="card">
        <h2>Your Tasks</h2>
        {filteredTasks.length > 0 ? (
          <ul>
            {filteredTasks.map((task) => (
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
                <button
                  className="btn"
                  onClick={() => handleEditTask(task.id)}
                >
                  Edit
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
