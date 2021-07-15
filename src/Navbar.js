import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import logout from "./images/logout.png";

const Navbar = () => {
  const { setJwt } = useGlobalContext();
  const token = localStorage.getItem("jwt");
  const history = useHistory();
  const handleLogout = async () => {
    localStorage.removeItem("jwt");
    setJwt("");
    history.push("/");
  };

  return (
    <div className="navbar">
      <p className="logo">ToDo-list</p>
      {token && (
        <div>
          <img className="logout-button" src={logout} onClick={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default Navbar;