import React from 'react';
import Chart from 'react-apexcharts';

function NetRevenue () {

  let series = [
    {
      name: 'Sales',
      data: [42500, 80413, 32540, 78946, 137418, 161412, 142461, 151812, 113417, 167500]
    },
    {
      name: 'Net Revenue',
      data: [4318, 6755, 7746, 52314, 74312, 52117, 68465, 98742, 103214, 112314]
    }
  ];
  
  let options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      // type: 'datetime',
      categories: [ '2018 Q1' ,'2018 Q2','2018 Q3','218 Q4','2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4', '2020 Q1', '2020 Q2']
    },
    colors:['rgb(54, 247, 118)', 'rgb(6, 24, 180)'],
    tooltip: {
      x: {
        // format: 'dd/MM/yy HH:mm'
        // format: 'string'
      }
    }
  }

  return (
    <div id="chart">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
}

export default NetRevenue;