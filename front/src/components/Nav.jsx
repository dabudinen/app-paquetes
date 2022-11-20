import React from "react";

export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <img src="/img/logo-instaya.png" alt="InstaYa!" title="InstaYa!" />
        &nbsp;
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Acceso
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Registro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contactanos
              </a>
            </li>

            <li className="nav-item dropdown">
              {" "}
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownPortfolio"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Portfolio
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownPortfolio"
              >
                <li>
                  <a className="dropdown-item" href="portfolio-overview.html">
                    Portfolio Overview
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="portfolio-item.html">
                    Portfolio Item
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
