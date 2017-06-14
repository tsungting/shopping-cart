import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import cartReducer from './store/cart';
import productsReducer from './store/products';

const reducers = combineReducers({
  cart: cartReducer,
  product: productsReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));
registerServiceWorker();
