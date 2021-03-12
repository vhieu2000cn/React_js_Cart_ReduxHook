import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from "prop-types";
import * as actions from "../actions/index";


ProductsContainer.propTypes = {
    products: PropTypes.array.isRequired,
};

function ProductsContainer(props) {
    let { products, onAddCart, onChangeMessage } = props;
    function showProduct(Products) {
        let result = null;
        result = Products.map((Prod, index) => {
            return (
                <Product
                    key={index}
                    Product={Prod}
                    onAddCart={onAddCart}
                    onChangeMessage={onChangeMessage}
                />
            );
        });
        return result;
    }
    return <Products>{showProduct(products)}</Products>;
}

const mapStateToProps = (state) => {
    return {
        products: state.Products,
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        onAddCart: (products) => {
            dispatch(actions.addCart(products));
        },
        onChangeMessage: (message) => {
            dispatch(actions.onChangeMessage(message));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToprops)(ProductsContainer);
