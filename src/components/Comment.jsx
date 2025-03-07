import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b> by {comment.user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.string({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

export default Comment