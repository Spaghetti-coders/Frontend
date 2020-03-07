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
        <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item  ">
                <a className="nav-link  login_btn text-dark" href="# ">
                  Products
                </a>
              </li>

              <li className="nav-item  ">
                <a className="nav-link  login_btn text-dark" href="# ">
                  Resources
                </a>
              </li>
            </ul>

            {localStorage.getItem("Token") && (
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
            )}

            {localStorage.getItem("Token") ? (
              ""
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item  ">
                  <a
                    className="nav-link  login_btn text-dark"
                    href="#c "
                    style={{
                      color: "rgb(183, 28, 28, 0.8)",
                      marginRight: "0px"
                    }}
                  >
                    Login
                  </a>
                </li>

                <li className="nav-item  ">
                  <a
                    className="nav-link  text-dark"
                    href="#  "
                    rel="modal:open"
                  >
                    Signup
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;