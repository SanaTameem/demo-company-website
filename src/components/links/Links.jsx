import Link from "next/link";
import {links} from './links';
import './links.css';

function Links() {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {links.map((link) =>
        link.sub_categories.length > 0 ? (
          <li className="nav-item dropdown fw-fw-semibold" key={link.title}>
            <Link
              className="nav-link text-primary dropdown-toggle"
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
                  <Link key={sub.sub_name} className="dropdown-item" href={sub.sub_path}>
                    {sub.sub_name}
                  </Link>
                );
              })}
            </ul>
          </li>
        ) : (
          <li className="nav-item" key={link.title}>
            <Link className="nav-link text-primary" href={link.path}>
              {link.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default Links;
