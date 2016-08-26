import React, { Component } from 'react';
import { getComments } from '../models/api';
import PostComments from './postComments';


export default class PostListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showComments: false,    // this variable controls whether comments are shown or not
      comments: []
    };
  }
  
  // Get comments for this post on component load.
  // When promise resolves save it to state.
  componentWillMount() {
    getComments(this.props.subreddit, this.props.id)
    .then(response => {
      const data = response.data[1].data.children;
      this.setState({ comments: data });
    });
  }

  // The PostListItem component is the parent of the
  // PostComments component
  render() {
    const thumbnail = this.props.thumbnail.slice(0,4) === 'http'    // does this post have a valid thumbnail?
  ? this.props.thumbnail                                            // if so, use the valid url
  : 'https://cdn1.iconfinder.com/data/icons/black-socicons/512/reddit-128.png'; // if not, use a default icon
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

  // This method controls whether comments should
  // be visible or hidden.
  _showCommentsToggle(isNow) {
    this.setState({ showComments: !isNow });
  }

};