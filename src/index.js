import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './Components/Redux/reducers';
const getItems = () => {
  try {
    const user = localStorage.getItem("todo", 'isCompleted');
    if (user === null) return { todos: [] };
    return { todos: [...JSON.parse(user)] }
  }
  catch {
    return { todos: [] }
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(todoReducer, getItems());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
