import React, { Component } from 'react';
import CartItem from './../../components/CartItem/CartItem';
import CartList from './../../components/CartList/CartList';
import CartResult from './../../components/CartResult/CartResult';
import { connect } from 'react-redux';
import { actDeleteProduct,actUpdateProductInCart} from './../../actions/index';
class CartListPage extends Component {
    render() {
        var { cart } = this.props;
        return (
            <CartList>
                {this.showCart(cart)}
                {this.showTotalAmount(cart)}
            </CartList>
        );
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
    showCart = (cart) => {
        var result = null;
        var {onDelete,onUpdateProductInCart}=this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    index={index}
                    onDelete={onDelete}
                    onUpdateProductInCart={onUpdateProductInCart}
                />
            });
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps=(dispatch,action)=>{
    return{
        onDelete:(product)=>{
            dispatch(actDeleteProduct(product));
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartListPage);