import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { auth, db, colNames } from "../../core/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getYouTubeVidId } from "../../core/helpers/utils";

import "./style.scss";

function Add() {
  const [user] = useAuthState(auth);
  const [url, setUrl] = useState("");

  const urlHandler = (e) => {
    setUrl(e.target.value);
  };

  const saveHandler = async () => {
    if (url) {
      setUrl("");
      const vidId = getYouTubeVidId(url);
      console.log("vidId: ", vidId);
      try {
        const docRef = await addDoc(collection(db, colNames.videos), {
          youtubeId: vidId,
          addedOnd: new Date(),
          addedBy: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <form className="row g-3 mx-1">
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Youtube
        </label>
        <input
          type="text"
          className="form-control"
          id="url"
          placeholder="Youtube link"
          value={url}
          onChange={urlHandler}
        />
      </div>

      <div className="col-12">
        <button type="button" className="btn btn-primary" onClick={saveHandler}>
          Save
        </button>
      </div>
    </form>
  );
}

export default Add;
