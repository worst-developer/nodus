import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Search from '../components/Search';
import Card from '../components/Card';
import Bookmarks from '../components/Bookmarks';
import styles from './Home.css';

@inject('HomeStore')
@observer
class Home extends Component {
  render() {
    const { isLoading, search } = this.props.HomeStore;

    return (
      <main>
        <Search />
        <Bookmarks />
        {isLoading && <p>Loading...</p>}
        <section className={styles.resultsContainer}>
          {search.message &&
            <p>{search.message}</p>
          }
          {search.length > 0 && search.map(({
            uid,
            title,
            pubdate,
            sortfirstauthor,
          }) => (
            <Card
              key={uid}
              title={title}
              pubdate={pubdate}
              author={sortfirstauthor}
              id={uid}
            />
          ))
          }
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  isLoading: PropTypes.bool,
  search: PropTypes.array,
};

export default Home;
