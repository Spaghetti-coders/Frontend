import React, { Component } from "react";
import Chart from "react-apexcharts";

export class Recommend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Communication",
          data: [100, 50, 30]
        }
        // {
        //   name: "Deadlines",
        //   data: [20, 30, 40, 80, 20, 80]
        // },
        // {
        //   name: "Business",
        //   data: [44, 76, 78, 13, 43, 10]
        // }
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
      <div style={{ marginTop: "25px" }}>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-5 box comment-tab11">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              height="400"
            />
          </div>
          <div className="col-md-7 comment-tab">
            <div className="box" style={{ width: "100%" }}>
              <h5
                className="font-weight-bold text-center"
                style={{ marginTop: "30px" }}
              >
                <span className="float-left">
                  <select className="form-control " id="donn">
                    <option value="" disabled hidden selected>
                      Filter comment
                    </option>
                    <option value="client">General</option>
                    <option value="compnay">Timing</option>
                    <option value="project">Communication</option>
                    <option value="general">Business</option>
                  </select>
                </span>
                Recommend Comments
              </h5>

              <div className="comment ">
                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 9</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>

                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 9</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>
                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 8</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>
                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 8</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>
                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 7</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>
                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 6</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>
                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 5</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>
                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 4</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>
                <p className="box text-left" style={{ padding: "15px" }}>
                  <span style={{ opacity: "0.7" }}>March 3</span> &nbsp; |
                  &nbsp; Heellelelellelelelellelelelelellelelellele
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
