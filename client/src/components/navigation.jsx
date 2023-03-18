import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import './header.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';
import Countdown from './Timer'
import { Button, Dropdown, Image, Popover } from 'antd';
import { ShoppingCartOutlined ,UserOutlined } from '@ant-design/icons'
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
  const log = (e) => {
    console.log(e);
  };
  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
  return (
    <div className="nav">
      <div className='offer-counter'>
    <span >Get <b>25%</b> (ALMOST) OFF on All Products
    <Button>Shop Now</Button>
    </span>
      </div>
      <div >
        <header>
          <ul>
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
                About Us
                </Link>
            </li>
            <li>
            <div className="tit"><Link to="/">
          <Image width={120} preview={false} src="/images/logo.png" />
            </Link>
           </div>
            </li>
            <li>
              <Link to="/faqs">
                FAQs
                </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Us
                </Link>
            </li>
            <li>
                <div className='bothAdmin'>
                  <div>
                    {userInfo ? (
                        <Popover content={
                          <ul>
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
                        }>
                        <soan type="primary">{userInfo.name}</soan>
                      </Popover>
                    ) : (
                        <Link to="/signin"><UserOutlined /> </Link>
                      )}</div>
                  <div className="drop">
                    {userInfo && userInfo.isAdmin && (
                       <Popover content={
                        <div>
                        <ul >
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
 
                      }>
                      <soan type="primary">{userInfo.name}</soan>
                    </Popover>
                                        )}
                  </div>
                </div>
           </li>
            <li><div className="cartli">
                  <Link to='/cart' >
                    <ShoppingCartOutlined />
                    {cartItem.length > 0 && (
                      <span className="badge">{cartItem.length}</span>
                    )}</Link>
                </div></li>
            <li>
              
            </li>
          
          </ul>
           
        </header>
      </div>

    </div>
  )
}

export default Navigation
