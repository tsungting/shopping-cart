import React from 'react';
import {QuantityPicker} from './QuantityPicker';
import {getProductSelectedAction} from '../actions/ProductActions';
import {connect} from 'react-redux';

const style = { "minHeight" :"30vh"};

function ProductCard({product, handleQuantityUpdated}) {
    
    return (
        <div className="col col-3 flex flex-column m2 border" style={style}>
            <div className="h4" >
                <span>{product.label}</span>
            </div>
            <div className="flex-auto p2">
                <span>{product.description}</span>
            </div>
            <div className="p2">
                <span>Cost : ${product.cost}</span>
                <QuantityPicker handleQuantityUpdated={handleQuantityUpdated(product.id)}/>
            </div>
        </div>
    );
}

const mapDispatchToProp = (dispatch) => {
    return {
        handleQuantityUpdated: (productId) => (quantity) => dispatch(getProductSelectedAction(productId, quantity))
    }
}

export default connect(null, mapDispatchToProp)(ProductCard);

