import React from "react";
import BackArrow from "../../../assets/icons/BackArrow";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import ViewInvoiceTop from "./ViewInvoiceTop";
import CompletedOrders from "./CompletedOrders";
import RejectedOrders from "./RejectedOrders";

const ViewInvoice = () => {
  return (
    <div>
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
                <Link to="" className="icon-back">
                    <BackArrow />
                </Link>
                <div className="page-title-right">
                    <h6 className="m-0 p-0">View Invoice</h6>
                    <Breadcrumb className="m-0">
                        <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                        <Breadcrumb.Item href="/invoice-billing"> Invoice & Billing  </Breadcrumb.Item>
                        <Breadcrumb.Item active>INID-#448337</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </div>
        <div>
            <ViewInvoiceTop />
            <CompletedOrders />
            <RejectedOrders />
        </div>
    </div>
  );
};

export default ViewInvoice;
