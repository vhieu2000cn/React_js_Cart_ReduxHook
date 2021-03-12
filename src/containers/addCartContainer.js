import { connect,useSelector,useDispatch  } from "react-redux";
import React from "react";
import Cart from "../components/Cart";
import * as Message from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as actions from "../actions/index";

const AddCartContainer = (props) => {
    // ví dụ về redux-hooks với  useSelector và useDispatch
    const Carts = useSelector(state => state.addCart)
    const dispatch =useDispatch();
    const onDeleteCartS = id=> dispatch(actions.onDeleteCarts(id));
    let {
        onChangeMessage,
        onPlusCartItem,
        onMinusCartItem,
    } = props;
    const showCart = (carts) => {
        let result = (
            <tr>
                <td>{Message.MSG_CART_EMPTY}</td>
            </tr>
        );
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return (
                    <CartItem
                        key={index}
                        cart={cart}
                        onDeleteCartS={onDeleteCartS}
                        onChangeMessage={onChangeMessage}
                        onPlusCartItem={onPlusCartItem}
                        onMinusCartItem={onMinusCartItem}
                    />
                );
            });
        }
        return result;
    };
    const showTotal = () => {
        return <CartResult cart={Carts} />;
    };

    return (
        <Cart>
            {showCart(Carts)}
            {showTotal(Carts)}
        </Cart>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         cart: state.addCart,
//     };
// };


const mapDispatchToprops = (dispatch) => {
    return {
        // onDeleteCartS: (id) => {
        //     dispatch(actions.onDeleteCarts(id));
        // },
        onChangeMessage: (message) => {
            dispatch(actions.onChangeMessage(message));
        },
        onPlusCartItem: (id) => {
            dispatch(actions.onPlusCartItem(id));
        },
        onMinusCartItem: (id) => {
            dispatch(actions.onMinusCartItem(id));
        },
    };
};

export default connect(null, mapDispatchToprops)(AddCartContainer);
