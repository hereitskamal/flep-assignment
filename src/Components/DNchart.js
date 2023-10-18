import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = () => {
  const chartData = [
    { name: 'Category 1', y: 20 },
    { name: 'Category 2', y: 70, sliced: true, selected: true },
    { name: 'Category 3', y: 160 },
  ];

  const options = {
    chart: {
      type: 'pie',
      marginLeft:30,
      width:260,
      height:240,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
    },
    title: false,
    plotOptions: {
      pie: {
        
        innerSize: '40%', 
        dataLabels: {
          enabled: false, // Disable data labels
        },
      },
    },
    credits: { enabled: false },
    series: [
      {
        name: 'Donut Chart Data',
        data: chartData,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default DonutChart;

