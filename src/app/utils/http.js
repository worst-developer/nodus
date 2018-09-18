import axios from 'axios';

const baseUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
const listSearchIds = query => `${baseUrl}/esearch.fcgi?db=pubmed&term=${query}&reldate=60&sort=relevance&retmode=json&retmax=15`;
const listSearchResults = ids => `${baseUrl}/esummary.fcgi?db=pubmed&retmode=json&id=${ids}&version=2.0`;

const callApi = async (path) => {
  try {
    return await axios({
      headers: {
        'Content-Type': 'application/json',
      },
      url: path,
      method: 'GET',
      responseType: 'json',
    });
  } catch (error) {
    console.error('Feth failed', error);
  }
};

export {
  callApi,
  listSearchIds,
  listSearchResults,
};
