import React from "react";
import NavbarNav from "./NavbarNav";
import Navbutton from "./Navbutton";

export function Nav() {
  const menus = [
    {
      id: 1,
      url: "/",
      linkname: "Inicio",
    },
    {
      id: 2,
      url: "/login",
      linkname: "Acceso",
    },
    {
      id: 3,
      url: "/register",
      linkname: "Registro",
    },
    {
      id: 4,
      url: "/contact",
      linkname: "Contacto",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <a className="nav-link" href="/">
          <img src="/img/logo-instaya.png" alt="InstaYa!" title="InstaYa!" />
        </a>
        &nbsp;
        <Navbutton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarNav menus={menus} />
        </div>
      </div>
    </nav>
  );
}
