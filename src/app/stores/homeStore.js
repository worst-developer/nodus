import { observable, action } from 'mobx';
import SmartSearch from '../utils/search';

const lookup = SmartSearch();

export class Home {
  @observable isLoading = false;
  @observable search = [];
  @observable query = '';
  @observable bookmarks = [];

  @action loadSearchData = async data => {
    this.search = await lookup.runSearch(data);
    this.loader(false);
  };

  @action handleFavorites = () => {
    if (this.query.length > 2 && this.bookmarks.length < 5) {
      this.bookmarks = [...this.bookmarks, this.query];
    }
  }

  @action handleBookmark = (data) => {
    this.loader(true);
    this.loadSearchData(data);
  }

  @action setQuery = data => {
    this.query = data;
  }

  @action loader = (param) => {
    this.isLoading = param;
  }

  @action clearMessage = () => {
    this.search = [];
  }
}

export default new Home();
