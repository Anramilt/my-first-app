import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'


function CommentList({comments=[], isOpen, toggleOpen}){
    //console.log("Received comments:", comments); // Логируем полученные комментарии
    const text = isOpen ? 'hide comments' : 'show comments'
    return(
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </div>
    )
}

function getBody({comments, isOpen}){
    if(!isOpen) return null
    if(!comments.length) return <p>No comment yet</p>

    return(
        <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>
    )
}
export default toggleOpen(CommentList)

/*class CommentList extends Component{
    static defaultProps = {
        comments : []
    }
    render(){
        const text = this.props.isOpen ? 'hide comment' : 'show comment'
        return(
            <div>
                <button onClick={this.props.toggleOpen}> {text} </button>
                {this.getBody()}
            </div>
        )
    }

    getBody(){
        const {comments, isOpen} = this.props
        if(!isOpen) return null
        
        //if (!comments.length) return <p>No comments yet</p>
        if (!comments || comments.length === 0) return <p>No comments yet</p>

        return (
            <ul>
                {comments.map(comment => 
                    <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        )
    }
}
export default toggleOpen(CommentList)*/