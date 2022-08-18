import React from "react";
import "../css/Blog.css";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Blog({ user, message, index, blogId, likes }) {
  let navigate = useNavigate();
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function openPopup() {
    console.log({ blogId, index });
    navigate(`/blogs/popup/${blogId}/${index}`);
  }

  return (
    <div className="blog" onClick={openPopup}>
      <div className="blog__head ">
        <p>{truncate(message, 180)}</p>
      </div>
      <div className="blog__body">
        <h4>Author : {user}</h4>
        <FavoriteIcon /> {likes}
      </div>
    </div>
  );
}

export default Blog;
