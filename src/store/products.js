import getMockProduct from '../mock/MockProduct';

const defaultState = {
    products: [
        getMockProduct('Glue', 30),
        getMockProduct('Pencil', 3),
        getMockProduct('Ruler', 10),
        getMockProduct('Eraser', 25),
    ]
};


export default function productReducer(state = defaultState, action){
    return state;
}