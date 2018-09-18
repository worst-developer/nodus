import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import styles from './index.css';

@inject('HomeStore')
@observer
class Search extends Component {
  handleAutocomplete = async event => {
    const data = event.target.value;
    const { loader, loadSearchData, clearMessage, setQuery } = this.props.HomeStore;

    if (data.length > 2) {
      loader(true);
      setQuery(data);
      loadSearchData(data);
      clearMessage();
    }
  }

  render() {
    const { handleFavorites } = this.props.HomeStore;

    return (
      <section className={styles.searchCnt}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            placeholder='Type text to Search...'
            type='text'
            onChange={this.handleAutocomplete}
          />
        </div>
        <button
          className={styles.favoritesBtn}
          type='button'
          onClick={handleFavorites}
        >
            Add to favorites
        </button>
      </section>
    );
  }
}

Search.propTypes = {
  handleFavorites: PropTypes.func,
};

export default Search;
