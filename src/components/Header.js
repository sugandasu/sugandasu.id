import { Link } from "gatsby";
import React from "react";

const Header = () => {
  return (
    <header className="header container">
      <h1 className="header-title">
        <Link to="/">Arif Suganda</Link>
        <span className="header-subtitle">Software Engineer</span>
      </h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
