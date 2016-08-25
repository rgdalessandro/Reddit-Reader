import React, { Component } from 'react';


export default class PostComments extends Component {

  render() {
    return(
      this.props.showComments
    ? <div className="post-comments list-group">
        <span>Comments</span>
        <span
          className="post-commenents glyphicon glyphicon-triangle-bottom"
          onClick={ () => this.props.showCommentsToggle(this.props.showComments) }
          aria-hidden="true">
        </span>
        { 
          this.props.comments.map((comment, i, arr) => {
            if (i !== arr.length - 1) {
              return (
                <div key={ comment.data.id } className="post-comments-comment list-group-item">
                  <span className="post-comments-comment-author">{ comment.data.author }:</span> <span className="post-comments-comment-body">{ comment.data.body }</span>
                </div>
              )
            }
          })
        }
      </div>
    : <div className="post-comments">
        <span>Comments</span>
        <span
          className="glyphicon glyphicon-triangle-right"
          onClick={ () => this.props.showCommentsToggle(this.props.showComments) }
          aria-hidden="true">
        </span>
      </div>
    );
  }

};