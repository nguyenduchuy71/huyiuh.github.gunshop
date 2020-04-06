import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actFetchProductsRequest,actAddToCart } from '../../actions/index';
class ProductListPage extends Component {
    
    componentDidMount() {
        this.props.fetchAllProducts();
    }
    render() {
        var { products } = this.props;
        return (
            <ProductList>
                {this.showProduct(products)}
            </ProductList>
        );
    }
    showProduct = (products) => {
        var result = null;
        var {onAddToCart}=this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onAddToCart={onAddToCart}
                    />
                );
            })
        }
        return result;
    }
}
ProductListPage.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onAddToCart:(product)=>{
            dispatch(actAddToCart(product,1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);