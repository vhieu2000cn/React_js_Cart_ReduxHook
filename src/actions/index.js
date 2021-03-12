import * as types from '../constants/actionType';

export const addCart=(product,quantity)=>{
    return{
        type:types.ADD_CART,
        product,
        quantity
    }
};

export const onChangeMessage=(message)=>{
    return{
        type:types.CHANGE_MESSAGE,
        message,
    }
};

export const onDeleteCarts=(id)=>{
    return{
        type:types.DELETE_CARTS,
        id,
    }
};

export const onPlusCartItem=(id)=>{
    return{
        type:types.PLUS_CART_ITEM,
        id,
    }
};

export const onMinusCartItem=(id)=>{
    return{
        type:types.MINUS_CART_ITEM,
        id,
    }
};