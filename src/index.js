import React from 'react';
import ReactDOM from 'react-dom/client';  // Импортируем createRoot из react-dom/client
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css'; // Убедитесь, что путь к файлу правильный

// Создаем корень и рендерим приложение
const root = ReactDOM.createRoot(document.getElementById('root'));  // Создаем корень
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
