import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import './header.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';
import Countdown from './Timer'

function Navigation() {
  const cart = useSelector(state => state.cart);
  const { cartItem } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const history = useHistory();
  const signoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  };
  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
  return (
    <div className="nav">

      <div className="container">
        <div className="thead">
          <div className="tit"><Link to="/">
          <img src='data:image/jpeg;base64,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' height={43} width={40} alt='' />  Shoe-Point
            </Link>

           </div>
           
         <div>
         <Countdown className="count" date={`${year}-12-24T00:00:00`} /></div></div>
        <ul className="row">
          <div className="head">
            <li>
              <Link to="/" >
                Home
                </Link>
            </li>
            <li>
              <Link to="/product" >
                Products
                </Link>
            </li>
            <li>
              <Link to="/about">
                About-Us
                </Link>
            </li>
            <li>
              <Link to="/faqs">
                FAQs
                </Link>
            </li></div>
          <div>
            <div className="header-links">
              <div className="drop">
                <div className="cartli">
                  <Link to='/cart' >
                    <AddShoppingCartIcon />
                    {cartItem.length > 0 && (
                      <span className="badge">{cartItem.length}</span>
                    )}</Link>
                </div>
                <div className="drop">
                  <div >
                    {userInfo ? (
                      <div className="dropdown">
                        <Link to="#">
                          {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="/profile">User Profile</Link>
                          </li>
                          <li>
                            <Link to="/orderHistory">Order History</Link>
                          </li>
                          <li>
                            <Link to="/signin" onClick={signoutHandler}>
                              Sign Out
                    </Link>


                          </li>
                        </ul>
                      </div>
                    ) : (
                        <Link to="/signin">Sign In </Link>
                      )}</div>
                  <div className="drop">
                    {userInfo && userInfo.isAdmin && (
                      <div className="dropdown">
                        <Link to="#admin">
                          Admin <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="/products">Products</Link>
                          </li>
                          <li>
                            <Link to="/orders">Orders</Link>
                          </li>
                          <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>

    </div>
  )
}

export default Navigation
