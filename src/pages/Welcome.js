import React from "react";
import Blog from "../components/Blog";
import "../css/Welcome.css";
function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <h1>Hey there welcome to Blogify</h1>
        <br />
        <Blog
          user={"Akash R Prabhu"}
          message={
            "Try adding a new channel or post a blog in any existing channel to get started  Happy Blogging!"
          }
          likes={55}
        />
      </div>
    </div>
  );
}

export default Welcome;
