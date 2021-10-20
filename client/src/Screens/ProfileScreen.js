import React, { useState, useEffect } from 'react';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../component/MessageBox';
import LoadingBox from '../component/LoadingBox';
import { USER_UPDATE_RESET } from '../constants/userConstants';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and Confirm Password Are Not Matched');
    } else {
      dispatch(update({ userId: userInfo._id, email, name, password }))
    }
  };
     
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name)
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
      setConfirmPassword(userInfo.confirmPassword)
    }
    dispatch({ type: USER_UPDATE_RESET });
    dispatch(listMyOrders());
    return () => {

    };
  }, [dispatch,userInfo])
 
  return <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>User Profile</h2>
            </li>
            {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
          
              
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox  variant="success">{error}</MessageBox>}
              {success && <div>Profile Saved Successfully.</div>}
            
            <li>
              <label htmlFor="name">
                Name
          </label>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="email">
                Email
          </label>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input  type="password" id="password" name="password" placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="Confirmpassword">Confirm Password</label>
              <input  type="password" id="Confirmpassword" placeholder="Confirm Password..." name="Confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)}>
              </input>
            </li>
            <li>
              <button type="submit" className="button primary">Update</button>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
            </li>
        </> )}
          </ul>
        </form>
      </div>
    </div>
   
  </div>
}

export default ProfileScreen;