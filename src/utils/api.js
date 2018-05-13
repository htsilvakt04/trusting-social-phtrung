import axios from 'axios';
const requestPageData = (page) =>
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        params: {
            'api-key': '5763846de30d489aa867f0711e2b031c',
            q: 'vietnam',
            fl: 'snippet, multimedia, pub_date, source, _id',
            page: page,
        }
    });

export const getInitialData = () =>
    requestPageData(1)
        .then(response => response.data.response.docs)
        .catch(error => {
            throw new Error(error);
        });

export const getPageData = (page) =>
    requestPageData(page)
        .then(response => response.data.response.docs)
        .catch(error => {
            throw new Error(error);
        });

