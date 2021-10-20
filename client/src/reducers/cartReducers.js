import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING, CART_EMPTY } from "../constants/cartConstants";

function cartReducer(state = { cartItem: [],shipping: {}, payment: {} }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItem.find(x => x.product === item.product);
            if (product) {
                return { cartItem: state.cartItem.map(x => x.product === product.product ? item : x) };
            }
            return { cartItem: [...state.cartItem, item] };
        case CART_REMOVE_ITEM:
            return { cartItem: state.cartItem.filter(x => x.product !== action.payload) };
        case CART_SAVE_SHIPPING:
            return { ...state, shipping: action.payload };
        case CART_SAVE_PAYMENT:
            return { ...state, payment: action.payload };
        case CART_EMPTY:
             return { ...state, cartItem: [] }; 
        default:
            return state
    }
}
export { cartReducer }