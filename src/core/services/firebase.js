import { db, colNames } from "../firebase/config";
import {
  collection,
  query,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  where,
  limit,
} from "firebase/firestore";
import { getYouTubeVidurl, shuffleArray } from "../helpers/utils";
import { getYouTubeVidId, isShorts } from "../helpers/utils";
import { youtubeService } from "../services";

const getVideos = async () => {
  const videosRef = collection(db, colNames.videos);
  const q = query(videosRef);
  const result = [];
  const ids = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    
    const data = doc.data();
    ids.push(data.youtubeId);
    result.push({
      id: doc.id,
      url: getYouTubeVidurl(data.youtubeId),
      vidId: data.youtubeId,
      thumbnailUrl: data.thumbnailUrl,
      title: data.title,
    });
  });
  return shuffleArray(result);
};

const getVideo = async (vidId) => {
  const videosRef = collection(db, colNames.videos);
  const q = query(videosRef, where("youtubeId", "==", vidId), limit(1));
  const querySnapshot = await getDocs(q);
  let result = null;
  querySnapshot.forEach((doc) => {
    result = { id: doc.id, ...doc.data() };
  });
  return result;
};

const deleteVideo = async (vidId) => {
  await deleteDoc(doc(db, colNames.videos, vidId));
};

const saveVideo = async (url, userId) => {
  const vidId = getYouTubeVidId(url);
  try {
    const isShortsType = isShorts(url);
    const existingVid = await getVideo(vidId);
    if (existingVid == null) {
      const { title, thumbnailUrl } = await youtubeService.fetchVideoDetails(
        vidId
      );

      await addDoc(collection(db, colNames.videos), {
        youtubeId: vidId,
        thumbnailUrl,
        title,
        addedOnd: new Date(),
        addedBy: userId,
        isShorts: isShortsType
      });
    }
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
