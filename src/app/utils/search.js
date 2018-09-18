import { callApi, listSearchIds, listSearchResults } from './http';

const SmartSearch = () => {
  let timeout = null;

  const getUUids = query => callApi(listSearchIds(query));

  const getResults = async (query) => {
    try {
      const uuids = await getUUids(query);
      const idQuery = uuids.data.esearchresult.idlist.join(',');
      const searchResult = await callApi(listSearchResults(idQuery));
      const resp = Object.values(searchResult.data.result)
                  .map(({
                    uid,
                    title = '',
                    pubdate = '',
                    sortfirstauthor = '',
                  }) => ({
                     uid,
                     title,
                     pubdate,
                     sortfirstauthor,
                    }));
      return resp;
    } catch (error) {
      const message = 'Ooops, search query fails';
      console.error(message);

      return { message };
    }
  };

  const runSearch = (input) => {
    return new Promise((resolve) => {
      clearTimeout(timeout);

      // debounce user input to prevet attack back-end
      timeout = setTimeout(async () => {
        resolve(await getResults(input));
      }, 500);
    });
  };

  return Object.freeze({
    runSearch,
  });
};

export default SmartSearch;
