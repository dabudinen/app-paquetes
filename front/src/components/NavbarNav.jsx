import React from "react";

export default function NavbarNav({ menus = [] }) {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {menus.map((menu) => (
        <li key={menu.id}>
          <a className="nav-link" href={menu.url}>
            {menu.linkname}
          </a>
        </li>
      ))}
    </ul>
  );
}
