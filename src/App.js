import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'basscss/css/basscss.css';
import 'basscss-colors/css/colors.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ViewCartPage from './pages/cart/ViewCartPage';
import ProductPage from './pages/product/ProductPage';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {cartItems : state.cart.cartItems};
}

class App extends Component {
  render() {
    return (
      
        <Router >
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to='/product'>
              <span className='col white'>Product</span>
              </Link>
              <Link className='col-right white' to='/cart'>
              <span>View Cart ({this.props.cartItems.length})</span>
              </Link>
            </div>
              <Route path="/cart" component={ViewCartPage}/>
              <Route path="/product" component={ProductPage}/>
          </div>
        </Router>
      
    );
  }
}

export default connect(mapStateToProps)(App);