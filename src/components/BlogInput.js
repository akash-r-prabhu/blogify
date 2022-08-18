import React, { useState, useEffect } from "react";
import db from "../database/firebase";
import "../css/BlogInput.css";
import { useStateValue } from "../context/StateProvider";
function BlogInput({ blogId }) {
  const [user] = useStateValue();
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log(input);
  }, [input]);
  const postBlog = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(blogId)?.collection("blogs").add({
      message: input,
      user: user?.user?.displayName,
      likes: 0,
    });
    // db.collection("rooms").
  };
  return (
    <div className="blogInput">
      <form>
        <input
          placeholder="Type a blog ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="textarea"
        />
        {user?.user?.displayName !== "Guest" ? (
          <>
            <button className="blogSendButton" onClick={postBlog} type="submit">
              Send Message
            </button>
          </>
        ) : (
          <button
            className="blogSendButton"
            onClick={(e) => {
              e.preventDefault();
              alert("Please login to post a blog");
            }}
            type="submit"
            // disabled
          >
            Send Message
          </button>
        )}
      </form>
    </div>
  );
}

export default BlogInput;
