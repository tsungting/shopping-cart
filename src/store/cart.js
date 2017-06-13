const defaultState = {
    cartItems: []
}

function getNewCart(existingItems, newItem, quantity){
    var newCart = existingItems.slice();
    var existingProduct = newCart.find(item => item.product.id === newItem.id);
    if (existingProduct){
        existingProduct.quantity += quantity;
        return newCart;
    }
    return newCart.concat([{product: newItem, quantity: quantity}]);
}

export default function cartReducer(state = defaultState, action){
    switch(action.type){
        case 'PRODUCT_SELECTED':
            return Object.assign({}, {cartItems: getNewCart(state.cartItems, action.payload.product, action.payload.quantity)})
        default:
            return state;
    }
}