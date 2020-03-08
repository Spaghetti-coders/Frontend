import React, { Component } from "react";
import CircleChart from "./CircleChart";
import Rating from "./Rating";
import TimeLine from "./TimeLine";
import Recommend from "./Recommend";
import Grouped from "./Group";
import Area from "./Area";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ""
    };
  }

  async onChange(e) {
    await this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="row" style={{ width: "100%" }}>
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item  ">
              <h4 style={{ left: " 30px", position: "relative" }}>
                Hi There !!
              </h4>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto ">
            <li className="nav-item  ">
              <select className="form-control" id="donn">
                <option value="" disabled hidden selected>
                  Filter
                </option>
                <option value="client">Client</option>
                <option value="compnay">Company</option>
                <option value="project">Project</option>
                <option value="general">General</option>
                {/* <option value=""></option> */}
              </select>
            </li>
          </ul>
        </div>
        <div className="" style={{ marginTop: "20px" }}>
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-4">
              <CircleChart />
            </div>
            <div className="col-md-8">
              <Rating />
            </div>
          </div>

          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-7">
              <Grouped />
            </div>
            <div className="col-md-5">
              <Area />
            </div>
          </div>

          {/* <div className="time_line">
            <TimeLine />
          </div> */}
          <div className="radar_line">
            <Recommend />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
