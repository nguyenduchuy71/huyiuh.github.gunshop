import React, { Component } from 'react';
class ProductItem extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <a>
                    <div className="product-img">
                        <img src={product.image} />
                    </div>
                </a>
                <div className="card-footer">
                    <div className="item">
                        <div className="price">{product.price}$</div>
                    </div>
                    <span className="right">
                        <a className="btn-floating blue-gradient"
                            onClick={() => this.onAddToCart(product)}
                        >
                            <i className="fa">Buy</i>
                        </a>
                    </span>
                </div>
            </div>
        );
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        alert('Product has add successful!')
    }
}
export default ProductItem;
