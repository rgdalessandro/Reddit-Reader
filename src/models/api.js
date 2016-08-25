import axios from 'axios';

export function getFrontPage() {
  return axios('http://www.reddit.com/.json');
}

export function getComments() {
  return axios(`http://www.reddit.com/r/${sub}/comments/${id}.json?`);
}