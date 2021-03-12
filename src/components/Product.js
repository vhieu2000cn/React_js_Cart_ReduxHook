import React from "react";
import * as message from '../constants/Message'

function Product(props) {
    let { Product,onAddCart,onChangeMessage } = props;
    const showRatting = (Ratting) => {
        let result = [];
        for (let i = 1; i <= Ratting; i++) {
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for (var i = 1; i <= 5 - Ratting; i++) {
            result.push(<i key={i + 5} className="fa fa-star-o"></i>);
        }
        return result;
    };
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img
                        src={Product.image}
                        className="img-fluid"
                        alt={Product.description}
                    />
                    <a href="/#">
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a href="/#">{Product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>{showRatting(Product.ratting)}</li>
                    </ul>
                    <p className="card-text">{Product.description}</p>
                    <div className="card-footer">
                        <span className="left">{Product.price}</span>
                        <span className="right">
                            <div
                                className="btn-floating blue-gradient"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add to Cart"
                                onClick={()=>{onAddCart(Product);onChangeMessage(message.MSG_ADD_TO_CART_SUCCESS)}}
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
