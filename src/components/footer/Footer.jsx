import React from "react";
import { links } from "../links/links";

function Footer() {
  return (
    <footer className="py-3 my-4">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {links.map((link) => (
            <li className="nav-item" key={link.title}>
              <a href={link.path} className="nav-link px-2 text-body-secondary">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center text-body-secondary">© 2024 EliteBarry, Inc</p>
      </div>
    </footer>
  );
}

export default Footer;
