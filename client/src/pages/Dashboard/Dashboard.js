import React from 'react';
import Layout from '../../layout/Layout';

import './Dashboard.css';

import Chartboxes from '../../components/DashboardComp/chartboxes/clicks-coupons-orders-sales';
import CouponRatio from '../../components/DashboardComp/graphs/coupon-ratio';
import NetRevenue from '../../components/DashboardComp/graphs/graph-net-revenue';
import SalesOrders from '../../components/DashboardComp/graphs/graph-orders';
import DbTable from '../../components/DashboardComp/table/db-table';

        

        
        
const Dashboard = () => {

  return (
    <Layout>
      <>
        <div className='dashboard'>
          <h2>Dashboard</h2>
        </div>
        <div className='four-chartboxes'>
          <Chartboxes />
        </div>
        <div className='area-and-radial-container'>
            <div className='radial-chart-container'>
              <CouponRatio />
            </div>
            <div>
              <SalesOrders />
            </div>

        </div>

        <div className='sales-graph-container'>
          <NetRevenue />
        </div>

        <div className='database'>
          <h2>Database</h2>
        </div>
        <div className='table-container'>
          <DbTable />
        </div>
      </>
    </Layout>
  );
};


export default Dashboard;