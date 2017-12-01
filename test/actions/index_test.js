import { expect } from '../test_helper';
import { ADD_COMMENT } from '../../src/actions/type';
import { addComment } from '../../src/actions';

describe('actions', () => {
	describe('addComment', () => {

		it('has the correct type', () => {
			const action = addComment();
			expect(action.type).to.equal(ADD_COMMENT);
		})

		it('has the correct payload', () => {
			const action = addComment('new comment');
			expect(action.payload).to.equal('new comment')
		})
	})
})
