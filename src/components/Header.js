import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Hatchet and Barrel</h1>
      <Link to="/">Home</Link>
    </header>
  )
}

export default Header;