import React, { Component } from 'react';
import { getComments } from '../models/api';
import PostComments from './postComments';


export default class PostListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showComments: false,
      comments: []
    };
  }
  
  componentWillMount() {
    getComments(this.props.subreddit, this.props.id)
    .then(response => {
      const data = response.data[1].data.children;
      this.setState({ comments: data });
    });
  }

  render() {
    const thumbnail = this.props.thumbnail.slice(0,4) === 'http'
  ? this.props.thumbnail
  : 'https://cdn1.iconfinder.com/data/icons/black-socicons/512/reddit-128.png';
    return (
      <div className="post-list-item list-group-item">

        <div className="post-list-item-main">
          <div className="post-list-item-main-header" onClick={ () => window.open(this.props.link) }>
          <div className="post-list-item-main-image"><img src={ thumbnail } /></div>
          <h4 className="post-list-item-main-title">{ this.props.title }</h4>
          </div>
          <div className="post-list-item-main-info">
            <p>Author: <span className="post-list-item-main-author">{ this.props.author }</span></p>
            <p>Subreddit: <span className="post-list-item-main-subreddit">{ this.props.subreddit }</span></p>
          </div>
        </div>

        <div className="post-list-item-comments">
          <PostComments
            comments={ this.state.comments }
            showCommentsToggle={ this._showCommentsToggle.bind(this) }
            showComments={ this.state.showComments }
          />
        </div>

      </div>
    );
  }

  _showCommentsToggle(isNow) {
    this.setState({ showComments: !isNow });
  }

};