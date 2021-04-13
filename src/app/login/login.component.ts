import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'container',
      type: 'spline',
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      backgroundColor: 'transparent',
    },

    title: {
      style: {
        display: 'none',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      line: {
        /* or spline, area, series, areaspline etc.*/
        marker: {
          enabled: false,
        },
      },
    },
    xAxis: {
      visible: false,
      minPadding: 0,
      maxPadding: 0,
      categories: [
        '1920s',
        '1930s',
        '1940s',
        '1950s',
        '1960s',
        '1970s',
        '1980s',
        '1990s',
        '2000s',
      ],
    },
    yAxis: {
      visible: false,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        return (
          'Movies containing the word: <b>' +
          this.series.name +
          '</b><br/>' +
          this.x +
          ': ' +
          this.y +
          ' nominations'
        );
      },
    },
    series: [
      {
        name: '',
        data: [
          5,
          10,
          20,
          6,
          8,
          12,
          3,
          1,
          2,
          5,
          10,
          20,
          6,
          8,
          12,
          3,
          1,
          2,
          5,
          10,
          20,
          6,
          8,
          12,
          3,
          1,
          2,
        ],
        marker: false,
        title: false,
        lineColor: '#538198',
      },
    ],
  };
  viewsChartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'container',
      type: 'spline',

      backgroundColor: 'transparent',
    },
    title: {
      style: {
        display: 'none',
      },
    },
    yAxis: {
      title: {
        text: '',
      },
      gridLineWidth: 1,
    },
    xAxis: {
      gridLineWidth: 1,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      line: {
        /* or spline, area, series, areaspline etc.*/
        marker: {
          enabled: false,
        },
      },
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        data: [
          [0, 15],
          [10, -50],
          [20, -56.5],
          [30, -46.5],
          [40, -22.1],
          [50, -2.5],
          [60, -27.7],
          [70, -55.7],
          [80, -76.5],
        ],
        marker: false,
        title: false,
        lineColor: '#538198',
        lineWidth: 4,
      },
    ],
  };
  btnClick = function () {
    this.router.navigateByUrl('/event-listing');
  };

  ngOnInit(): void {}
}
