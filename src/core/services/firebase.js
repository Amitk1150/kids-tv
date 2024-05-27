import { db, colNames } from "../firebase/config";
import {
  collection,
  query,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { getYouTubeVidurl, shuffleArray } from "../helpers/utils";
import { getYouTubeVidId } from "../helpers/utils";
import { youtubeService } from "../services";

const getVideos = async () => {
  const q = query(collection(db, colNames.videos));
  const result = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    result.push({
      id: doc.id,
      url: getYouTubeVidurl(data.youtubeId),
      vidId: data.youtubeId,
      thumbnailUrl: data.thumbnailUrl,
      title: data.title
    });
  });
  return shuffleArray(result);
};

const deleteVideo = async (vidId) => {
  await deleteDoc(doc(db, colNames.videos, vidId));
};

const saveVideo = async (url, userId) => {
  const vidId = getYouTubeVidId(url);
  try {
    const { title, thumbnailUrl } = await youtubeService.fetchVideoDetails(
      vidId
    );

    await addDoc(collection(db, colNames.videos), {
      youtubeId: vidId,
      thumbnailUrl,
      title,
      addedOnd: new Date(),
      addedBy: userId,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const firebaseService = {
  saveVideo,
  getVideos,
  deleteVideo,
};

export default firebaseService;
