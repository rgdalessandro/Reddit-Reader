import React, { Component } from 'react';
import { getFrontPage } from '../models/api';
import Navbar from './navbar';


export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      subreddit: ''
    };
  }

  componentWillMount() {
    getFrontPage().then(response => {
      const data = response.data.data.children;
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
