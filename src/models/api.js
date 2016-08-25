import axios from 'axios';

export function getFrontPage() {
  return axios('http://www.reddit.com/.json');
}