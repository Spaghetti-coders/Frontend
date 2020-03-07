import React, { Component } from "react";
import Chart from "react-apexcharts";

class Grouped extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "Fuel Economy",
          type: "bar"
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        colors: [
          "#B2221F",

          "#F1AA08",
          "#FDCF00",
          "#C5D900",
          "#B2CF00",
          "#66B73E"
        ],
        xaxis: {
          type: "category",
          title: {
            text: "Rating Number",
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
          text: "Based On Ratings",
          align: "center",
          style: {
            fontSize: "20px",
            color: "black"
          }
        },
        labels: ["1-2", "3-4", "5-6", "6-9", "10"]
      },
      series: [
        {
          name: "Ratings",
          data: [10, 30, 45, 35, 25]
        },
        {
          name: "Ratings",
          data: [30, 40, 25, 55, 65]
        }
      ]
    };
  }

  render() {
    return (
      <div className="box ">
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

export default Grouped;
