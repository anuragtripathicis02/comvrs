
import ServiceTabs from './ServiceTabs'
import ProfileCard from './ProfileCard'
import BackArrow from '../../../assets/icons/BackArrow'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
const CustomerView = () => {
    return (
        <>
        
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

            <ProfileCard/>
            <ServiceTabs/>
        </>
    )
}

export default CustomerView