import axios from 'axios';

export const getInitialData = () =>
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        params: {
            'api-key': '5763846de30d489aa867f0711e2b031c',
            q: 'vietnam',
            fl: 'snippet, multimedia, pub_date, source, _id',
            page: 1,
        },
    }).then(response => response.data.response.docs).catch(error => {
        throw new Error(error);
    });
