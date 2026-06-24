import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BackArrow from "../../assets/icons/BackArrow";
import CardInfo from './CardInfo';
import BillingHistory from './BillingHistory';
import BillingHistoryTable from './BillingHistoryTable';

const InvoiceBilling = () => {
  return (
    
    <div>
      <div className="page-title">
        <div className="d-flex align-items-center gap-2">
          <Link to="" className="icon-back">
            <BackArrow />
          </Link>
          <div className="page-title-right">
            <h6 className="m-0 p-0">Invoice & Billing</h6>
            <Breadcrumb className="m-0">
              <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
              <Breadcrumb.Item active>Invoice & Billing</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <CardInfo />
      </div>
      <div className=''>
        <BillingHistory />
      </div>
      <div>
        <BillingHistoryTable />
      </div>
    </div>
  )
}

export default InvoiceBilling