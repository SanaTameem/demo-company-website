import styles from "./links.module.css";
import Link from "next/link";
import {links} from './links';

function Links() {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {links.map((link) =>
        link.sub_categories.length > 0 ? (
          <li className="nav-item dropdown" key={link.title}>
            <Link
              className="nav-link dropdown-toggle"
              href={link.path}
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {link.title}
            </Link>

            <ul className="dropdown-menu">
              {link.sub_categories.map((sub) => {
                return (
                  // Added return statement here
                  <Link key={sub} className="dropdown-item" href={link.path}>
                    {sub}
                  </Link>
                );
              })}
            </ul>
          </li>
        ) : (
          <li className="nav-item" key={link.title}>
            <Link className="nav-link" href={link.path}>
              {link.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default Links;
