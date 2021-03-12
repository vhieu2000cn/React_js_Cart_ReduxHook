import * as types from "../constants/actionType";
import * as message from "../constants/Message";

var initialState = message.MSG_WELCOME;

const changeMessage = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            if (action.message === message.MSG_ADD_TO_CART_SUCCESS) {
                return message.MSG_ADD_TO_CART_SUCCESS;
            } else if (
                action.message === message.MSG_DELETE_PROFUCT_IN_CART_SUCCESS
            ) {
                return message.MSG_DELETE_PROFUCT_IN_CART_SUCCESS;
            } else if (action.message === message.MSG_UPDATE_CART_SUCCESS) {
                return message.MSG_UPDATE_CART_SUCCESS;
            }
            return state;
        default:
            return [...state];
    }
};

export default changeMessage;
