import { expect } from 'chai';

import { getBoardStyleForDate } from '../TodoListItem';

describe('getBoarderStyleForDate', () => {
    it('returns none when the date is less five days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 8640000 * 3);
        const expected = 'none';
        const actual = getBoardStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);
    });
    it('returns a border when the date is more than five days ago', () => {
        const today = Date.now();
        const distantDate = new Date(Date.now() - 8640000 * 8);
        const expected = '2px solid red';
        const actual = getBoardStyleForDate(distantDate, today)

        expect(actual).to.equal(expected);
    })
})