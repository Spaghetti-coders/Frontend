import React, { Component } from "react";
import Chart from "react-apexcharts";

const colors = [];
export class TimeLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Evalution",

          data: [10, 6.4, 3.6, 4.7, 9.4, 3.6, 6.6, 7.2, 1.6, 2.6, 8.3, 9.3]
        }
        // {
        //   name: "Rank",
        //   type: "line",
        //   data: [10, 6.4, 3.6, 4.7, 9.4, 3.6, 6.6, 7.2, 1.6, 2.6, 8.3]
        // }
      ],
      options: {
        chart: {
          height: 350,
          type: "bar"
        },

        stroke: {
          width: [0, 4]
        },
        colors: [
          "#66B73E",
          "#EBDD00",
          "#EC7200",
          "#F1AA08",
          "#B2CF00",
          "#EC7200",
          "#EBDD00",
          "#E7E800",
          "#D0241F",
          "#EB5408",
          "#C5D900",
          "#B2CF00"
        ],

        title: {
          text: "Evalution: Month",
          align: "center",
          style: {
            fontSize: "20px",
            color: "black"
          }
        },
        dataLabels: {
          enabled: true,
          position: "top",
          style: {
            colors: ["#B2CF00"]
          },
          offsetX: 30,
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
            text: "Month",
            style: {
              fontSize: "14px",
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
              text: "Score"
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
          type="bar"
          height="390"
        />
      </div>
    );
  }
}

export default TimeLine;
