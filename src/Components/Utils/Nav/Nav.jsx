import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Styles
import "./Nav.styles.css";

const Nav = ({ setItemsPerPage, isTheme, setIsTheme }) => {
  const navigate = useNavigate();

  const handleTheme = (isTheme) => {
    setIsTheme(!isTheme);
    if (isTheme) {
      sessionStorage.setItem("theme", "Dark");
    } else {
      sessionStorage.setItem("theme", "Light");
    }
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <button className="comeback" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
          </svg>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" />
          </svg>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
            <span className="settings">
              <b>Settings</b>
            </span>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <div
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className="container-nav-text"
                >
                  <Link to="/" className="nav-text active" aria-current="page">
                    <b>Login</b>
                  </Link>
                </div>
                <div
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  className="container-nav-text"
                >
                  <Link
                    to="/home"
                    className="nav-text active"
                    aria-current="page"
                  >
                    <b>Pokemones</b>
                  </Link>
                </div>
                <div>
                  <p className="text-center title-theme ">
                    <b>Theme</b>
                  </p>
                  <div className="container-switch switch-button-theme">
                    <span className="light-theme">Light</span>
                    <input
                      type="checkbox"
                      className="switch-button switch-button__checkbox-theme"
                      id="switch-label2"
                      onClick={() => handleTheme(isTheme)}
                    />

                    <label
                      htmlFor="switch-label2"
                      className="switch-button__label-theme"
                    ></label>
                    <span className="dark-theme">Dark</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown" aria-label="Close">
                  <button
                    className="btn btn-secondary dropdown-toggle pokemones-per-page"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>Items per page</b>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <div
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="container-nav-text"
                      >
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => setItemsPerPage(4)}
                        >
                          4 Pokemones
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="container-nav-text"
                      >
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => setItemsPerPage(8)}
                        >
                          8 Pokemones
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="container-nav-text"
                      >
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => setItemsPerPage(12)}
                        >
                          12 Pokemones
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="container-nav-text"
                      >
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => setItemsPerPage(16)}
                        >
                          16 Pokemones
                        </button>
                      </div>
                    </li>
                    <li>
                      <div
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="container-nav-text"
                      >
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() => setItemsPerPage(20)}
                        >
                          20 Pokemones
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
