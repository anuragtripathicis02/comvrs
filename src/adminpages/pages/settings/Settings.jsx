import { Link } from "react-router-dom"
import EyeIcons from "../../../assets/icons/EyeIcons"
import EditIcons from "../../../assets/icons/EditIcons"
import BackArrow from "../../../assets/icons/BackArrow"
import { Breadcrumb } from "react-bootstrap"

const Settings = () => {
  return (
    <div className="setting-sec">
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
            <Link to="" className="icon-back">
                <BackArrow />
            </Link>
            <div className="page-title-right">
                <h6 className="m-0 p-0">Settings</h6>
                <Breadcrumb className="m-0">
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item active>Settings</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            </div>
        </div>

        <div className="mb-4">
            <div className="head-box w-100 mb-2">
                <p className="m-0 font-w-600 fs-14 p-0 m-0">Master Entries</p>
            </div>
            <div className='find-sec'>
                <div className='find-card position-relative mb-2'>
                    <p className='fs-16 p-0 m-0 mb-1'>Services</p>
                    <span>Manage Types of Categories for orders and records</span>
                    <div className='icons'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                    </div>
                </div>
                <div className='find-card position-relative mb-2'>
                    <p className='fs-16 p-0 m-0 mb-1'>Privacy Policies</p>
                    <span>Last Modified : 02/12/2025 at 02:30PM</span>
                    <div className='icons'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                    </div>
                </div>
                <div className='find-card position-relative mb-2'>
                    <p className='fs-16 p-0 m-0 mb-1'>Refund Policies</p>
                    <span>Last Modified : 02/12/2025 at 02:30PM</span>
                    <div className='icons'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <div className="head-box w-100 mb-2">
                <p className="m-0 font-w-600 fs-14 p-0 m-0">Legal Policies</p>
            </div>
            <div className='find-sec'>
                <div className='find-card position-relative mb-2 pading-right-icons'>
                    <p className='fs-16 p-0 m-0 mb-1'>Terms & Conditions</p>
                    <span>Last Modified : 02/12/2025 at 02:30PM</span>
                    <ul className='icons p-0 m-0 list-unstyled d-flex align-items-center gap-3'>
                       <li>
                            <Link to="" className="eye-icons"> 
                                <EyeIcons />
                            </Link>
                       </li>
                       <li>
                            <Link to="" className="edit-icons">
                                <EditIcons />
                            </Link>
                       </li>
                    </ul>
                </div>
                <div className='find-card position-relative mb-2 pading-right-icons'>
                    <p className='fs-16 p-0 m-0 mb-1'>Privacy Policies</p>
                    <span>Last Modified : 02/12/2025 at 02:30PM</span>
                    <ul className='icons p-0 m-0 list-unstyled d-flex align-items-center gap-3'>
                       <li>
                            <Link to="" className="eye-icons"> 
                                <EyeIcons />
                            </Link>
                       </li>
                       <li>
                            <Link to="" className="edit-icons">
                                <EditIcons />
                            </Link>
                       </li>
                    </ul>
                </div>
                <div className='find-card position-relative mb-2 pading-right-icons'>
                    <p className='fs-16 p-0 m-0 mb-1'>Refund Policies</p>
                    <span>Last Modified : 02/12/2025 at 02:30PM</span>
                    <ul className='icons p-0 m-0 list-unstyled d-flex align-items-center gap-3'>
                       <li>
                            <Link to="" className="eye-icons"> 
                                <EyeIcons />
                            </Link>
                       </li>
                       <li>
                            <Link to="" className="edit-icons">
                                <EditIcons />
                            </Link>
                       </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings