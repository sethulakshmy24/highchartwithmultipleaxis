import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const App: React.FC = () => {
  const chartOptions: Highcharts.Options = {
    chart: {
      zoomType: 'xy'
    } as any,
    title: {
      text: 'Review project'
    },
    xAxis: [{
      title: {
        text: 'X Axis Title'
      },
      categories: ['1', '2', '3', '4', '5', '6']
    }],
    yAxis: [
      { // Primary Y Axis - Red (left)
        labels: {
          style: { color: 'red' }
        },
        title: {
          text: '',
          style: { color: 'red' }
        },
        tickInterval: 1,
        opposite: false,
        tickLength: 10,
        tickWidth: 1,
        lineWidth: 1,
        lineColor: 'red',
        minorTickInterval: 1,
        minorTickLength: 5,
        minorTickWidth: 1,
        minorGridLineWidth: 0,
        gridLineWidth: 0,
      },
      { // Secondary Y Axis - Black (left)
        labels: {
          style: { color: 'black' }
        },
        title: {
          text: '',
          style: { color: 'black' }
        },
        opposite: false,
        tickInterval: 1,
        tickLength: 10,
        tickWidth: 1,
        lineWidth: 1,
        lineColor: 'black',
        minorTickInterval: 1,
        minorTickLength: 5,
        minorTickWidth: 1,
        minorGridLineWidth: 0,
        gridLineWidth: 0,
      },
      { // Third Y Axis - Green (right)
        labels: {
          style: { color: 'green' }
        },
        title: {
          text: '',
          style: { color: 'green' }
        },
        opposite: true,
        tickInterval: 1,
        tickLength: 10,
        tickWidth: 1,
        lineWidth: 1,
        lineColor: 'green',
        minorTickInterval: 1,
        minorTickLength: 5,
        minorTickWidth: 1,
        minorGridLineWidth: 0,
        gridLineWidth: 0,
      },
      { // Fourth Y Axis - Blue (right)
        labels: {
          style: { color: 'blue' }
        },
        title: {
          text: '',
          style: { color: 'blue' }
        },
        opposite: true,
        tickInterval: 1,
        tickLength: 10,
        tickWidth: 1,
        lineWidth: 1,
        lineColor: 'blue',
        minorTickInterval: 1,
        minorTickLength: 5,
        minorTickWidth: 1,
        minorGridLineWidth: 0,
        gridLineWidth: 0,
      }
    ],
    tooltip: {
      shared: true
    },
    legend: {
      enabled: true
    },
    series: [
      {
        name: 'Series 1 - Red',
        type: 'line',
        yAxis: 0,
        color: 'red',
        data: [1, 3, 5, 7, 9, 11]
      },
      {
        name: 'Series 2 - Black',
        type: 'line',
        yAxis: 1,
        color: 'black',
        data: [1, 2.8, 4.6, 6.4, 8.2, 10]
      },
      {
        name: 'Series 3 - Green',
        type: 'line',
        yAxis: 2,
        color: 'green',
        data: [1.2, 3.5, 6, 9, 15, 18]
      },
      {
        name: 'Series 4 - Blue',
        type: 'line',
        yAxis: 3,
        color: 'blue',
        data: [1, 2.5, 4, 6, 8, 10]
      }
    ]
  };

  return (
    <div className="container">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default App; 