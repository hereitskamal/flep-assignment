import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const VerticalBarChart = () => {
  const options = {
    chart: {
      type: 'column',
    //   type: 'bar',
      width: 760    ,
      height: 360,
    },
    title:false,
    xAxis: {
        lineColor: 'transparent',
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      labels: {
        style: {
            color: 'black',
            fontWeight:'600',
            fontSize:'13px'
        }
    }
    },
    yAxis: {
      visible: false, // Hide y-axis
    },
    series: [
      { 
        states: {
            hover: {
                brightness: 0.5,
                color: 'hsl(245, 80%, 16%)',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            }},
          
        color:'rgb(221, 220, 235)',
        pointWidth:48,
        borderRadius:12,
        name: 'Data',
        data: [10, 10, 15, 30, 20, 10 , 10, 28, 18, 30, 15, 10],
      },
    ],
    dataLabels: {
        style: {
            fontWeight:600,
      }
    },
  
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {/* <div>
          <p>Overview</p>
          <p>Monthly Earning</p>
        </div>
        <div>
          <select>
            <option value="option1">Quarterly</option>
            <option value="option2">Monthly</option>
            <option value="option3">Yearly</option>
          </select>
        </div>
      </div>
      <div> */}

      <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default VerticalBarChart;
