
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BackArrow from '../../assets/icons/BackArrow'

const SelectingRequestType = () => {
  return (
    <div className='selecting-request-sec'>
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
            <Link to="" className="icon-back">
                <BackArrow />
            </Link>
            <div className="page-title-right">
                <h6 className="m-0 p-0">Create An Order</h6>
                <Breadcrumb className="m-0">
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item href="/completing-profile"> My Orders </Breadcrumb.Item>
                    <Breadcrumb.Item active>Create An Order</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-xl-8 col-md-7 pb-md-0 pb-5'>
                <div className='order-place-sec'>
                    <div className='order-text-box d-flex align-items-center justify-content-center text-center'>
                        <div className='mid-order'>
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_402_7677)"><path d="M54.3069 14.2023C52.8369 8.79156 47.2095 3.16312 41.7977 1.69313C38.4792 0.86625 34.0342 0.0142187 28 0C21.9658 0.0142187 17.5208 0.86625 14.2023 1.69313C8.79156 3.16312 3.16312 8.79047 1.69313 14.2023C0.86625 17.5208 0.0142187 21.9658 0 28C0.0142187 34.0342 0.86625 38.4792 1.69313 41.7977C3.16312 47.2095 8.79156 52.8369 14.2023 54.3069C17.5208 55.1337 21.968 55.9858 28 56C34.0331 55.9858 38.4792 55.1337 41.7977 54.3069C47.2095 52.8369 52.8369 47.2095 54.3069 41.7977C55.1337 38.4792 55.9858 34.032 56 28C55.9858 21.9658 55.1337 17.5208 54.3069 14.2023Z" fill="#E5F4D9"/><path d="M28 9.40625C24.3225 9.40625 20.7276 10.4968 17.6699 12.5399C14.6121 14.583 12.2289 17.4869 10.8216 20.8845C9.41431 24.282 9.04609 28.0206 9.76353 31.6275C10.481 35.2343 12.2519 38.5474 14.8522 41.1478C17.4526 43.7481 20.7657 45.519 24.3725 46.2365C27.9794 46.9539 31.718 46.5857 35.1155 45.1784C38.5131 43.7711 41.417 41.3879 43.4601 38.3301C45.5033 35.2724 46.5938 31.6775 46.5938 28C46.5938 23.0686 44.6348 18.3392 41.1478 14.8522C37.6608 11.3652 32.9314 9.40625 28 9.40625Z" fill="url(#paint0_linear_402_7677)"/><path d="M38.6095 24.9211L27.4281 36.6592C27.1236 36.9789 26.7577 37.2339 26.3523 37.4089C25.9469 37.5838 25.5104 37.6752 25.0689 37.6775H25.0547C24.6157 37.6774 24.1812 37.5893 23.7769 37.4184C23.3726 37.2474 23.0067 36.9971 22.7009 36.6821L16.7695 30.5714C16.4469 30.2675 16.1893 29.9014 16.0121 29.4952C15.8348 29.089 15.7417 28.6511 15.7384 28.208C15.735 27.7648 15.8215 27.3256 15.9925 26.9167C16.1635 26.5079 16.4156 26.1379 16.7335 25.8292C17.0514 25.5204 17.4286 25.2793 17.8423 25.1203C18.2559 24.9613 18.6975 24.8877 19.1404 24.904C19.5833 24.9204 20.0182 25.0262 20.4191 25.2153C20.8199 25.4043 21.1783 25.6725 21.4726 26.0039L25.0273 29.6668L33.8528 20.3984C34.1497 20.0861 34.5053 19.8353 34.8992 19.6604C35.2931 19.4855 35.7176 19.3898 36.1484 19.379C36.5792 19.3681 37.008 19.4422 37.4102 19.597C37.8124 19.7519 38.1801 19.9844 38.4925 20.2814C38.8048 20.5783 39.0556 20.9339 39.2305 21.3278C39.4054 21.7217 39.501 22.1461 39.5119 22.577C39.5228 23.0078 39.4487 23.4366 39.2938 23.8388C39.139 24.241 38.9065 24.6087 38.6095 24.9211Z" fill="url(#paint1_linear_402_7677)"/></g><defs><linearGradient id="paint0_linear_402_7677" x1="41.1502" y1="41.1502" x2="14.8499" y2="14.8498" gradientUnits="userSpaceOnUse"><stop stop-color="#13B601"/><stop offset="0.52" stop-color="#13B601"/><stop offset="1" stop-color="#CBF4B4"/></linearGradient><linearGradient id="paint1_linear_402_7677" x1="33.1014" y1="30.9881" x2="22.4439" y2="20.3295" gradientUnits="userSpaceOnUse"><stop stop-color="#CBF4B4"/><stop offset="0.57" stop-color="white"/><stop offset="1" stop-color="white"/></linearGradient><clipPath id="clip0_402_7677"><rect width="56" height="56" fill="white"/></clipPath></defs></svg>
                            <h4 className='m-0 p-0 mb-1 mt-3'>Order Placed!</h4>
                            <p className='p-0 m-0 fs-16'>We've received your Order <strong>#448370</strong> </p>
                            <div className='yellow-btn mt-3 p-2 radius-8 mb-3'>
                                <p className='p-0 m-0'>you can also upload more supporting document later by clicking the action columns upload icon in your dashboard.</p>
                            </div>
                            <p className='p-0 m-0 mb-1'>When the request is complete, we'll send you an email notification and post the report under the Account Dashboard for you to download. Normal turnaround time for non-microfilmed records is same day (if ordered by 3pm). Microfilmed records are typically returned in 24-48 hours. Non-DMV records vary in turnaround time, depending on the jurisdiction.</p>
                            <p className='p-0 m-0'>Please note that we cannot control turnaround times of departments or jurisdictions and these turnaround times are only an estimate. If there are any unusual delays in obtaining your records, the specific delay will be noted on your pending order in the Account Dashboard tab.</p>
                            <ul className='p-0 m-0 d-flex align-items-center justify-content-center gap-2 flex-wrap list-unstyled mt-4'>
                                <li>
                                    <Link to="" className='btn-outline  fill-btn-grey'>Back to Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/view-order" className='btn-outline fill-btn'>View Order Summery</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4 col-md-5'>
                <div className='find-next'>
                    <h4 className='m-0 p-0 mb-2'>Find What’s Next</h4>
                    <p className=' fs-16'>CoMVRs Recommendations based on your current order you might also like to have</p>
                    <div className='find-sec'>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>INSURANCE POLICY SEARCH</p>
                            <span>Searches the vehicle involved in your accident through the MIIDB at DMV for policy information.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>7-year Driving Record (MVR), Certified  </p>
                            <span>Certified copy of a standard 7yr Colorado driving record.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Lifetime Driving Record (MVR)</p>
                            <span>A complete historical driving record, going back to the first time the driver was issued a license (or PIN).</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Lifetime Driving Record (MVR), Certified</p>
                            <span>Certified copy of a Lifetime (full) Colorado driving record.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Out of State Driving Records</p>
                            <span>Driving record from another state. Must provide birth date and that state's license number.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Accident Report (Specific Accident) DMV Copy</p>
                            <span>A copy of the accident report that was sent to DMV by the responding agency.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Accident Report (Specific Accident) DMV Copy</p>
                            <span>A copy of the accident report that was sent to DMV by the responding agency.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Accident Report (Specific Accident) DMV Copy</p>
                            <span>A copy of the accident report that was sent to DMV by the responding agency.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Accident Report (Specific Accident) DMV Copy</p>
                            <span>A copy of the accident report that was sent to DMV by the responding agency.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Accident Report (Specific Accident) DMV Copy</p>
                            <span>A copy of the accident report that was sent to DMV by the responding agency.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Accident Report (Specific Accident) DMV Copy</p>
                            <span>A copy of the accident report that was sent to DMV by the responding agency.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                        <div className='find-card position-relative mb-2'>
                            <p className='fs-14 p-0 m-0 mb-1'>Accident Report (Specific Accident) DMV Copy</p>
                            <span>A copy of the accident report that was sent to DMV by the responding agency.</span>
                            <div className='icons'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2969 12.7959L9.79687 20.2959C9.58553 20.5072 9.29888 20.626 9 20.626C8.70111 20.626 8.41447 20.5072 8.20312 20.2959C7.99178 20.0846 7.87305 19.7979 7.87305 19.499C7.87305 19.2001 7.99178 18.9135 8.20312 18.7021L14.9072 12L8.205 5.2959C8.10035 5.19125 8.01734 5.06702 7.96071 4.93029C7.90407 4.79356 7.87492 4.64702 7.87492 4.49902C7.87492 4.35103 7.90407 4.20448 7.96071 4.06776C8.01734 3.93103 8.10035 3.80679 8.205 3.70215C8.30965 3.5975 8.43388 3.51449 8.57061 3.45785C8.70734 3.40122 8.85388 3.37207 9.00187 3.37207C9.14987 3.37207 9.29641 3.40122 9.43314 3.45785C9.56987 3.51449 9.6941 3.5975 9.79875 3.70215L17.2987 11.2021C17.4035 11.3068 17.4866 11.4311 17.5432 11.5679C17.5998 11.7047 17.6289 11.8513 17.6287 11.9994C17.6285 12.1475 17.5991 12.2941 17.5422 12.4307C17.4852 12.5674 17.4019 12.6915 17.2969 12.7959Z" fill="#B8BFCA"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectingRequestType