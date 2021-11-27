import axios from 'axios';

// Axios Client
export const axiosClient = axios.create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'x-rapidapi-key': '2d4f97d51emshfee836e9f17a23bp11a5b1jsn9e270e1f6904',
  },
  responseType: 'json',
});
