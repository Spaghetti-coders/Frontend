import React, { Component } from "react";
import Chart from "react-apexcharts";

export class Area extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "Fuel Economy"
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        colors: [
          "#B2221F",
          "#D0241F",
          "#EB5408",

          "#EBDD00",
          "#E7E800",
          "#C5D900",
          "#B2CF00",
          "#66B73E"
        ],
        xaxis: {
          type: "category",
          title: {
            text: "Question Rate",
            style: {
              fontSize: "10px",
              color: "#8D8D90"
            }
          },
          labels: {
            style: {
              fontSize: "10px",
              opacity: "0.2",
              color: "#8D8D90"
            }
          },
          categories: []
        },
        plotOptions: {
          bar: {
            columnWidth: "70%",
            distributed: true
          }
        },
        stroke: {
          width: [0, 4]
        },
        legend: {
          verticalAlign: "top",
          containerMargin: {
            left: 35,
            right: 60
          }
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            title: {
              text: "% of Votes",
              style: {
                fontSize: "10px",
                color: "#8D8D90"
              }
            },
            labels: {
              formatter: function(value) {
                return value + " % ";
              },
              style: {
                fontSize: "10px",
                opacity: "0.2",
                color: "#8D8D90"
              }
            },
            axisBorder: {
              show: true
            }
          }
        ],
        title: {
          text: "Question Ratings",
          align: "center",
          style: {
            fontSize: "20px",
            color: "black"
          }
        },
        labels: ["0", "1", "2", "3", "4", "5"]
      },
      series: [
        {
          name: "Ratiings",
          data: [25, 33, 85, 90, 59, 86]
        }
      ]
    };
  }

  render() {
    return (
      <div className="box">
        <Chart
          style={{ marginTop: "22px" }}
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="380"
        />
      </div>
    );
  }
}

export default Area;
