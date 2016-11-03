// Absolute imports go first (from node modules)
import isObject from 'lodash/isObject';
import apiFactory from './../apiFactory.js';

describe('apiFactory', () => {
    it('should be an object', () => {
        expect(isObject(apiFactory)).toBe(true);
    });

    it('should be not empty object', () => {
        expect(apiFactory).not.toEqual({});
    });

    describe('#method', () => {

    });
});