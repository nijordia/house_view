import React from 'react';
import { createRoot } from 'react-dom/client';
import HousingMap from './housingMap';
import '../public/styles.css';

const root = createRoot(document.getElementById('root')!);
root.render(<HousingMap />);