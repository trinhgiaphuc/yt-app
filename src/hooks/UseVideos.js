import { useState, useEffect } from "react";
import youtube from '../apis/youtube';

const UseVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => search(defaultSearchTerm), [defaultSearchTerm]);

  const search = async term => {
    try {
      const response = await youtube.get('/search', { params: { q: term } });
      setVideos(response.data.items);
    } catch (error) {
      console.log(`The ${error}`);
    }
  };

  return [videos, search];
};

export default UseVideos;
