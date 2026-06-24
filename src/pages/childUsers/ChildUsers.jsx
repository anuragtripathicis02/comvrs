import React from "react";
import BackArrow from "../../assets/icons/BackArrow";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import ChildTable from "./ChildTable";

const ChildUsers = () => {
  return (
    <div>
      <div className="page-title">
        <div className="d-flex align-items-center gap-2">
          <Link to="" className="icon-back">
            <BackArrow />
          </Link>
          <div className="page-title-right">
            <h6 className="m-0 p-0">User Management</h6>
            <Breadcrumb className="m-0">
              <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
              <Breadcrumb.Item active>User Management</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="child-user-sec">
          <SearchFilter />
          <ChildTable />
      </div>
    </div>
  );
};

export default ChildUsers;
