import React, { Component } from "react";
import wave from "../img/wave.png";
import back from "../img/bg.svg";
import avatar from "../img/avatar.svg";
import "./Index.css";
import Swal from "sweetalert2";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const token = "tjdhd96826492749026269296428692904277272";
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "admin" && password === "admin") {
      Swal.fire({
        title: "Login",
        icon: "success",
        text: "You Successfully loggedin",
        showConfirmButton: false,
        timer: 3000
      });
      localStorage.setItem("Token", token);
      this.props.history.push("/dashboard/");
      window.location.reload(1);
    } else {
      Swal.fire({
        title: "Login Error",
        icon: "error",
        text: "Check your email and password !!",
        showConfirmButton: false,
        timer: 3000
      });
    }
  }

  async onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <img class="wave" src={wave} alt="wave" />
        <div class="container">
          <div class="img">
            <img src={back} alt="background" />
          </div>
          <div class="login-content">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <img src={avatar} alt="user avatar" />
              <h2 class="title">Welcome</h2>
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  <h5 style={{ top: "-5px" }}>Username</h5>
                  <input
                    type="text"
                    class="input"
                    name="username"
                    // value={this.state.username}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
              </div>
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>

                <div class="div">
                  <h5 style={{ top: "-5px" }}>Password</h5>
                  <input
                    class="input"
                    name="password"
                    // value={this.state.password}
                    onChange={this.onChange.bind(this)}
                    type="password"
                  />
                </div>
              </div>

              {/* <a href="#">Forgot Password?</a> */}
              <input type="submit" class="btnn" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
