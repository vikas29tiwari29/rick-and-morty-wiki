import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../App.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light mb-4">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx>
            {`
            button[ aria-expanded="false"] > .close{
              display:none;
            }
            button[ aria-expanded="true"] > .open{
              display:none;
            }
            `}
          </style>
          <i class="bi bi-list open fw-bold fs-3 text-dark"></i>
         <i class="bi bi-x-lg close fw-bold fs-3 text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink  activeClassName='active' className="nav-link" to="/">
              Characters
            </NavLink>
            <NavLink className="nav-link" to="episodes">
              Episodes
            </NavLink>
            <NavLink className="nav-link" to="location">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
