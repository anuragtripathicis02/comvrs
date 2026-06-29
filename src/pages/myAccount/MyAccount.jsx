import React from 'react'
import BackArrow from '../../assets/icons/BackArrow'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import ProfileImageUpload from '../../comonComponent/ProfileImageUpload'
import AdministratorInfo from './AdministratorInfo'
import CompanyInfo from './CompanyInfo'
import PaymentInfo from './PaymentInfo'

const MyAccount = () => {
  return (
    <div className='my-account-sec'>
      <div className="page-title">
        <div className="d-flex align-items-center gap-2">
          <Link to="" className="icon-back">
            <BackArrow />
          </Link>
          <div className="page-title-right">
            <h6 className="m-0 p-0">My Account</h6>
            <Breadcrumb className="m-0">
              <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
              <Breadcrumb.Item active>My Account</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className='account-profile'>
        <div className='mb-4'>
          <ProfileImageUpload />
        </div>
        <div className='mb-4'>
          <AdministratorInfo />
        </div>
        <div className='mb-4'>
          <CompanyInfo />
        </div>
        <div className='mb-4'>
          <PaymentInfo />
        </div>
      </div>
    </div>
  )
}

export default MyAccount