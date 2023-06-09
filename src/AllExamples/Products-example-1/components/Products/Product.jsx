import React from 'react';
import PropTypes from 'prop-types';

import GoBackButton from 'components/generic/GoBackButton/GoBackButton';

import css from './Product.module.css';

const defaultImage =
  'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder';

const Product = ({ allFood }) => {
  return (
    <>
      <GoBackButton path={'/examples'} />
      <ul className={css.cardWrapper}>
        {allFood.map(({ imgUrl = defaultImage, name, price, quantity, id }) => (
          <li key={id} className={css.card}>
            <div>
              <div className={css.imgWrapper}>
                <img
                  src={imgUrl ?? defaultImage}
                  alt={name}
                  width="300"
                  height="170"
                  className={css.img}
                />
              </div>
              <div className={css.details}>
                <h2>{name}</h2>
                <p>Price: {price}$</p>
                <h2>Quantity: {quantity < 20 ? 'Few left' : 'In stock'}</h2>
                <button type="button">Add to cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

Product.propTypes = {
  allFood: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Product;
