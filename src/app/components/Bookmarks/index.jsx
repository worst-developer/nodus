import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import styles from './index.css';

const Bookmarks = inject('HomeStore')(observer(({ HomeStore }) => {
  const { bookmarks, handleBookmark } = HomeStore;
  return (
    <div className={styles.bookmarks}>
      {bookmarks.length > 0 && <h3>Bookmarks:</h3>}
      <ul className={styles.list}>
        {bookmarks.length > 0 && bookmarks.map((value, index) => (
          <li
            key={index}
            className={styles.element}
            onClick={handleBookmark(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}));

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  handleBookmark: PropTypes.func,
};

export default Bookmarks;
