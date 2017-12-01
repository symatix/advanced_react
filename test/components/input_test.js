import { renderComponent, expect } from '../test_helper';
import Input from '../../src/components/input';

describe('Input', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(Input);
	})

	it('has correct class', () => {
		expect(component).to.have.class('input-box');
	})

	it('has input field', () => {
		expect(component.find('input')).to.exist;
	});

	it('has button', () => {
		expect(component.find('button')).to.exist;
	});

	describe('entering text', () => {
		beforeEach(() => {
			component.find('input').simulate('change', 'new comment');
		})

		it('shows text in input', () => {
			expect(component.find('input')).to.have.value('new comment');
		})

		it('clears input after submit', () => {
			component.simulate('submit')
			expect(component.find('input')).to.have.value('');
		})
	})

});
