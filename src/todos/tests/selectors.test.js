import { expect } from 'chai';

import { getCompletedTodos } from '../selectors';

describe('Todo selectors', () => {
    it('should only return completed todos', () => {
        const fakeTodos = [{ text: 'Right', isCompleted: true }, { text: 'Wrong', isCompleted: false }];
        const expected = [{ text: 'Right', isCompleted: true }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(expected).to.deep.equal(actual);
    })
})