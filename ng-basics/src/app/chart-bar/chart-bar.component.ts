import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

var colorL = '#000000', colorF = "#000000", prev = 'bar', c = 'bar', Fill = false, generate = true;

var MyData = {
    datasets: [ 
    {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        label: 'Dataset',
        fill: false,
        borderColor: colorL,
        backgroundColor: colorF,
    },
    ],
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
}

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})

export class ChartBarComponent implements OnInit {
  chart: any;
  data_bar: any;
  MyChart: any;
  CssL: any;
  CssF: any;
  In: any;
  element: any;
  cur: any;
  constructor() { }
  
  updateChartType(): void {
    // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
    this.element = document.getElementById("chartType2");
    c = this.element.value;
    if (prev != c) {
      if (this.element.value == 'fill') {
        MyData.datasets[0].fill = true;
        Fill = true;
        c = 'line';
      } else {
        MyData.datasets[0].fill = false;
        Fill = false;
      }
      this.cur = c;
      this.MyChart.destroy();
      this.MyChart = new Chart(this.chart, {
        type: this.cur,
        data: MyData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Month',
                color: '#911',
                font: {
                  family: 'Comic Sans MS',
                  size: 20,
                  weight: 'bold',
                  lineHeight: 1.2,
                },
                // padding: {top: 20, left: 0, right: 0, bottom: 0}
              }
            },
            y: {
              display: true,
              beginAtZero: true,
              title: {
                display: true,
                text: 'Value',
                color: '#911',
                font: {
                  family: 'Times',
                  size: 20,
                  style: 'normal',
                  lineHeight: 1.2
                },
                // padding: {top: 30, left: 0, right: 0, bottom: 0}
              }
            }
          }
        }
      });
      prev = this.element.value;
    }
  };

  Random (min: number, max: number) {
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
  }

  ChangeLineColor(event: any): void {
    const value = event.target.value;
    colorL = value;
    this.MyChart.data.datasets[0].borderColor = colorL;

    this.CssL = {
      'color': colorL
    };

    this.MyChart.update();
  }

  ChangeFillColor(event: any): void {
    const value = event.target.value;
    colorF = value;
    this.MyChart.data.datasets[0].backgroundColor = colorF;

    this.CssF = {
      'color': colorF
    };

    this.MyChart.update();
  }
  
  ngOnInit(): void {
    this.chart = document.getElementById('chart-bar');
    this.element = document.getElementById('textL');
    this.element.style.color = colorL;
    this.element = document.getElementById('inputL2');
    this.element.value = colorL;
    this.element = document.getElementById('textF');
    this.element.style.color = colorF;
    this.element = document.getElementById('inputF2');
    this.element.value = colorF;
    this.element = document.getElementById('chartType2');
    if (Fill == true) {
      this.cur = c;
      this.element.value = 'fill';
    } else {
      this.cur = c;
      this.element.value = this.cur;
    }

    this.CssF = {
      'color': colorF
    };

    this.CssL = {
      'color': colorL
    };

    if (generate == true) {
      for (let i = 0; i < 12; ++i) {
        MyData.datasets[0].data[i] = this.Random(0, 100);
      }
      generate = false;
    }

    this.data_bar = data_bar;

    Chart.register(...registerables);
    this.loadChart();
    this.MyChart.update();
    this.ChangeLineColor;
    this.ChangeFillColor;
  }

  loadChart(): void {
    if (c == 'fill') {
      this.cur = 'line';
      Fill = true;
    }
    this.MyChart = new Chart(this.chart, {
      type: this.cur,
      data: MyData,
      
      options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month',
              color: '#911',
              font: {
                family: 'Comic Sans MS',
                size: 20,
                weight: 'bold',
                lineHeight: 1.2,
              },
              // padding: {top: 20, left: 0, right: 0, bottom: 0}
            }
          },
          y: {
            display: true,
            beginAtZero: true,
            title: {
              display: true,
              text: 'Value',
              color: '#911',
              font: {
                family: 'Times',
                size: 20,
                style: 'normal',
                lineHeight: 1.2
              },
              // padding: {top: 30, left: 0, right: 0, bottom: 0}
            }
          }
        }
      },
    })
  }

}

function Random(min: number, max: number) {
  const r = Math.random()*(max-min+1) + min;
  return Math.floor(r)
}

var R = Random(1, 28);
var data_bar = "";
if (R < 10) {
  data_bar += "0"+R;
} else {
  data_bar += R;
}
data_bar += ":";

R = Random(1, 12);
if (R < 10) {
  data_bar += "0"+R;
} else {
  data_bar += R;
}
data_bar += ":";

data_bar += Random(2000, 2021);

export var var2:string = data_bar;