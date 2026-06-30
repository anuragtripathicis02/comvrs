import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EditIcons from '../../../assets/icons/EditIcons'
import DeleteIcons from '../../../assets/icons/DeleteIcons'

const CustomTable = () => {
    // table pagination 

    const [page, setPage] = useState(1);
    const totalPages = 80;



    return (
        <>
            <div className="table-default min-w-1200">
                <Table className="text-center table-hover align-middle m-0 p-0" responsive>
                    <thead>
                        <tr>
                            <th>Invoice ID</th>
                            <th>Type</th>
                            <th>Last Modified</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                09- Other
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block red-btn red-text btn-small">Inactive</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                7-year Driving Record (MVR)
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                7-year Driving Record (MVR), Certified
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Accident Report (Specific Accident) DMV Copy
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Accident Reports (All), DMV Copy
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Copy of Application for License or ID
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Current Registration Info on Plate
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Current Registration Info on VIN
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                DUI Records (Expressed Consent Pkt)
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                INSURANCE POLICY SEARCH
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lienholder Information on a VIN
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lifetime Driving Record (MVR)
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lifetime Driving Record (MVR), Certified
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Minor Affidavit (Affidavit of Liability and Guardianship)
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Out of State Driving Records
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Registration Database
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Suspension Letters
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ticket/Citation Copy
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Title Histories on a VIN
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
                                        </Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Vehicles Registered to a Person
                            </td>
                            <td>
                                DMV Records
                            </td>
                            <td>
                                05/22/26 @02:30 PM MST
                            </td>
                            <td>
                                <span className="inline-block green-btn green-text btn-small">Active</span>
                            </td>
                            <td>
                                <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <EditIcons />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='icons-link '>
                                            <DeleteIcons />
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
                            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1L1 8.5L8.5 16" stroke="#8390A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        <span className="page-count">
                            <span className='active'>{page}</span> <span> {totalPages}</span>
                        </span>
                        <button className="page-next no-hover d-flex gap-2  align-items-center" disabled={page === totalPages} onClick={() => setPage((prev) => prev + 1)}>
                            Next
                            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 16L8.5 8.5L1 1" stroke="#8390A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                    <div className='pagination-right d-md-block d-none'>
                        <span className="pagination-info">15</span> out of 80 Orders Visible
                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default CustomTable