import React from "react";
import Chart from "chart.js";

class GraphIpc extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  async componentDidUpdate() {
    this.myChart.data.labels = this.dateList();
    this.myChart.data.datasets[0].data = this.priceList();
    this.myChart.update();
  }

  async componentDidMount() {
    const minPrice = await this.minPrice();
    await this.createChart(minPrice);
  }

  minPrice = () => {
    let minPrice = 0;
    this.props.data.map((d) => {
      if (minPrice === 0 || minPrice > d.price) {
        minPrice = d.price;
      }
    });
    return minPrice;
  };

  priceList = () => {
    let initPrice = 0;
    const prices = this.props.data.map((d) => {
      if (initPrice === 0 || initPrice !== d.price) {
        initPrice = d.price;
        return d.price;
      } else {
        return null;
      }
    });
    var filtered = prices.filter(Boolean);
    return filtered;
  };
  dateList = () => {
    let initPrice = 0;
    const labels = this.props.data.map((d) => {
      if (initPrice === 0 || initPrice !== d.price) {
        initPrice = d.price;
        return new Date(d.date);
      } else {
        return null;
      }
    });
    var filtered = labels.filter(Boolean);
    return filtered;
  };

  createChart = (minPrice) => {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "line",
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "series",
              time: {
                unit: "second",
              },
              ticks: {
                source: "auto",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: minPrice,
                callback: function (value, index, values) {
                  return `$  ${value}`;
                },
              },
            },
          ],
        },
      },
      data: {
        labels: this.dateList(),
        datasets: [
          {
            label: this.props.title,
            data: this.priceList(),
            fill: "none",
            backgroundColor: this.props.color,
            pointRadius: 2,
            borderColor: this.props.color,
            borderWidth: 1,
            lineTension: 0,
          },
        ],
      },
    });
  };

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
export default GraphIpc;
