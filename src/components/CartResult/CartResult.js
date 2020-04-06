import React, { Component } from 'react';
class CartResult extends Component {
  render() {
      var {cart}=this.props
    return (
        <tr>
             <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Total</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
         </tr>
      );
  }
  showTotalAmount = (cart) => {
    var total = 0;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].product.price * cart[i].quantity;
        }
    }
    return total;
}
}
export default CartResult;
