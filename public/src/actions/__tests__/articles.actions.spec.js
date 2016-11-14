import { receiveArticles } from '../articles.actions.js';

describe('articlesActions', () => {

    describe('receiveArticles', () => {
        it('should return an action with proper type', () => {
            expect(receiveArticles().type).toBe('RECEIVE_ARTICLES');
        });
        it('should return an action with articles as payload', () => {
            const articles = [{
                title: 'title',
                content: 'content'
            }];
            const expected = [{
                title: 'title',
                content: 'content'
            }];

            expect(receiveArticles(articles).payload).toEqual(expected);
        })
    });
});