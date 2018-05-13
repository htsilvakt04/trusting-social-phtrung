import expect from 'expect';
import byId, { isAcceptedAction } from '../byId';

describe('Reducer: ById', () => {
    function stateBefore() {
        return {
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
    }

    it('Should have the initial state as plain object', () => {
        const actual = byId(undefined, {type: 'SOME_WEIRD_ACTION'});
        const expected = {};

        expect(actual).toEqual(expected);
    });
    it('Should change the state when the response props is contained in the Action', () => {
        const action = {
            type: 'GET_INIT_DATA',
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
                result: ['5a549d4c7c459f29e79b2f8e', '5a9e71555d97b30001393d62']
            }};
        const actual = byId({}, action);
        const expected = {
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
        };

        expect(actual).toEqual(expected);
    });
    it('Should return the state before if there is a weird action was dispatched', () => {
        const action = {
            type: 'DO_SOMETHING',
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
                result: ['5a549d4c7c459f29e79b2f8e', '5a9e71555d97b30001393d62']
            }};
        const actual = byId(stateBefore(), action);
        const expected = stateBefore();

        expect(actual).toEqual(expected);
    });
});

describe('Reducer: ById with the isAcceptedAction function', () => {
    function stateBefore() {
        return {
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
    }
    it('should return false when receive weird action', () => {
        const actual = isAcceptedAction(stateBefore(), {type: 'GET_PREV_PAGE'});
        const expected = false;

        expect(actual).toEqual(expected);
    })

    it('should return true when receive accepted actions', () => {
        const actual = isAcceptedAction(stateBefore(), {type: 'GET_NEXT_PAGE_DATA'});
        const expected = true;

        expect(actual).toEqual(expected);
    })
})