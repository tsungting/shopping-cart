import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'basscss/css/basscss.css';
import 'basscss-colors/css/colors.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ViewCartPage from './pages/ViewCartPage';
import ProductPage from './pages/product/ProductPage';
import cartReducer from './store/cart';
import productsReducer from './store/products';

const reducers = combineReducers({
  cart: cartReducer,
  product: productsReducer
});

class App extends Component {


  render() {
    return (
      <Provider store={createStore(reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
        <Router >
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to='/product'>
              <span className='col white'>Product</span>
              </Link>
              <Link className='col-right white' to='/cart'>
              <span>View Cart</span>
              </Link>
            </div>
              <Route path="/cart" component={ViewCartPage}/>
              <Route path="/product" component={ProductPage}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
