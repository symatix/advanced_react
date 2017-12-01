import React from 'react';
import { connect } from 'react-redux';

const Output = (props) => {
	const comments = props.comments.map(comment => <li key={comment}>{comment}</li>);
	return (
		<ul className="output-box">
            {comments}
        </ul>
	);
}

function mapStateToProps({ comments }) {
	return { comments }
}

export default connect(mapStateToProps)(Output)
