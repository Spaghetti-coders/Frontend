import React, { Component } from "react";
import CircleChart from "./CircleChart";
import Rating from "./Rating";
import TimeLine from "./TimeLine";

export class Main extends Component {
  render() {
    return (
      <div className="" style={{ marginTop: "80px" }}>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-4">
            <CircleChart />
          </div>
          <div className="col-md-8">
            <Rating />
          </div>
        </div>

        <div className="time_line">
          <TimeLine />
        </div>
      </div>
    );
  }
}

export default Main;
