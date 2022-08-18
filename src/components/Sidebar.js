import React, { useEffect, useState } from "react";
import "../css/Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SidebarOption from "./SidebarOption";
import AddIcon from "@mui/icons-material/Add";
import db from "../database/firebase";
import { useStateValue } from "../context/StateProvider";
function Sidebar() {
  const [user] = useStateValue();
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => {
          return {
            name: doc.data().name,
            id: doc.id,
          };
        })
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <hr />
      <div className="sidebar__header">
        <FiberManualRecordIcon />
        <h3>{user?.user?.displayName}</h3>
      </div>
      <hr />
      <div className="sidebar__body">
        <SidebarOption Icon={AddIcon} text="Add Channel" addChannelOption />
        {channels.map((channel) => (
          <SidebarOption id={channel.id} text={channel.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
