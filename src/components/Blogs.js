import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Blog from "./Blog";
import db from "../database/firebase";
import "../css/Blogs.css";
import BlogInput from "./BlogInput";
function Blogs() {
  let { blogId } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [roomId, setRoomId] = useState("");
  useEffect(() => {
    if (blogId) {
      setRoomId(blogId);
    }
  }, [blogId]);
  useEffect(() => {
    db.collection("rooms")
      .doc(blogId)
      .collection("blogs")
      .onSnapshot((snapshot) => {
        setBlogs(snapshot.docs.map((doc) => doc.data()));
      });
  }, [blogId]);
  return (
    <div className="blogs">
      {blogs.map((blog, index) => (
        <Blog
          blogId={blogId}
          index={index}
          user={blog?.user}
          message={blog?.message}
          likes={blog?.likes}
        />
      ))}
      <BlogInput blogId={blogId} />
    </div>
  );
}

export default Blogs;
