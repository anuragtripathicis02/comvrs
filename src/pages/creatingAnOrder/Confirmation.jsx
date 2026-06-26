import React from 'react'

const Confirmation = () => {
  return (
    <div className='service-selection' >
        <div className='optional-information-sec'>
            <h5 className='mb-3'>Confirmation</h5>
            <div className='form-box bg-white radius-12 p-20'>
                <p className='m-0 p-0 mb-2'><strong> $90 + costs.</strong> We will contact the responding agency and obtain their copy of the accident report, plus the specific additional items you select below (such as witness statements, supplemental reports, photos, CAD reports, body cam footage, 911 calls, etc.) Supplemental reports, media, etc., are generally not available until after the criminal case closes and are released from DA discovery.</p>
                <p className='p-0 m-0 mb-2'><strong>If selected (or if All of the Above is selected), we will go to the crash site and canvass the area for private security footage of your accident (performed at hourly rate of $99/hr).</strong></p>
                <p className='m-0 p-0 mb-1'>Jurisdiction Delay(s):</p>
                <ul className='m-0 p-0 list-disc ps-4 mb-3'>
                    <li>CSP Central Records is running 6-8 months behind for video requests.</li>
                    <li>Aurora PD is running 90 days</li>
                    <li>Englewood PD is running 90 days for video</li>
                    <li>Arapahoe County Sheriff is running 90 days for video</li>
                </ul>
                <p className='p-0 m-0'><strong>We will update these known jurisdictional delays each month.</strong></p>
            </div>
        </div>
        
       <div className='card-profile-sec w-100 border-0 d-flex align-items-center flex-md-nowrap flex-wrap gap-3 p-20 mt-3 px-0 radius-12'>
            <div className='test-box w-100'>
                <h6 className='m-0 p-0 mb-1 fw-normal'>Order Estimated Total: <strong> $90.00</strong></h6>
                <p className='p-0 m-0'>Note: Additional charges may apply at time of fulfillment. Please remember that charges for DMV records are per record returned</p>
            </div>
            <div className='btn-box w-auto'>
                <ul className='p-0 m-0 list-unstyled d-flex align-items-center gap-2'>
                    <li>
                        <button type='button' className='btn-outline fill-btn text-nowrap'>Confirm & Place Order</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Confirmation