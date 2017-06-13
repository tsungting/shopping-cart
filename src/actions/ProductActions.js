export const getProductSelectedAction = (productId, quantity) => {
    return {
        type: 'PRODUCT_SELECTED',
        payload: {
            productId,
            quantity
        }
    }
}