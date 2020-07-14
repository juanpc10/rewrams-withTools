import React from 'react';
import Chart from 'react-apexcharts';

import './clicks-coupons-orders-sales.css';




function Chartboxes () {
  
  let  seriesClicks = [{
    data: [25, 165, 356, 874, 2567, 9765, 15400, 12346, 18714, 24812]
  }];
  let  seriesShares = [{
    data: [4, 66, 41, 59, 117, 846, 413, 1314, 1112, 1675]
  }];
  let  seriesOrders = [{
    data: [12, 66, 41, 59, 115, 745, 1382, 1143, 1517, 1758]
  }];
  let  seriesSales = [{
    data: [42500, 80413, 32540, 78946, 137418, 161412, 142461, 151812, 113417, 167500]
  }];

  let clicks = {
    chart: {
      id: 'spark1',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    colors: ['#fff'],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }

  let shares = {
    chart: {
      id: 'spark1',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    colors: ['#fff'],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }

  let orders = {
    chart: {
      id: 'spark1',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    colors: ['#fff'],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }

  let sales = {
    chart: {
      id: 'spark1',
      group: 'sparks',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    colors: ['#fff'],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }

  return (
  <div className='sparkboxes-container'>
    <div class="all-chartboxes-container row sparkboxes mt-4">

      <div class="boxes col-md-3">
        <div class="box box1">
          <div class="details">
            <h3>24,812</h3>
            <h4>CLICKS</h4>
          </div>          
            <Chart options={clicks} series={seriesClicks} type="line" height={80} />          
        </div>
      </div>

      <div class="boxes col-md-3">
        <div class="box box2">
          <div class="details">
            <h3>1,675</h3>
            <h4>SHARES</h4>
          </div>
            <Chart options={shares} series={seriesShares} type="line" height={80} />
        </div>
      </div>

      <div class="boxes col-md-3">
        <div class="box box3">
          <div class="details">
            <h3>1,758</h3>
            <h4>ORDERS</h4>
          </div>
            <Chart options={orders} series={seriesOrders} type="line" height={80} />
        </div>
      </div>

      <div class="boxes col-md-3">
        <div class="box box4">
          <div class="details">
            <h3>$167,500</h3>
            <h4>SALES</h4>
          </div>
            <Chart options={sales} series={seriesSales} type="line" height={80} />
        </div>
      </div>

    </div>
  </div>
  );
}


export default Chartboxes;
