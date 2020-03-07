import React, { Component } from "react";
import "../index.css";
// import Logo from "../img/Logo.png";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.removeItem("Token");
    window.location.href = "/";
  }
  render() {
    return (
      <div className="container1">
        {localStorage.getItem("Token") ? (
          <nav className="navbar navbar-expand-lg navbar-dark  fixed top-header">
            <a
              className="navbar-brand"
              href="/"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Logo
            </a>
            <button
              className="navbar-toggler font-weight-bold text-white  "
              style={{ background: "#b71c1c", padding: "2px", width: "70px" }}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon  "></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item  ">
                  <a className="nav-link  login_btn text-dark" href="# ">
                    Create
                  </a>
                </li>

                <li className="nav-item  ">
                  <a className="nav-link  login_btn text-dark" href="# ">
                    Automate
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item  ">
                  <a
                    className="nav-link  text-dark"
                    href="# "
                    onClick={this.onLogout}
                    style={{
                      color: "rgb(183, 28, 28, 0.8)",
                      marginRight: "0px"
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Header;
