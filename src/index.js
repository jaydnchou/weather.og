import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';


ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';

// import App from './App';
// import reducers from './reducers';

// import registerServiceWorker from './registerServiceWorker';

// import './index.css';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>, document.getElementById('app'));
// registerServiceWorker();
