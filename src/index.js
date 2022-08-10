import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Define DOM element/container
const container = document.getElementById('root');

//Create a root entry to the container
const root = ReactDOM.createRoot(container);

// Render an element (e.g. <App />) to the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
