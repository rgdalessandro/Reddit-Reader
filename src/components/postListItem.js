import React, { Component } from 'react';


export default class PostListItem extends Component {
  
  render() {
    return (
      <div className="post-list-item list-group-item">
        <div className="post-list-item-image"><img src={ this.props.thumbnail } /></div>
        <div className="post-list-item-info">
          <p className="post-list-item-title">{ this.props.title }</p>
          <p className="post-list-item-author">Author: { this.props.author }</p>
          <p className="post-list-item-subreddit">Subreddit: { this.props.subreddit }</p>
        </div>
      </div>
    );
  }

};