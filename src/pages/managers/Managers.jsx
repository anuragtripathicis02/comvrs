import React from "react";
import BackArrow from "../../assets/icons/BackArrow";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import ManagersTabs from "./ManagersTabs";

const Managers = () => {
  return (
    <div>
      <div className="page-title">
        <div className="d-flex align-items-center gap-2">
          <Link to="" className="icon-back">
            <BackArrow />
          </Link>
          <div className="page-title-right">
            <h6 className="m-0 p-0">Managerial Access</h6>
            <Breadcrumb className="m-0">
              <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
              <Breadcrumb.Item active>Managers</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="child-user-sec">
          <SearchFilter />
          <ManagersTabs />
      </div>
    </div>
  )
}

export default Managers