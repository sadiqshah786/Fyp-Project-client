import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../component/MessageBox';
import LoadingBox from '../component/LoadingBox';
import { detailsUser, update } from '../actions/userActions';
import { USER_UPDATE_RESET } from '../constants/userConstants';

function UserEditScreen(props) {
  const userId = props.match.params.id;
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSeller, setIsSeller] = useState('');
  const [isAdmin, setIsAdmin] = useState('');

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = userUpdate;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user, error } = userDetails;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push(`/userlist`);
    }
    if (!user.name) {
      dispatch(detailsUser(userId));
    } else {
      setId(user._id);
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
      setIsSeller(user.isSeller);
    }

    return () => {
      //
    };
  }, [user, successUpdate, dispatch, props.history, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      update({
        _id: id,
        name,
        email,
        isSeller,
        isAdmin,
      })
    );
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit User {name}</h1>
        </div>

        {loadingUpdate && <LoadingBox />}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {user && (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="isSeller">Is Seller</label>
              <input
                id="isSeller"
                type="checkbox"
                label="Is Seller"
                checked={isSeller}
                onChange={(e) => setIsSeller(e.target.checked)}
              />
            </div>
            <div>
              <label htmlFor="isAdmin">Is Admin</label>
              <input
                id="isAdmin"
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
            </div>
            <div>
              <div />
              <div>
                <button
                  onClick={() => props.history.push('/userlist')}
                  type="button"
                >
                  Back
                </button>{' '}
                <button className="primary" type="submit">
                  Update
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default UserEditScreen;