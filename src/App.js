import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState(''); // Имя для новой задачи
  const [newTaskName, setNewTaskName] = useState(''); // Для ввода имени нового списка
  const [filter, setFilter] = useState('all'); // Для фильтрации задач
  const [editTaskId, setEditTaskId] = useState(null); // ID редактируемой задачи
  const [newText, setNewText] = useState(''); // Новый текст для редактирования задачи
  const [error, setError] = useState(''); // Для ошибки при пустом поле

  const addTask = () => {
    if (newTaskName.trim() === '') {
      setError('Имя задачи не может быть пустым');
      return;
    }
    setError('');
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTaskName, completed: false },
    ]);
    setNewTaskName('');
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
      <h1>Добро пожаловать в мой To-Do список</h1>
      
      {/* Фильтры */}
      <div className="filters">
        <button onClick={() => setFilter('all')} className="btn">Все</button>
        <button onClick={() => setFilter('active')} className="btn">Активные</button>
        <button onClick={() => setFilter('completed')} className="btn">Выполненные</button>
      </div>

      {/* Добавление нового списка */}
      <div className="card">
        <h2>Добавить новый список</h2>
        <input
          type="text"
          placeholder="Введите название задачи"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="input"
        />
        {error && <p className="error">{error}</p>}
        <button className="btn" onClick={addTask}>Добавить задачу</button>
      </div>

      {/* Редактирование задачи */}
      {editTaskId && (
        <div className="card">
          <h2>Редактировать задачу</h2>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Введите новое название задачи"
            className="input"
          />
          <button className="btn" onClick={handleSaveEdit}>
            Сохранить
          </button>
        </div>
      )}

      {/* Список задач */}
      <div className="card">
        <h2>Ваши задачи</h2>
        {filteredTasks.length > 0 ? (
          <ul>
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`task ${task.completed ? 'completed' : 'active'}`}
              >
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
                  Удалить
                </button>
                <button
                  className="btn"
                  onClick={() => handleEditTask(task.id)}
                >
                  Редактировать
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Нет задач!</p>
        )}
      </div>
    </div>
  );
};

export default App;
