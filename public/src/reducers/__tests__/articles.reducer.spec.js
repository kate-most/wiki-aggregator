import articlesReducer from '../articles.reducer.js';

describe('articlesReducer', () => {
    it('should return an old state if action.type is not handled by reducer', () => {
        const state = {test: 'test'};
        const action = {type: 'NON_HANDLED_TYPE'};

        expect(articlesReducer(state, action)).toBe(state);
    });
    it('should return a default state if state was not provided', () => {
        const expected = {
            entries: [],
            isLoading: false
        };
        const action = {type: 'type'};

        expect(articlesReducer(undefined, action)).toEqual(expected);
    });
    it('should return state with populated articles', () => {
        const state = {
            entries: [],
            isLoading: false
        };
        const action = {
            type: 'RECEIVE_ARTICLES',
            payload: [{
                title: 'title',
                content: 'content'
            }]
        };
        const expected = [{
            title: 'title',
            content: 'content'
        }];

        expect(articlesReducer(state, action).entries).toEqual(expected);
    });
});