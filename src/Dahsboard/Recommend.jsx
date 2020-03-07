import React, { Component } from "react";
import Chart from "react-apexcharts";

export class Recommend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Communication",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Deadlines",
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: "Business",
          data: [44, 76, 78, 13, 43, 10]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "radar",
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: "Recommendation",
          align: "center",
          style: {
            fontSize: "20px",
            color: "black"
          }
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ["Communication", "Deadline", "Business"]
        }
      }
    };
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-5 box">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              height="400"
            />
          </div>
          <div className="col-md-7"></div>
        </div>
      </div>
    );
  }
}

export default Recommend;
