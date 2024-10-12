import Image from "next/image";
import "./navbar.css";
import Links from "../links/Links";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src="/logo.jpg" alt="logo" width="70" height="60" />
        </a>
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
          <Links />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
