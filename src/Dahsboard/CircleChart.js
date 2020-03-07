import React, { Component } from "react";
import Chart from "react-apexcharts";

// const colors = ["#1ef500"];
const max = 3000;
function valueToPercent(value) {
  return (value * 100) / max;
}
export class CircleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: "radialBar",
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            dataLabels: {
              show: false
            },
            hollow: {
              margin: 0,
              size: "65%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#FFFFFF",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: 60,
                show: true,
                color: "#66B73E",
                position: "bottom",
                fontSize: "25px"
              },
              value: {
                formatter: function(val) {
                  return parseInt(val) / 10;
                },
                color: "#111",
                marginTop: "10px",
                fontSize: "66px",

                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#B2221F", "#66B73E"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["NPS score"]
      },
      series: [75]
    };
  }

  render() {
    return (
      <div className="box">
        <Chart
          style={{ marginTop: "22px" }}
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height="300"
        />
        <div className="grade text-center" style={{ marginTop: "-45px" }}>
          <p className="prcentage_part">Good : 80%</p>
          <p className="prcentage_part">Passive : 80%</p>
          <p className="prcentage_part">Something : 80%</p>
        </div>
      </div>
    );
  }
}

export default CircleChart;
