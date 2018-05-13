import store from './store';
import expect from 'expect';

describe('Redux Store', () => {
    it('should have the initial state as expected', () => {
        const actual = store.getState();
        const expected = {
            byId: {},
            IDs: [],
            currentPaginationIndex: 1,
            loadingBar: {},
        }
        expect(actual).toEqual(expected);
    });
    it('should work with multiple actions', () => {
        const actions = [
            {
                type: 'GET_INIT_DATA',
                response: {
                    entities: {
                        articles: {
                            '5a549d4c7c459f29e79b2f8e': {
                                snippet: 'During Vietnam, activists opened cafes outside military bases to recruit antiwar soldiers.',
                                source: 'The New York Times',
                                multimedia: [{
                                    rank: 0,
                                    subtype: 'xlarge',
                                    caption: null,
                                    credit: null,
                                    type: 'image',
                                    url: 'images/2018/01/09/opinion/09Vietnam-Parsonsweb/merlin_132037247_49b03bd0-2e87-4110-a6f9-b1fa580ca16b-articleLarge.jpg',
                                    height: 401,
                                    width: 600,
                                    legacy: {
                                        xlargewidth: 600,
                                        xlarge: 'images/2018/01/09/opinion/09Vietnam-Parsonsweb/merlin_132037247_49b03bd0-2e87-4110-a6f9-b1fa580ca16b-articleLarge.jpg',
                                        xlargeheight: 401
                                    },
                                    subType: 'xlarge',
                                    crop_name: 'articleLarge'
                                }],
                                pub_date: '2018-01-09T10:45:18+0000',
                                _id: '5a549d4c7c459f29e79b2f8e',
                                score: 1.835362
                            },
                            '5a9e71555d97b30001393d62': {
                                snippet: 'In calling for more troops, the general wasn’t guilty of hubris. He was guilty of naïveté.',
                                source: 'The New York Times',
                                multimedia: [{
                                    rank: 0,
                                    subtype: 'xlarge',
                                    caption: null,
                                    credit: null,
                                    type: 'image',
                                    url: 'images/2018/03/07/opinion/07Vietnam-Prados/07Vietnam-Prados-articleLarge.jpg',
                                    height: 400,
                                    width: 600,
                                    legacy: {
                                        xlargewidth: 600,
                                        xlarge: 'images/2018/03/07/opinion/07Vietnam-Prados/07Vietnam-Prados-articleLarge.jpg',
                                        xlargeheight: 400
                                    },
                                    subType: 'xlarge',
                                    crop_name: 'articleLarge'
                                }],
                                pub_date: '2018-03-06T10:45:25+0000',
                                _id: '5a9e71555d97b30001393d62',
                                score: 1.8091958
                            },
                        }
                    },
                    result: ['5a549d4c7c459f29e79b2f8e', '5a9e71555d97b30001393d62']
                }
            },
            {
                type: 'GET_NEXT_PAGE_DATA',
                response: {
                    entities: {
                        articles: {
                            '5a549d4c7c459f29e79b2f8e': {
                                snippet: 'During Vietnam, activists opened cafes outside military bases to recruit antiwar soldiers.',
                                source: 'The New York Times',
                                multimedia: [{
                                    rank: 0,
                                    subtype: 'xlarge',
                                    caption: null,
                                    credit: null,
                                    type: 'image',
                                    url: 'images/2018/01/09/opinion/09Vietnam-Parsonsweb/merlin_132037247_49b03bd0-2e87-4110-a6f9-b1fa580ca16b-articleLarge.jpg',
                                    height: 401,
                                    width: 600,
                                    legacy: {
                                        xlargewidth: 600,
                                        xlarge: 'images/2018/01/09/opinion/09Vietnam-Parsonsweb/merlin_132037247_49b03bd0-2e87-4110-a6f9-b1fa580ca16b-articleLarge.jpg',
                                        xlargeheight: 401
                                    },
                                    subType: 'xlarge',
                                    crop_name: 'articleLarge'
                                }],
                                pub_date: '2018-01-09T10:45:18+0000',
                                _id: '5a549d4c7c459f29e79b2f8e',
                                score: 1.835362
                            },
                        }
                    },
                    result: ['5a549d4c7c459f29e79b2f8e']
                }
            },
            {
                type: 'GET_NEXT_PAGE_DATA',
                response: {
                    entities: {
                        articles: {
                            '5a9e71555d97b30001393d62': {
                                snippet: 'In calling for more troops, the general wasn’t guilty of hubris. He was guilty of naïveté.',
                                source: 'The New York Times',
                                multimedia: [{
                                    rank: 0,
                                    subtype: 'xlarge',
                                    caption: null,
                                    credit: null,
                                    type: 'image',
                                    url: 'images/2018/03/07/opinion/07Vietnam-Prados/07Vietnam-Prados-articleLarge.jpg',
                                    height: 400,
                                    width: 600,
                                    legacy: {
                                        xlargewidth: 600,
                                        xlarge: 'images/2018/03/07/opinion/07Vietnam-Prados/07Vietnam-Prados-articleLarge.jpg',
                                        xlargeheight: 400
                                    },
                                    subType: 'xlarge',
                                    crop_name: 'articleLarge'
                                }],
                                pub_date: '2018-03-06T10:45:25+0000',
                                _id: '5a9e71555d97b30001393d62',
                                score: 1.8091958
                            },
                        }
                    },
                    result: ['5a9e71555d97b30001393d62']
                }
            },
            {
                type: 'GET_PREV_PAGE_DATA',
                response: {
                    entities: {
                        articles: {
                            '5a549d4c7c459f29e79b2f8e2': {
                                snippet: 'During Vietnam, activists opened cafes outside military bases to recruit antiwar soldiers.',
                                source: 'The New York Times',
                                multimedia: [{
                                    rank: 0,
                                    subtype: 'xlarge',
                                    caption: null,
                                    credit: null,
                                    type: 'image',
                                    url: 'images/2018/01/09/opinion/09Vietnam-Parsonsweb/merlin_132037247_49b03bd0-2e87-4110-a6f9-b1fa580ca16b-articleLarge.jpg',
                                    height: 401,
                                    width: 600,
                                    legacy: {
                                        xlargewidth: 600,
                                        xlarge: 'images/2018/01/09/opinion/09Vietnam-Parsonsweb/merlin_132037247_49b03bd0-2e87-4110-a6f9-b1fa580ca16b-articleLarge.jpg',
                                        xlargeheight: 401
                                    },
                                    subType: 'xlarge',
                                    crop_name: 'articleLarge'
                                }],
                                pub_date: '2018-01-09T10:45:18+0000',
                                _id: '5a549d4c7c459f29e79b2f8e',
                                score: 1.835362
                            },
                            '5a9e71555d97b30001393d622': {
                                snippet: 'In calling for more troops, the general wasn’t guilty of hubris. He was guilty of naïveté.',
                                source: 'The New York Times',
                                multimedia: [{
                                    rank: 0,
                                    subtype: 'xlarge',
                                    caption: null,
                                    credit: null,
                                    type: 'image',
                                    url: 'images/2018/03/07/opinion/07Vietnam-Prados/07Vietnam-Prados-articleLarge.jpg',
                                    height: 400,
                                    width: 600,
                                    legacy: {
                                        xlargewidth: 600,
                                        xlarge: 'images/2018/03/07/opinion/07Vietnam-Prados/07Vietnam-Prados-articleLarge.jpg',
                                        xlargeheight: 400
                                    },
                                    subType: 'xlarge',
                                    crop_name: 'articleLarge'
                                }],
                                pub_date: '2018-03-06T10:45:25+0000',
                                _id: '5a9e71555d97b30001393d62',
                                score: 1.8091958
                            },
                        }
                    },
                    result: ['5a549d4c7c459f29e79b2f8e2', '5a9e71555d97b30001393d622']
                }
            },
        ];

        actions.forEach(action => store.dispatch(action));

        const actual = store.getState();
        const expected = {
            IDs: ['5a549d4c7c459f29e79b2f8e2', '5a9e71555d97b30001393d622'],
            byId: {
                '5a549d4c7c459f29e79b2f8e2': {
                    snippet: 'During Vietnam, activists opened cafes outside military bases to recruit antiwar soldiers.',
                    source: 'The New York Times',
                    multimedia: [{
                        rank: 0,
                        subtype: 'xlarge',
                        caption: null,
                        credit: null,
                        type: 'image',
                        url: 'images/2018/01/09/opinion/09Vietnam-Parsonsweb/merlin_132037247_49b03bd0-2e87-4110-a6f9-b1fa580ca16b-articleLarge.jpg',
                        height: 401,
                        width: 600,
                        legacy: {
                            xlargewidth: 600,
                            xlarge: 'images/2018/01/09/opinion/09Vietnam-Parsonsweb/merlin_132037247_49b03bd0-2e87-4110-a6f9-b1fa580ca16b-articleLarge.jpg',
                            xlargeheight: 401
                        },
                        subType: 'xlarge',
                        crop_name: 'articleLarge'
                    }],
                    pub_date: '2018-01-09T10:45:18+0000',
                    _id: '5a549d4c7c459f29e79b2f8e',
                    score: 1.835362
                },
                '5a9e71555d97b30001393d622': {
                    snippet: 'In calling for more troops, the general wasn’t guilty of hubris. He was guilty of naïveté.',
                    source: 'The New York Times',
                    multimedia: [{
                        rank: 0,
                        subtype: 'xlarge',
                        caption: null,
                        credit: null,
                        type: 'image',
                        url: 'images/2018/03/07/opinion/07Vietnam-Prados/07Vietnam-Prados-articleLarge.jpg',
                        height: 400,
                        width: 600,
                        legacy: {
                            xlargewidth: 600,
                            xlarge: 'images/2018/03/07/opinion/07Vietnam-Prados/07Vietnam-Prados-articleLarge.jpg',
                            xlargeheight: 400
                        },
                        subType: 'xlarge',
                        crop_name: 'articleLarge'
                    }],
                    pub_date: '2018-03-06T10:45:25+0000',
                    _id: '5a9e71555d97b30001393d62',
                    score: 1.8091958
                },
            },
            currentPaginationIndex: 2,
            loadingBar: {},
        };

        expect(actual).toEqual(expected);
    });
})