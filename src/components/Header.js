import React, { useState, useEffect } from "react";
import "../css/Header.css";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import db from "../database/firebase";
import logo from "../blogify_logo.png";

function Header() {
  const navigate = useNavigate();
  const [user, dispatch] = useStateValue();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [channels, setChannels] = useState([]);
  const logout = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
    navigate("/");
    // window.location.reload();
  };
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
  }, [search]);
  return (
    <div className="header">
      <div className="header__left">
        <Avatar alt="Blogify" src={logo} onClick={() => navigate("/")} />
        <Button className={`logout`} onClick={() => logout()}>
          Logout
        </Button>
      </div>
      <div className="header__search">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search blogs ..."
          list="sugessions"
          onChange={(e) => setSearch(e.target.value)}
        />
        <datalist id="sugessions">
          {channels.map((channel) => (
            <option value={channel.name} />
          ))}
        </datalist>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
