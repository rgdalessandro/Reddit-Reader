import React, { Component } from 'react';
import { getFrontPage, getSubreddit } from '../models/api';
import NavBar from './navBar';
import PostList from './postList';


export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      subreddit: '',
      posts: []
    };
  }

  // On page load, get all front page posts
  // when promise resolves, save the posts to state
  componentWillMount() {
    getFrontPage()
    .then(response => {
      const data = response.data.data.children;
      this.setState({ posts: data });
    });
  }

  // This high level component is parent to the
  // NavBar and PostList
  render() {
    return (
      <div className="app">
        <NavBar
          onAddSubreddit={ this._onAddSubreddit.bind(this) }
          posts={ this.state.posts }
        />

        <PostList
          posts={ this.state.posts }
        />
      </div>
    );
  }

  // This method handles fetching subreddit posts
  // when the 'Add' button is clicked.
  // This method is passed down to NavBar throuh props.
  _onAddSubreddit(subreddit) {
    this.setState({ subreddit });
    getSubreddit(subreddit)
    .then(response => {
      console.log('subreddits', response.data.data.children);
      const data = response.data.data.children;
      this.setState({ posts: data.concat(this.state.posts) });
    });
  }

}
