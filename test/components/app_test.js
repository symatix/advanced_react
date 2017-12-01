import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
// Use 'it' to test a single attribute of a target
// Use 'expect' to make an 'assertion' about a target

describe('App', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	})

	it('shows an input box', () => {
		expect(component.find('.input-box')).to.exist;
	});
});
