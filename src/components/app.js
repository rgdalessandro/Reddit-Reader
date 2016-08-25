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

  componentWillMount() {
    getFrontPage()
    .then(response => {
      const data = response.data.data.children;
      this.setState({ posts: data });
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar
          subreddit={ this.state.subreddit }
          onAddSubreddit={ this._onAddSubreddit.bind(this) }
          posts={ this.state.posts }
        />

        <PostList
          posts={ this.state.posts }
        />
      </div>
    );
  }

  _onAddSubreddit(subreddit) {
    this.setState({ subreddit });
    getSubreddit(subreddit)
    .then(response => {
      console.log('subreddits', response.data.data.children);
      const data = response.data.data.children;
      this.setState({ posts: this.state.posts.concat(data) });
    });
  }

}
