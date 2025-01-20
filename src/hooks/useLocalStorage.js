import { useState } from 'react';

// Хук для работы с localStorage
function useLocalStorage(key, initialValue) {
  // Получаем данные из localStorage или используем начальное значение
  const storedValue = localStorage.getItem(key);
  
  // Если данные в localStorage существуют, используем их, иначе используем начальное значение
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  
  const [value, setValue] = useState(initial);

  // Каждый раз, когда value меняется, сохраняем его в localStorage
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
