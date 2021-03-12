import React from "react";
import * as message from "../constants/Message";

function CartItem(props) {
    let { cart, onDeleteCartS, onChangeMessage,onPlusCartItem,onMinusCartItem } = props;
    return (
        <tr>
            <th scope="row">
                <img
                    src={cart.Product.image}
                    alt={cart.Product.name}
                    className="img-fluid z-depth-0"
                />
            </th>
            <td>
                <h5>
                    <strong>{cart.Product.name}</strong>
                </h5>
            </td>
            <td>{cart.Product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{cart.quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                        onClick={()=>{onMinusCartItem(cart.Product.id);onChangeMessage(message.MSG_UPDATE_CART_SUCCESS)}}
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    >
                        <a href="/#"  >—</a>
                    </label>
                    <label
                        onClick={()=>{onPlusCartItem(cart.Product.id);onChangeMessage(message.MSG_UPDATE_CART_SUCCESS)}}
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    >
                        <a href="/#"  >+</a>
                    </label>
                </div>
            </td>
            <td>{cart.Product.price * cart.quantity}$</td>
            <td>
                <button
                    type="button"
                    className="btn btn-sm btn-primary waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Remove item"
                    onClick={() => {
                        onDeleteCartS(cart.Product.id);
                        onChangeMessage(
                            message.MSG_DELETE_PROFUCT_IN_CART_SUCCESS
                        );
                    }}
                >
                    X
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
