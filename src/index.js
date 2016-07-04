import React from 'react';
import ReactDOM from 'react-dom';

// Elements
import Header from './components/header';
import Navigation from './components/navigation';

// Mount point for the app
const mountPoint = document.getElementById('App');

// Render app in container
ReactDOM.render(<Header><Navigation /></Header>, mountPoint);
