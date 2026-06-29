import React from 'react'
import AdminuserTopFilter from './AdminuserTopFilter'
import CustomTable from './CustomTable'
import BackArrow from '../../../assets/icons/BackArrow'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

const AdminUsers = () => {
  return (
    <>
    
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
            <Link to="" className="icon-back">
                <BackArrow />
            </Link>
            <div className="page-title-right">
                <h6 className="m-0 p-0">Admin Users</h6>
                <Breadcrumb className="m-0">
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item active>Admin Users</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            </div>
        </div>

        <AdminuserTopFilter/>
        <CustomTable/>
    </>
  )
}

export default AdminUsers