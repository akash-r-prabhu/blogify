import React from "react";
import "../css/Header.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../context/StateProvider";
function Header() {
  const [user] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar alt="akash" src={user.user.photoURL} />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search blogs ..." />
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
