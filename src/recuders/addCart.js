import * as types from "../constants/actionType";


let data = JSON.parse(localStorage.getItem("Cart"));
var initialState = data ? data : [];

const Products = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CART:
            let index1 = state.findIndex(
                (Pr) => Pr.Product.id === action.product.id
            );
            if (index1 === -1) {
                state.push({
                    Product: action.product,
                    quantity: 1,
                });
            } else {
                state[index1].quantity += 1;
            }
            localStorage.setItem("Cart", JSON.stringify(state));
            return [...state];
        case types.DELETE_CARTS:
            let index2 = state.findIndex((Pr) => Pr.Product.id === action.id);
            state.splice(index2, 1);
            localStorage.setItem("Cart", JSON.stringify(state));
            return [...state];
        case types.PLUS_CART_ITEM:
            let index3 = state.findIndex((Pr) => Pr.Product.id === action.id);
            state[index3].quantity += 1;
            localStorage.setItem("Cart", JSON.stringify(state));
            return [...state];
        case types.MINUS_CART_ITEM:
            let index4 = state.findIndex((Pr) => Pr.Product.id === action.id);
            if (state[index4].quantity === 1) {
                state.splice(index4);
            } else state[index4].quantity -= 1;
            localStorage.setItem("Cart", JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
};

export default Products;
