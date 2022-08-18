import React, { useState } from "react";
import "../css/Header.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../context/StateProvider";
import Button from "@mui/material/Button";

function Header() {
  const [user] = useStateValue();
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          alt="akash"
          src={user.user.photoURL}
          onClick={() => {
            setShow(!show);
            console.log(show);
          }}
        />
        <Button className={`logout ${show ? "show" : "hide"}`}>Logout</Button>
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
