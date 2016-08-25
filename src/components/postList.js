import React, { Component } from 'react';
import PostListItem from './postListItem';


export default class PostList extends Component{
  
  render() {
    console.log(this.props.posts);
    if (this.props.posts) {
      const postItems = this.props.posts.map(post => {
        return (<PostListItem
          key={ post.data.id }
          id={ post.data.id }
          title={ post.data.title }
          author={ post.data.author }
          subreddit={ post.data.subreddit }
          thumbnail={ post.data.thumbnail }
          link={ `http://www.reddit.com/${post.data.permalink}` }
        />);
      });

      return (
        <ul className="col-sm-12 list-group post-list">
          { postItems }
        </ul>
      );
    } else {
      return null;
    }
  }
  
};