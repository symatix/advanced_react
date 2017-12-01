import { renderComponent, expect } from '../test_helper';
import Output from '../../src/components/output';

// Use 'describe' to group together similar tests
// Use 'it' to test a single attribute of a target
// Use 'expect' to make an 'assertion' about a target

describe('Output', () => {
	let component;

	beforeEach(() => {
		const props = { comments: ['one', 'two'] }
		component = renderComponent(Output, null, props);
	})

	it('shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal(2);
	})

	it('shows each comment that is provided', () => {
		expect(component).to.contain('one');
		expect(component).to.contain('two');
	})

});
