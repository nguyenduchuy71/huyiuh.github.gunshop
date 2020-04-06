import * as Types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_PRODUCT:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1;
            }
            else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT:
            index=findProductInCart(state,product);
            state.splice(state[index],1);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT:
            index=findProductInCart(state,product);
            if(index!==-1){
                state[index].quantity=quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}
var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i <cart.length ; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
            }
        }
    }
    return index;
}
export default cart;