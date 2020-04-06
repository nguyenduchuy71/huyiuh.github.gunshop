import React, { Component } from 'react';
class CartItem extends Component {
    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            <tr>
            <th scope="row">
                <img className="img-fluid z-depth-0" src={item.product.image} alt={item.product.name} />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{quantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    onClick={()=>this.onUpdateProduct(item.product,item.quantity-1)}
                    >
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    onClick={()=>this.onUpdateProduct(item.product,item.quantity+1)}
                    >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
            <td>
                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light"
                    data-toggle="tooltip" data-placement="top"
                    data-original-title="Remove item"
                    onClick={()=>this.onDelete(item.product)}
                    >X
            </button>
            </td>
        </tr>
        );
    }
    onUpdateProduct=(product,quantity)=>{
        if(quantity>0){
            this.props.onUpdateProductInCart(product,quantity);
        }
    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
    onDelete=(product)=>{
        this.props.onDelete(product);
    }
}
export default CartItem;
