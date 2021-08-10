import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID F-sqsxbrI7jZnVbQAsEFwmzo77BocH8fRmvAkW95-og',
  },
});
