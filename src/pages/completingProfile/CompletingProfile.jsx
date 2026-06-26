import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import CompleteYourProfile from './CompleteYourProfile';
import QuickAnalytics from './QuickAnalytics';
import Empty from './Empty';

const CompletingProfile = () => {
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
               <CompleteYourProfile />
            </div>
            <div className='mb-4'>
                <QuickAnalytics />
            </div>
            <div className='empty-sec'> 
                <div className="head-box w-100 mb-2">
                    <p className="m-0 font-w-600 fs-14">My Orders</p>
                </div>
                <Empty />
            </div>
        </div>

    </div>
  )
}

export default CompletingProfile