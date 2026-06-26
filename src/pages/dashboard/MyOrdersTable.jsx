import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EyeIcons from '../../assets/icons/EyeIcons'
import EditIcons from '../../assets/icons/EditIcons'
import Download from '../../assets/icons/Download'

const MyOrdersTable = () => {
    // table pagination 
    
    const [page, setPage] = useState(1);
    const totalPages = 80;
    const totalOrders = 80;
    const visibleOrders = 15;
    
    

  return (
    <div className="table-default min-w-1000">
        <Table className="text-center table-hover align-middle m-0 p-0" responsive>
            <thead>
                <tr>
                    <th>Order Info</th>
                    <th>Order Id</th>
                    <th>Ordered By</th>
                    <th>Order Date</th>
                    <th>Cost</th>
                    <th>Status</th>
                    <th>Results</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className=' inline-block blue-btn blue-text btn-small'>New</span>
                    </td>
                    <td>
                        <div className='download-btn disabled-btn'>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link disabled-btn'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link disabled-btn'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>                   
                <tr>
                    <td>
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className=' inline-block yellow-btn yellow-text btn-small'>In Progress</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className='inline-block red-btn red-text btn-small'>Rejected</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Completed</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Completed</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className='inline-block red-btn red-text btn-small'>Rejected</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className='inline-block red-btn red-text btn-small'>Rejected</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className=' inline-block blue-btn blue-text btn-small'>New</span>
                    </td>
                    <td>
                        <div className='download-btn disabled-btn'>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" className='icons-link disabled-btn'>
                                    <EyeIcons />
                                </Link>
                            </li>
                            <li>
                                <Link to="" className='icons-link disabled-btn'>
                                    <EditIcons />
                                </Link>
                            </li>
                        </ul>
                    </td>
                </tr>                   
                <tr>
                    <td>
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className=' inline-block yellow-btn yellow-text btn-small'>In Progress</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className='inline-block red-btn red-text btn-small'>Rejected</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
                        01 Accident Reports on File at PD (Initial Rpt Only)
                    </td>
                    <td>
                        440980
                    </td>
                    <td>
                        <div className='author-name d-flex align-items-center gap-2 justify-content-center'>
                            <span className='short-name'>s</span>
                            <span className='name'>Sandeep Pateria</span>
                        </div>
                    </td>
                    <td>05/22/26</td>
                    <td>$35</td>
                    <td>
                        <span className='inline-block green-btn green-text btn-small'>Completed</span>
                    </td>
                    <td>
                        <div className='download-btn '>
                            <Download />
                            <span className='d-block'>Download</span>
                        </div>
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
        </div>
    </div>
  )
}

export default MyOrdersTable