import React, { useState } from 'react'
import CompanyInfoModal from '../../modalComponent/CompanyInfoModal'
import PaymentInfoModal from '../../modalComponent/PaymentInfoModal';

const CompleteYourProfile = () => {
    
    const [showCompanyInfo, setShowCompanyInfo] = useState(false);    
    const [showPaymentInfo, setShowPaymentInfo] = useState(false);    
    const handleCompanyInfo = () => {
        setShowCompanyInfo(true);
    };
    const handlePaymentInfo = () => {
        setShowPaymentInfo(true);
    };
    
    const handleCloseAll = () => {
        setShowCompanyInfo(false);
        setShowPaymentInfo(false);
    };
    

  return (
    <>
        <div className='card-profile-sec yellow-btn d-flex align-items-center flex-md-nowrap flex-wrap gap-3 p-20 radius-12'>
            <div className='test-box'>
                <h6 className='m-0 p-0 mb-1'>Complete Your Profile</h6>
                <p className='p-0 m-0'>Please enter your company details and confirm your payment method to complete your profile. Only after completing your profile you can make an order for any information or document.</p>
            </div>
            <div className='btn-box'>
                <ul className='p-0 m-0 list-unstyled d-flex align-items-center gap-2'>
                    <li>
                        <button type='button' className='btn-outline fill-btn small-btn-outline text-nowrap' onClick={handleCompanyInfo}>Add Company Info</button>
                    </li>
                    <li>
                        <button type='button' className='btn-outline fill-btn small-btn-outline text-nowrap' onClick={handlePaymentInfo}>Add Payment Info</button>
                    </li>
                </ul>
            </div>
        </div>
        <CompanyInfoModal show={showCompanyInfo} handleClose={handleCloseAll}/>
        <PaymentInfoModal show={showPaymentInfo} handleClose={handleCloseAll}/>
    </>
  )
}

export default CompleteYourProfile