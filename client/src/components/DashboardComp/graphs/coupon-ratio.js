import React from 'react';
import Chart from 'react-apexcharts';







function RadialChart () {
  let series = [71, 63, 77];

  var optionsCircle4 = {
    chart: {
      type: 'radialBar',
      height: 350,
      width: 380,
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: true,
        hollow: {
          margin: 5,
          size: '48%',
          background: 'transparent',
  
        },
        track: {
          show: false,
        },
        startAngle: -180,
        endAngle: 180
  
      },
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['June', 'May', 'April'],
    legend: {
      show: true,
      floating: true,
      position: 'right',
      offsetX: 70,
      offsetY: 240
    },
    colors:['rgb(175, 89, 255)', 'rgb(243, 0, 0)', 'rgb(19, 255, 255)']
  }

  return (


      <div class="col-md-7">
        <div class="radial-charttt box shadow mt-4">
          <div className='radial-chart-header'>
            <p>COUPON SHARE RATIO</p>
          </div>
          <Chart options={optionsCircle4} series={series} type="radialBar" height={380} />
        </div>
      </div>


  );
}

export default RadialChart;