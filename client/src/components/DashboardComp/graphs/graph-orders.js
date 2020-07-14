import React from 'react';
import Chart from 'react-apexcharts';



function Orders () {
  let series = [
    {
      name: "Coupons",
      data: [4, 66, 41, 59, 117, 846, 413, 1314, 1112, 1675]
    },
    {
      name: "Orders",
      data: [12, 66, 41, 59, 115, 745, 1382, 1143, 1517, 1758]
    }
  ];
  var options = {
    chart: {
      height: 380,
      type: 'area',
      stacked: false,
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      categories: [ '2018 Q1' ,'2018 Q2','2018 Q3','218 Q4','2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4', '2020 Q1', '2020 Q2'],
    },
    tooltip: {
      followCursor: true
    },
    fill: {
      opacity: 1,
    },
    dataLabels: {
      enabled: false
    },
    toolbar: {
      enabled: false
    },
    colors:['rgb(143, 26, 252)', 'rgb(87, 104, 255)']
  
  }

  return (


      <div class="area-charttt col-md-7">
        <div class="box shadow mt-4">
          <Chart options={options} series={series} type="area" height={380} />
        </div>
      </div>


  );
}

export default Orders;