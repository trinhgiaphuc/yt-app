import axios from 'axios';

const KEY = 'AIzaSyDeWTAoYQQ-Ezb-zxl_Nsa-7TTbonFGw3E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
