export const getProductSelectedAction = (product, quantity) => {
    return {
        type: 'PRODUCT_SELECTED',
        payload: {
            product,
            quantity
        }
    }
}