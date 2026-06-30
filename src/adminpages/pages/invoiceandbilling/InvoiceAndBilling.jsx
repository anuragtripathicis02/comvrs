import BackArrow from '../../../assets/icons/BackArrow'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import BillingHistoryTable from "./BillingHistoryTable"
import MyOrders from './MyOrders'

const InvoiceAndBilling = () => {
  return (
    <>
     <div className="page-title">
            <div className="d-flex align-items-center gap-2">
            <Link to="" className="icon-back">
                <BackArrow />
            </Link>
            <div className="page-title-right">
                <h6 className="m-0 p-0">Invoice & Billing</h6>
                <Breadcrumb className="m-0">
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item active>Invoice & billing</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            </div>
       </div>
       <MyOrders/>
        <BillingHistoryTable/>
    </>
  )
}

export default InvoiceAndBilling