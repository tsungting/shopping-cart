import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    console.log('mapping state to props', state);
    return {cartItems: state.cart.cartItems};
}

const ViewCartPage = ({cartItems}) => {
    return (
      <div>{cartItems.map((item) => {
        return <span key={item.product.id}>{item.product.label}</span>;
        })}</div>
    );
}

ViewCartPage.prototype = {
  cartItems : PropTypes.array
}

export default connect(
  mapStateToProps
)(ViewCartPage);
