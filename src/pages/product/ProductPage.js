import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard';

const mapStateToProps = (state) => {
  return state.product;
}

class ProductPage extends Component {
  renderProducts(){
    return this.props.products.map((product)=>{
      return <ProductCard key={product.id} product={product} />;
    });
  }

  render() {
    return (
      <div>
        <div>Product Page</div>
        {this.renderProducts()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductPage);
