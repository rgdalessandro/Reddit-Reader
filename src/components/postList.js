import React, { Component } from 'react';
import PostListItem from './postListItem';


export default class PostList extends Component{
  
  render() {
    if (this.props.posts) {
      const postItems = this.props.posts.map(post => {  // postItems is an array of posts
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
          { postItems /* React handles rendering this array */}
        </ul>
      );
    } else {
      return null;
    }
  }
  
};