
import CustomTable from './CustomTable'
import FilterTop from './FilterTop'

import BackArrow from '../../../assets/icons/BackArrow'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

const ManageProducts = () => {
  return (
    <>
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
            <Link to="" className="icon-back">
                <BackArrow />
            </Link>
            <div className="page-title-right">
                <h6 className="m-0 p-0">Manage Products</h6>
                <Breadcrumb className="m-0">
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item active>Manage Products</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            </div>
       </div>
        <FilterTop/>
        <CustomTable/>
    </>
  )
}

export default ManageProducts