import React, { useEffect, useState } from "react";
import db from "../database/firebase";
import { Routes, Route, useParams } from "react-router-dom";
import "../css/Popup.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Popup() {
  let { blogId, index } = useParams();
  const [blog, setBlog] = useState({});
  const [snapshot, setSnapshot] = useState([]);
  const [doc, setDoc] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const like = () => {
    db.collection("rooms")
      .doc(blogId)
      .collection("blogs")
      .onSnapshot((snapshot) => {
        setSnapshot(snapshot.docs.map((doc) => doc));
      });
    console.log(snapshot[index].data().likes);
    db.collection("rooms")
      .doc(blogId)
      .collection("blogs")
      .doc(snapshot[index].id)
      .update({
        likes: snapshot[index].data().likes + 1,
      });
    setIsLiked(!isLiked);
  };
  useEffect(() => {
    db.collection("rooms")
      .doc(blogId)
      .collection("blogs")
      .onSnapshot((snapshot) => {
        setBlog(snapshot.docs.map((doc) => doc.data()));
      });
    // console.log(blog[index]);
  }, [blogId, index]);

  return (
    <div className="popup">
      <h1>{`Author ${blog[index]?.user}`}</h1>
      <hr />
      <FavoriteIcon className={isLiked && `likeRed`} onClick={() => like()} />
      <p>{blog[index]?.message}</p>
    </div>
  );
}

export default Popup;
