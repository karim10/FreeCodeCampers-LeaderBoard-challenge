import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Board from './List';

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
