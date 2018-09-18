import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const Card = ({ title, pubdate, author }) => (
  <div className={styles.cardContainer}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.author}>
      <strong>{author}</strong>
       &nbsp;
      {pubdate}
    </p>
    <button
      className={styles.redirectBtn}
      type='button'
    >
      Read More
    </button>
  </div>
);

Card.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pubdate: PropTypes.string.isRequired,
};

export default Card;
