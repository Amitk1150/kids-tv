import { db, colNames, storage } from "../firebase/config";
import {
  collection,
  query,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getYouTubeVidurl, shuffleArray } from "../helpers/utils";
import { getYouTubeVidId } from "../helpers/utils";
import { youtubeService } from "../services";

const getVideos = async () => {
  const q = query(collection(db, colNames.videos));

  const ids = [];
  const result = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    ids.push(data.youtubeId);
    result.push(getYouTubeVidurl(data.youtubeId));
  });
  console.log(ids);
  return shuffleArray(result);
};

const deleteVideo = async (vidId) => {
  await deleteDoc(doc(db, colNames.videos, vidId));
};

const uploadImageToFirebase = async (blob, videoId) => {
  const storageRef = ref(storage, `youtube/thumbnails/${videoId}.jpg`);
  try {
    const snapshot = await uploadBytes(storageRef, blob);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  } catch (error) {
    console.error("Error uploading thumbnail to Firebase:", error);
    throw error;
  }
};

const saveVideo = async (url, userId) => {
  const vidId = getYouTubeVidId(url);
  try {
    debugger;
    const vidDetails = await youtubeService.fetchVideoDetails(vidId);
    const thumbnailurl = await uploadImageToFirebase(
      vidDetails.thumbnailBlob,
      vidId
    );

    const docRef = await addDoc(collection(db, colNames.videos), {
      youtubeId: vidId,
      thumbnailurl: thumbnailurl,
      title: vidDetails.title,
      addedOnd: new Date(),
      addedBy: userId,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const firebaseService = {
  saveVideo,
  getVideos,
  deleteVideo,
  uploadImageToFirebase,
};

export default firebaseService;
