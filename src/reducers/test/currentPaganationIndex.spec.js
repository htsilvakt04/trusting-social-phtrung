import expect from 'expect';
import currentPaginationIndex from '../currentPaginationIndex';

describe('Reducer: currentPaginationIndex', () => {
    function action(type) {
        return {type};
    }
    function stateBefore(number) {
        return number;
    }

    it('Have the initial state as expect', () => {
        const actual = currentPaginationIndex(
            undefined, action('TEST_PAGINATION')
        );
        const expected = 1;
        expect(actual).toEqual(expected);
    });
    it('Will return current state if do not have any action.type match', () => {
        const actual = currentPaginationIndex(
            stateBefore(1), action('TEST_PAGINATION')
        );
        const expected = 1;
        expect(actual).toEqual(expected);
    });
    it('Will change the state up to one', () => {
        const actual = currentPaginationIndex(
            stateBefore(1), action('GET_NEXT_PAGE_DATA')
        );
        const expected = 2;
        expect(actual).toEqual(expected);
    });
    it('Will change the state down to one', () => {
        const actual = currentPaginationIndex(
            stateBefore(3), action('GET_PREV_PAGE_DATA')
        );
        const expected = 2;
        expect(actual).toEqual(expected);
    });
    it('Do not change the state down to number that < 1', () => {
        const actual = currentPaginationIndex(
            stateBefore(1), action('GET_PREV_PAGE_DATA')
        );
        const expected = 1;
        expect(actual).toEqual(expected);
    });
})