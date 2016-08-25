import axios from 'axios';

export function getFrontPage() {
  return axios('http://www.reddit.com/.json');
}

export function getComments(sub, id) {
  return axios(`http://www.reddit.com/r/${sub}/comments/${id}.json?`);
}

export function getSubreddit(sub) {
  return axios(`http://www.reddit.com/r/${sub}/new.json?`);
}