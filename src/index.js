import React from 'react';
import ReactDOM from 'react-dom';
import router from './router/router.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
