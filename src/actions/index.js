import * as types from './../constants/ActionType';
import callApi from './../utils/apiCall';
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    }
}
export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}
export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_PRODUCT,
        product,
        quantity
    }
}
export const actDeleteProduct=(product)=>{
    return{
        type:types.DELETE_PRODUCT,
        product
    }
}
export const actUpdateProductInCart = (product, quantity) => {
    return {
        type : types.UPDATE_PRODUCT,
        product,
        quantity
    }
}