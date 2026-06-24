import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EyeIcons from '../../assets/icons/EyeIcons'
import EditIcons from '../../assets/icons/EditIcons'
import Download from '../../assets/icons/Download'
import PaymentFailedModal from '../../modalComponent/PaymentFailedModal'
import InvoiceGeneratedModal from '../../modalComponent/InvoiceGeneratedModal'


const BillingHistoryTable = () => {
    // table pagination 
    
    const [page, setPage] = useState(1);
    const totalPages = 80;
    const totalOrders = 80;
    const visibleOrders = 15;
    
    
    const [showFailed, setShowFailed] = useState (false);
    const [showInvoice, setShowInvoice] = useState (false);

    const handleFailed = () => {
        setShowFailed(true);
    };
    const handleInvoice = () => {
        setShowInvoice(true);
    };
    
    const handleCloseAll = () => {
        setShowFailed(false);
        setShowInvoice(false);
    };

  return (
    <div className="table-default min-w-1200">
        <Table className="text-center table-hover align-middle m-0 p-0" responsive>
            <thead>
                <tr>
                    <th>Invoice ID</th>
                    <th>Billing  Month</th>
                    <th>Total Orders</th>
                    <th>Invoice date</th>
                    <th>Billing Total</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <button  onClick={handleFailed} className=' inline-block align-middle red-btn red-text btn-small'> 
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0C5.21442 0 3.95772 0.381218 2.8888 1.09545C1.81988 1.80968 0.986756 2.82484 0.494786 4.01256C0.00281635 5.20028 -0.125905 6.50721 0.124899 7.76809C0.375703 9.02896 0.994767 10.1872 1.90381 11.0962C2.81285 12.0052 3.97104 12.6243 5.23192 12.8751C6.49279 13.1259 7.79973 12.9972 8.98744 12.5052C10.1752 12.0132 11.1903 11.1801 11.9046 10.1112C12.6188 9.04229 13 7.78558 13 6.5C12.9982 4.77665 12.3128 3.12441 11.0942 1.90582C9.87559 0.687224 8.22335 0.00181989 6.5 0ZM6.5 12C5.41221 12 4.34884 11.6774 3.44437 11.0731C2.5399 10.4687 1.83495 9.60975 1.41867 8.60476C1.00238 7.59977 0.893465 6.4939 1.10568 5.427C1.3179 4.36011 1.84173 3.3801 2.61092 2.61091C3.3801 1.84172 4.36011 1.3179 5.42701 1.10568C6.4939 0.893462 7.59977 1.00238 8.60476 1.41866C9.60976 1.83494 10.4687 2.53989 11.0731 3.44436C11.6774 4.34883 12 5.4122 12 6.5C11.9983 7.95818 11.4184 9.35617 10.3873 10.3873C9.35617 11.4184 7.95819 11.9983 6.5 12ZM7.5 9.5C7.5 9.63261 7.44732 9.75979 7.35356 9.85355C7.25979 9.94732 7.13261 10 7 10C6.73479 10 6.48043 9.89464 6.2929 9.70711C6.10536 9.51957 6 9.26522 6 9V6.5C5.86739 6.5 5.74022 6.44732 5.64645 6.35355C5.55268 6.25979 5.5 6.13261 5.5 6C5.5 5.86739 5.55268 5.74021 5.64645 5.64645C5.74022 5.55268 5.86739 5.5 6 5.5C6.26522 5.5 6.51957 5.60536 6.70711 5.79289C6.89465 5.98043 7 6.23478 7 6.5V9C7.13261 9 7.25979 9.05268 7.35356 9.14645C7.44732 9.24021 7.5 9.36739 7.5 9.5ZM5.5 3.75C5.5 3.60166 5.54399 3.45666 5.6264 3.33332C5.70881 3.20999 5.82595 3.11386 5.96299 3.05709C6.10003 3.00032 6.25084 2.98547 6.39632 3.01441C6.54181 3.04335 6.67544 3.11478 6.78033 3.21967C6.88522 3.32456 6.95665 3.4582 6.98559 3.60368C7.01453 3.74917 6.99968 3.89997 6.94291 4.03701C6.88615 4.17406 6.79002 4.29119 6.66668 4.3736C6.54334 4.45601 6.39834 4.5 6.25 4.5C6.05109 4.5 5.86032 4.42098 5.71967 4.28033C5.57902 4.13968 5.5 3.94891 5.5 3.75Z" fill="#D93E3E"/></svg> <span className='ms-1'> Failed</span>
                        </button>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>  
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <button onClick={handleInvoice} className=' inline-block yellow-btn yellow-text btn-small'> 
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 2V4C8.5 4.13261 8.44732 4.25979 8.35355 4.35355C8.25979 4.44732 8.13261 4.5 8 4.5C7.86739 4.5 7.74021 4.44732 7.64645 4.35355C7.55268 4.25979 7.5 4.13261 7.5 4V2C7.5 1.86739 7.55268 1.74021 7.64645 1.64645C7.74021 1.55268 7.86739 1.5 8 1.5C8.13261 1.5 8.25979 1.55268 8.35355 1.64645C8.44732 1.74021 8.5 1.86739 8.5 2ZM14 7.5H12C11.8674 7.5 11.7402 7.55268 11.6464 7.64645C11.5527 7.74021 11.5 7.86739 11.5 8C11.5 8.13261 11.5527 8.25979 11.6464 8.35355C11.7402 8.44732 11.8674 8.5 12 8.5H14C14.1326 8.5 14.2598 8.44732 14.3536 8.35355C14.4473 8.25979 14.5 8.13261 14.5 8C14.5 7.86739 14.4473 7.74021 14.3536 7.64645C14.2598 7.55268 14.1326 7.5 14 7.5ZM11.1819 10.475C11.0873 10.3852 10.9615 10.3359 10.8311 10.3375C10.7007 10.3392 10.5761 10.3917 10.4839 10.4839C10.3917 10.5761 10.3392 10.7007 10.3375 10.8311C10.3359 10.9615 10.3852 11.0873 10.475 11.1819L11.8888 12.5962C11.9826 12.6901 12.1098 12.7428 12.2425 12.7428C12.3752 12.7428 12.5024 12.6901 12.5962 12.5962C12.6901 12.5024 12.7428 12.3752 12.7428 12.2425C12.7428 12.1098 12.6901 11.9826 12.5962 11.8888L11.1819 10.475ZM8 11.5C7.86739 11.5 7.74021 11.5527 7.64645 11.6464C7.55268 11.7402 7.5 11.8674 7.5 12V14C7.5 14.1326 7.55268 14.2598 7.64645 14.3536C7.74021 14.4473 7.86739 14.5 8 14.5C8.13261 14.5 8.25979 14.4473 8.35355 14.3536C8.44732 14.2598 8.5 14.1326 8.5 14V12C8.5 11.8674 8.44732 11.7402 8.35355 11.6464C8.25979 11.5527 8.13261 11.5 8 11.5ZM4.81812 10.475L3.40375 11.8888C3.30993 11.9826 3.25722 12.1098 3.25722 12.2425C3.25722 12.3752 3.30993 12.5024 3.40375 12.5962C3.49757 12.6901 3.62482 12.7428 3.7575 12.7428C3.89018 12.7428 4.01743 12.6901 4.11125 12.5962L5.525 11.1819C5.61481 11.0873 5.66414 10.9615 5.66247 10.8311C5.6608 10.7007 5.60826 10.5761 5.51606 10.4839C5.42386 10.3917 5.29929 10.3392 5.16891 10.3375C5.03853 10.3359 4.91266 10.3852 4.81812 10.475ZM4.5 8C4.5 7.86739 4.44732 7.74021 4.35355 7.64645C4.25979 7.55268 4.13261 7.5 4 7.5H2C1.86739 7.5 1.74021 7.55268 1.64645 7.64645C1.55268 7.74021 1.5 7.86739 1.5 8C1.5 8.13261 1.55268 8.25979 1.64645 8.35355C1.74021 8.44732 1.86739 8.5 2 8.5H4C4.13261 8.5 4.25979 8.44732 4.35355 8.35355C4.44732 8.25979 4.5 8.13261 4.5 8ZM4.11125 3.40375C4.01743 3.30993 3.89018 3.25722 3.7575 3.25722C3.62482 3.25722 3.49757 3.30993 3.40375 3.40375C3.30993 3.49757 3.25722 3.62482 3.25722 3.7575C3.25722 3.89018 3.30993 4.01743 3.40375 4.11125L4.81812 5.525C4.91266 5.61481 5.03853 5.66414 5.16891 5.66247C5.29929 5.6608 5.42386 5.60826 5.51606 5.51606C5.60826 5.42386 5.6608 5.29929 5.66247 5.16891C5.66414 5.03853 5.61481 4.91266 5.525 4.81812L4.11125 3.40375Z" fill="#AE7008"/></svg> <span className='ms-1'> Pending</span>
                        </button>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn green-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn-fill white-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn green-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn green-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn green-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn green-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn green-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn green-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>
                        <Link to="/view-invoice">IN-05#1234567890</Link>
                    </td>
                    <td>
                        May 2026
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        05/05/2026
                    </td>
                    <td>
                        $350.0
                    </td>
                    <td>
                        <Link to="" className='inline-block green-btn green-text btn-small'> 
                            Paid
                        </Link>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="/view-invoice-due" className='icons-link '>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link '>
                                    <Download />
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
        </div>
        <PaymentFailedModal show={showFailed} handleClose={handleCloseAll}/>
        <InvoiceGeneratedModal show={showInvoice} handleClose={handleCloseAll}/>
    </div>
  )
}

export default BillingHistoryTable