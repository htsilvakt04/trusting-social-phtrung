import expect from 'expect';
import IDs from '../IDs';

describe('Reducer: IDs', () => {
    function stateBefore() {
        return ['5a549d4c7c459f29e79b2f8e2', '5a9e71555d97b30001393d622', '123321'];
    }
    it('Should have the initial state as expected', () => {
        const actual = IDs(undefined,{type: 'DO_SOME_WEIRD_THING'});
        const expected = [];
        expect(actual).toEqual(expected);
    });
    it('Should return the current state if weird action type is dispatched', () => {
        const actual = IDs(stateBefore(), {
            type: 'DO_SOME_WEIRD_THING',
            response: {
                result: ['5a549d4c7c459f29e79b2f8e2', '5a9e71555d97b30001393d622']
            }
        });
        const expected = stateBefore();
        expect(actual).toEqual(expected);
    });
    it('Will receive init data', () => {
        const action = {
            type: 'GET_INIT_DATA',
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
        };
        const actual = IDs(undefined, action);

        const expected = ['5a549d4c7c459f29e79b2f8e2', '5a9e71555d97b30001393d622'];
        expect(actual).toEqual(expected);
    });
    it('Will change the state if next or prev pagination data is dispatched', () => {
        const action = {
            type: 'GET_NEXT_PAGE_DATA',
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
                    }
                },
                result: ['5a549d4c7c459f29e79b2f8e2']
            }
        };
        const actual = IDs(stateBefore(), action);
        const expected = ['5a549d4c7c459f29e79b2f8e2'];

        expect(actual).toEqual(expected);
    });
})