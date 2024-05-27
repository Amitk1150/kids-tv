import axios from 'axios';
import { commonService } from '../services';

const API_KEY = 'AIzaSyAGHsAEFJLhMB33pdQTjylPzYm3WYLWcAg';

const fetchVideoDetails = async (videoId) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`;

  try {
    const response = await axios.get(url);
    const { title, thumbnails } = response.data.items[0].snippet;
    const thumbnailUrl = thumbnails.high.url
    // const thumbnailUrl = thumbnails.high.url;
    // const thumbnailBlob = await commonService.fetchImageAsBlob(thumbnailUrl);
    return {
      title,
      thumbnailUrl,
    };
  } catch (error) {
    console.error('Error fetching video details:', error);
    return null;
  }
};


const youtubeService = {
    fetchVideoDetails,
  };
  
  export default youtubeService;
