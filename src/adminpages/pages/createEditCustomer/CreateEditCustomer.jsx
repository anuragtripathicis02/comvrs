
import { Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/BackArrow";
import { Breadcrumb } from "react-bootstrap";
import AdministratorInfo from "./AdministratorInfo";
import CompanyInfo from "./CompanyInfo";
import PaymentInfo from "./PaymentInfo";
import ChildUserDetails from "./ChildUserDetails";

const CreateEditCustomer = () => {
  return (
    <div>
      <div className="page-title">
        <div className="d-flex align-items-center gap-2">
          <Link to="" className="icon-back">
            <BackArrow />
          </Link>
          <div className="page-title-right">
            <h6 className="m-0 p-0">Create Customer</h6>
            <Breadcrumb className="m-0">
              <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
              <Breadcrumb.Item href="/clients"> Customers </Breadcrumb.Item>
              <Breadcrumb.Item active>Create Customers</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <AdministratorInfo />
      </div>
      <div className="mb-4">
        <CompanyInfo />
      </div>
      <div className="mb-4">
        <PaymentInfo />
      </div>
      <div className="mb-4">
        <ChildUserDetails />
      </div>
    </div>
  );
};

export default CreateEditCustomer;
