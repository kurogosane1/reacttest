import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneInput from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PhoneInput />, document.getElementById('container'));
registerServiceWorker();
