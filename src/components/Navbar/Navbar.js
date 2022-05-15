import React from "react";
import "../../App.css"
import { NavLink, Link } from "react-router-dom";
import FavWidget from "../FavWidget/FavWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbarBg">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 titlePage">
          The Rick & Morty API
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Personajes
            </NavLink>
            <NavLink to="/misfavoritos" className="nav-link">
              Favoritos
            </NavLink>
          </div>
          <FavWidget className="FavWidget WidgetNumber"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;