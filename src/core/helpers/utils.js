const getYouTubeVidId = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^?&]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const getYouTubeVidurl = (id) => {
  return `https://www.youtube.com/embed/${id}`;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const isShorts = (url) => {
  url = url.toLowerCase();
  if (url.indexOf("shorts") >= 0) {
    return true;
  }
  return false;
}

export { getYouTubeVidId, getYouTubeVidurl, shuffleArray, isShorts };
