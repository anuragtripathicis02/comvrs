import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import QuickAnalytics from './QuickAnalytics';
import MyOrders from './MyOrders';
import MyOrdersTable from './MyOrdersTable';

const Customers = () => {
  return (
    <div>
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
                <div className="page-title-right">
                    <h5 className="m-0 p-0">Hello There!</h5>
                    <h6 className='m-0 p-0'>Good Morning</h6>
                </div>
            </div>
        </div>
        
        <div className='dashboard-sec'>
            <div className='mb-4'>
                <QuickAnalytics />
            </div>
            <div className='mb-0'>
                <MyOrders />
                <MyOrdersTable />
            </div>
        </div>

    </div>
  )
}

export default Customers