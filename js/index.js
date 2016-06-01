import React from 'react';
import App from './App';
require('../less/main.less');

const rootElement = document.getElementById('app');

React.render(<App/>, rootElement);