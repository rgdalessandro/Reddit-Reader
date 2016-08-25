import React, { Component } from 'react';
import { getFrontPage } from '../models/api';
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
    getFrontPage().then(response => {
      const data = response.data.data.children;
      this.setState({ posts: data });
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar
          posts={ this.state.posts }
        />

        <PostList
          posts={ this.state.posts }
        />
      </div>
    );
  }
}
