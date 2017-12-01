import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/commentReducer';
import { ADD_COMMENT } from '../../src/actions/type';


describe('Comments Reducer', () => {
	it('handles action with unknown type', () => {
		expect(commentReducer(undefined, {})).to.be.instanceof(Array);
		expect(commentReducer(undefined, {})).to.eql([]);
	})

	it('handles action of type ADD_COMMENT', () => {
		const action = { type: ADD_COMMENT, payload: 'new comment' };
		expect(commentReducer([], action)).to.eql(['new comment']);
	})
})
