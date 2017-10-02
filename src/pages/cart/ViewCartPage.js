import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    console.log('mapping state to props', state);
    return {cartItems: state.cart.cartItems};
}

const getCartItem = (item) => {
  return (
    <div className="border m4" key={item.product.id}>
      <div>{item.product.label}</div>
      <div>{item.product.description}</div>
      <div>Quantity: {item.quantity}</div>
    </div>
  );
}

const ViewCartPage = ({cartItems}) => {
    return (
      <div>{cartItems.map((item) => {
        return getCartItem(item);
      })}</div>
    );
}

ViewCartPage.prototype = {
  cartItems : PropTypes.array
}

export default connect(
  mapStateToProps
)(ViewCartPage);
