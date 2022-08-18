import React, { useEffect } from "react";
import "../css/SidebarOption.css";
import { useNavigate } from "react-router-dom";
import db from "../database/firebase";
function SidebarOption({ Icon, text, id, addChannelOption }) {
  let navigate = useNavigate();
  const selectChannel = () => {
    navigate(`/blogs/${id}`);
  };
  const addChannel = () => {
    const channelName = prompt("Enter a new channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon ? (
        <>
          <Icon />
          <p>{text}</p>
        </>
      ) : (
        <>
          <p># {text}</p>
        </>
      )}
    </div>
  );
}

export default SidebarOption;
