import React from "react";

export default function CartResult(props) {
    let {cart}=props;
    const totalCoin=(cart)=>{
        let result = cart.map((cart,index)=>{
            return cart.Product.price*cart.quantity
        })
        let Total =0;
        for(let i =0;i<=(cart.length-1);i++){
             Total += result[i]
        }
        return Total;
    }

    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{totalCoin(cart)}$</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                >
                    Complete purchase
                    <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
    );
}
