import React, { Component } from "react";
import Chart from "react-apexcharts";

const colors = [];
export class TimeLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Rating",
          type: "column",
          data: [10, 6.4, 3.6, 4.7, 9.4, 3.6, 6.6, 7.2, 1.6, 2.6, 8.3]
        },
        {
          name: "Rank",
          type: "line",
          data: [10, 6.4, 3.6, 4.7, 9.4, 3.6, 6.6, 7.2, 1.6, 2.6, 8.3]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "line"
        },
        colors: ["#66B73E", "#E7E800"],

        stroke: {
          width: [0, 4]
        },

        title: {
          text: "Ranking Source",
          align: "center",
          style: {
            fontSize: "20px",
            color: "black"
          }
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },

        labels: [
          "Jan ",
          "Feb ",
          "March ",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Noc",
          "Dec"
        ],
        xaxis: {
          type: "category",
          title: {
            text: "Rating Number",
            style: {
              fontSize: "10px",
              color: "#8D8D90"
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "70%",
            distributed: true
          },
          line: {
            distributed: true
          }
        },
        yaxis: [
          {
            title: {
              text: "Website Blog"
            }
          },
          {
            opposite: true,
            title: {
              text: "Social Media"
            }
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="box" style={{ marginTop: "20px" }}>
        <Chart
          //   style={{ marginTop: "22px" }}
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="390"
        />
      </div>
    );
  }
}

export default TimeLine;
