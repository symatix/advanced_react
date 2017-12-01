import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = { input: '' };

		this.handleChange = this.handleChange.bind(this);
		this.submitComment = this.submitComment.bind(this);
	}

	handleChange(event) {
		this.setState({ input: event.target.value });
	}

	submitComment(e) {
		e.preventDefault();
		this.props.addComment(this.state.input);
		this.setState({ input: '' })
	}

	render() {

		return (
			<form className="input-box" onSubmit={this.submitComment}>
				<h4>Add a comment</h4>
                <input type="text" onChange={this.handleChange} value={this.state.input} />
                <button action="submit">Add Comment</button>
			</form>
		);
	}
}

export default connect(null, { addComment })(Input)
