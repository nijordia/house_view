import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/styles.css'; // Changed from index.css to styles.css

const root = createRoot(document.getElementById('root')!);
root.render(<App />);