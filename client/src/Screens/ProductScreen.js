import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { detailsProduct, saveProductReview } from '../actions/productActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import Rating from '../component/Rating';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';
import { useSelector, useDispatch } from 'react-redux'
import { url } from '../actions/BackendUrl';

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productReviewSave = useSelector((state) => state.productReviewSave);
  const { success: productSaveSuccess } = productReviewSave;
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productSaveSuccess) {
      alert('Review submitted successfully.');
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, productSaveSuccess]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      saveProductReview(productId, {
        name: userInfo.name,
        rating: rating,
        comment: comment,
      })
    );
  };
  const changeImage = (image) => {
    setSelectedImage(image);
  };
  const handleAddToCart = () => {
    props.history.push(`/cart/${productId}? qty= ${qty}`);
  };

  return (
    <div>
      <div className="back-to-result">
        <div className="fa fa-arrow-left" aria-hidden="true">
          <Link to="/product">Back to Product</Link>
        </div>

      </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className="details">
            <div className="details-image">
              <img src={`${url}${product.image}`}
                alt={product.name}></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>Brand: {' '}
                  <strong>{product.brand}</strong>
                </li>

                <li>
                  <a href="#reviews">
                    <Rating
                      value={product.rating}
                      text={product.numReviews + ' reviews'}
                    />
                  </a>
                </li>
                <li>
                  Price: <b>Rs {product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</b>
                </li>
                <li>
                  <b>Description:</b> {product.description}

                </li>

                <li >
                  <h4>Image:</h4>
                  <div className="smallcontain">

                    <button
                      type="button"
                      className="light"
                      onClick={() => changeImage(`${url}${product.image}`)}
                    >

                      <img src={`${url}${product.image}`} className='smalsize' alt={product.name}></img>
                    </button>

                  </div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li><strong>Price: </strong>Rs.{product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</li>
                <li >

                  Status:{' '}   {product.countInStock > 0 ? <strong className="Instock">In Stock</strong> : <i className="unavailable">Unavailable</i>}
                </li>
                <li>
                  Qty:{' '}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  )}
                </li>

              </ul></div>
          </div>

          <div className="content-margined">
            <h2 id="reviews">Reviews</h2>
            {!product.reviews.length && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>

                  <Rating value={review.rating} />

                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}

              <li>
                <h3>Write a customer review</h3>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <ul className="fcontainer">
                      <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          placeholder="Write Comment..."
                          required
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                ) : (
                  <div>
                    Please <Link to="/signin">Sign-in</Link> to write a review.
                  </div>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
export default ProductScreen;
