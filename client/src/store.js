import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
    productDeleteReducer,
    productDetailsReducer, productListReducer,
    productReviewSaveReducer,
    productSaveReducer
    
} from './reducers/productReducers'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { userRegisterReducer, userSigninReducer, userUpdateReducer, userDetailsReducer, userDeleteReducer, userListReducer } from './reducers/userReducers';
import { myOrderListReducer, orderCreateReducer, orderDeleteReducer, orderDetailsReducer, orderListReducer, orderPayReducer, orderDeliverReducer } from './reducers/orderReducers';

const shippingAddress = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const cartItem = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItem, shippingAddress, paymentMethod: 'paypal' },
  userSignin: { userInfo },
};
const reducer = combineReducers({
    productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userList: userListReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  productReviewSave: productReviewSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userUpdate: userUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;