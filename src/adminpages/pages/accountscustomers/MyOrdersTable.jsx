import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EyeIcons from '../../../assets/icons/EyeIcons'
import EditIcons from '../../../assets/icons/EditIcons'
import Download from '../../../assets/icons/Download'

import UserImg1 from '../../../assets/images/user-auth-1.png'
import UserImg2 from '../../../assets/images/user-auth-2.png'
import UserImg3 from '../../../assets/images/user-auth-3.png'
import UserImg4 from '../../../assets/images/user-auth-4.png'

const MyOrdersTable = () => {
    // table pagination 
    
    const [page, setPage] = useState(1);
    const totalPages = 80;
    const totalOrders = 80;
    const visibleOrders = 15;
    
    

  return (
    <div className="table-default min-w-1200">
        <Table className="text-center table-hover align-middle m-0 p-0" responsive>
            <thead>
                <tr>
                    <th>Customer Info</th>
                    <th>Company Info</th>
                    <th>Orders Made</th>
                    <th>Joined On</th>
                    <th>Payout</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg1} alt="" />
                            <div className=''>
                                <p className='mb-0'>Hepner Daniel</p>
                                <span className='text-grn'>#1004</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>Cyber Infrastructure Pvt. Ltd.</p>
                        <span className='text-simple'>Pvt. Investigator</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Card</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Active</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>  
                <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg2} alt="" />
                            <div className=''>
                                <p className='mb-0'>Hepner Daniel</p>
                                <span className='text-grn'>#1004</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>Daniel A. Hepner, P.C.</p>
                        <span className='text-simple'>Attorney</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Invoice</td>
                    <td>
                        <span className='inline-block red-btn red-text btn-small'>Blocked</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg1} alt="" />
                            <div className=''>
                                <p className='mb-0'>Smith Adam</p>
                                <span className='text-grn'>#1021</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>Smith and Smith Attorneys at Law</p>
                        <span className='text-simple'>Attorney</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Card</td>
                    <td>
                        <span className=' inline-block yellow-btn yellow-text btn-small'>Inactive</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg3} alt="" />
                            <div className=''>
                                <p className='mb-0'>Payable Accounts</p>
                                <span className='text-grn'>#1022</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>Sweetbaum Sands Anderson PC</p>
                        <span className='text-simple'>Other</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Invoice</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Active</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                 <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg4} alt="" />
                            <div className=''>
                                <p className='mb-0'>Bray Chris</p>
                                <span className='text-grn'>#169</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>CoMVRs In House Account</p>
                        <span className='text-simple'>Attorney</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Invoice</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Active</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>
                 <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg1} alt="" />
                            <div className=''>
                                <p className='mb-0'>Wallace Rachael</p>
                                <span className='text-grn'>#345678</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>Baumgartner Law, LLC</p>
                        <span className='text-simple'>Pvt. Investigator</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Invoice</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Active</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg3} alt="" />
                            <div className=''>
                                <p className='mb-0'>Payable Accounts</p>
                                <span className='text-grn'>#1022</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>Sweetbaum Sands Anderson PC</p>
                        <span className='text-simple'>Other</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Invoice</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Active</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                 <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg4} alt="" />
                            <div className=''>
                                <p className='mb-0'>Bray Chris</p>
                                <span className='text-grn'>#169</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>CoMVRs In House Account</p>
                        <span className='text-simple'>Attorney</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Invoice</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Active</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg3} alt="" />
                            <div className=''>
                                <p className='mb-0'>Payable Accounts</p>
                                <span className='text-grn'>#1022</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>Sweetbaum Sands Anderson PC</p>
                        <span className='text-simple'>Other</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Invoice</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Active</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                 <tr>
                    <td>
                        <div className='auth-info d-flex align-items-center gap-2'>
                            <img src={UserImg4} alt="" />
                            <div className=''>
                                <p className='mb-0'>Bray Chris</p>
                                <span className='text-grn'>#169</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='mb-0'>CoMVRs In House Account</p>
                        <span className='text-simple'>Attorney</span>
                    </td>
                    <td>
                       1284
                    </td>
                    <td>05/22/26</td>
                    <td>Invoice</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Active</span>
                    </td>
                   
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>                   
            </tbody>
        </Table>
        
        <div className="custom-pagination d-flex align-items-center gap-2 pt-3 pb-0">
            <div className='pagination-left  d-flex align-items-center gap-2 '>
                <button className="page-arrow btn-gray" disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1L1 8.5L8.5 16" stroke="#8390A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <span className="page-count">
                    <span className='active'>{page}</span> <span> {totalPages}</span>
                </span>
                <button className="page-next no-hover d-flex gap-2  align-items-center" disabled={page === totalPages} onClick={() => setPage((prev) => prev + 1)}>
                    Next
                    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 16L8.5 8.5L1 1" stroke="#8390A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
            </div>
            <div className='pagination-right d-md-block d-none'>
                <span className="pagination-info">15</span> out of 80 Orders Visible
            </div>
            <div className='ms-auto'>
                <button className='theme-btn-light'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.875C4.5 17.9062 5.17313 18.75 6 18.75C6.18098 18.7459 6.35925 18.7051 6.52396 18.63C6.68867 18.5549 6.83638 18.4471 6.95813 18.3131C7.0963 18.1724 7.28436 18.0917 7.48157 18.0887C7.67878 18.0856 7.86926 18.1603 8.01178 18.2966C8.15429 18.433 8.23736 18.62 8.24299 18.8171C8.24862 19.0143 8.17637 19.2057 8.04187 19.35C7.78073 19.6311 7.46492 19.8559 7.11381 20.0107C6.7627 20.1655 6.38369 20.2469 6 20.25C4.34531 20.25 3 18.7359 3 16.875C3 15.0141 4.34531 13.5 6 13.5C6.38369 13.5031 6.7627 13.5845 7.11381 13.7393C7.46492 13.8941 7.78073 14.1189 8.04187 14.4C8.17637 14.5443 8.24862 14.7357 8.24299 14.9329C8.23736 15.13 8.15429 15.317 8.01178 15.4533C7.86926 15.5897 7.67878 15.6644 7.48157 15.6613C7.28436 15.6583 7.0963 15.5776 6.95813 15.4369C6.83638 15.3029 6.68867 15.1951 6.52396 15.12C6.35925 15.0449 6.18098 15.0041 6 15C5.17313 15 4.5 15.8437 4.5 16.875ZM11.9625 16.0603C11.5875 15.9516 11.1994 15.84 10.9828 15.7003C10.8656 15.6244 10.8675 15.6066 10.8778 15.5222C10.8794 15.4541 10.8973 15.3873 10.9299 15.3275C10.9625 15.2676 11.0089 15.2164 11.0653 15.1781C11.4966 14.8856 12.5034 15.0159 12.9234 15.1256C13.1159 15.1772 13.3209 15.1502 13.4935 15.0506C13.6661 14.951 13.792 14.787 13.8436 14.5945C13.8952 14.4021 13.8682 14.197 13.7686 14.0245C13.669 13.8519 13.5049 13.726 13.3125 13.6744C13.1138 13.6228 11.3438 13.185 10.2338 13.9331C9.99902 14.0907 9.80178 14.2979 9.65597 14.5401C9.51017 14.7822 9.41937 15.0535 9.39 15.3347C9.2025 16.8234 10.6697 17.2481 11.5463 17.5012C12.6769 17.8284 12.7762 17.9625 12.7444 18.2128C12.7153 18.4387 12.6263 18.5259 12.5438 18.5812C12.1125 18.8681 11.1216 18.7275 10.7109 18.615C10.519 18.5614 10.3136 18.5863 10.14 18.6841C9.96638 18.782 9.83874 18.9448 9.78516 19.1367C9.73157 19.3287 9.75644 19.534 9.85428 19.7077C9.95212 19.8813 10.1149 20.0089 10.3069 20.0625C10.7719 20.1843 11.2503 20.2473 11.7309 20.25C12.2766 20.25 12.8841 20.1562 13.3706 19.8319C13.6108 19.6723 13.8126 19.4615 13.9616 19.2146C14.1105 18.9677 14.203 18.6909 14.2322 18.4041C14.4375 16.7812 12.8897 16.3284 11.9625 16.0603ZM19.7522 13.5441C19.6594 13.5109 19.561 13.4962 19.4626 13.5011C19.3642 13.5059 19.2677 13.5301 19.1786 13.5722C19.0896 13.6144 19.0097 13.6736 18.9435 13.7467C18.8774 13.8197 18.8263 13.905 18.7931 13.9978L17.625 17.2697L16.4559 13.9978C16.3891 13.8105 16.2505 13.6574 16.0707 13.5722C15.8909 13.487 15.6847 13.4767 15.4973 13.5436C15.31 13.6105 15.1569 13.749 15.0717 13.9288C14.9865 14.1086 14.9762 14.3148 15.0431 14.5022L16.9181 19.7522C16.9701 19.8979 17.0659 20.024 17.1924 20.1132C17.3188 20.2024 17.4698 20.2502 17.6245 20.2502C17.7793 20.2502 17.9302 20.2024 18.0567 20.1132C18.1832 20.024 18.279 19.8979 18.3309 19.7522L20.2059 14.5022C20.2727 14.315 20.2624 14.1089 20.1774 13.9292C20.0923 13.7496 19.9394 13.611 19.7522 13.5441ZM20.25 8.25V10.5C20.25 10.6989 20.171 10.8897 20.0303 11.0303C19.8897 11.171 19.6989 11.25 19.5 11.25C19.3011 11.25 19.1103 11.171 18.9697 11.0303C18.829 10.8897 18.75 10.6989 18.75 10.5V9H14.25C14.0511 9 13.8603 8.92098 13.7197 8.78033C13.579 8.63968 13.5 8.44891 13.5 8.25V3.75H5.25V10.5C5.25 10.6989 5.17098 10.8897 5.03033 11.0303C4.88968 11.171 4.69891 11.25 4.5 11.25C4.30109 11.25 4.11032 11.171 3.96967 11.0303C3.82902 10.8897 3.75 10.6989 3.75 10.5V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H14.25C14.3485 2.24992 14.4461 2.26926 14.5371 2.3069C14.6282 2.34454 14.7109 2.39975 14.7806 2.46938L20.0306 7.71937C20.1003 7.78908 20.1555 7.87182 20.1931 7.96286C20.2307 8.05391 20.2501 8.15148 20.25 8.25ZM17.6897 7.5L15 4.81031V7.5H17.6897Z" fill="#64748B"/>
</svg>
 Download CSV
                </button>
            </div>
        </div>
    </div>
  )
}

export default MyOrdersTable