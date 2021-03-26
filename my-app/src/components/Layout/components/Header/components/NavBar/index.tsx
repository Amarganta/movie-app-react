import React, { FC } from "react";
import "./navbar.css";
const NavBar: FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#aa">
            <img
              alt="popcorn-icon"
              src="https://img.icons8.com/color/48/000000/popcorn.png"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#aaa">
                Home
              </a>
              <a className="nav-link" href="#aa">
                Últimos Lanzamientos
              </a>
              <a className="nav-link" href="#aa">
                Populares
              </a>
              <a className="nav-link" href="#aa">
                Buscar
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };
