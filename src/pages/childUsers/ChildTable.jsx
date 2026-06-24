import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EditIcons from '../../assets/icons/EditIcons'
import DeleteIcons from '../../assets/icons/DeleteIcons'
import CreateSubUser from '../../modalComponent/CreateSubUser'
const ChildTable = () => {
    // table pagination 
    
    const [page, setPage] = useState(1);
    const totalPages = 80;
    const totalOrders = 80;
    const visibleOrders = 15;
    
    const [userStatus, setUserStatus] = useState({
        user1: true,
        user2: false,
        user3: false,
        user4: false,
        user5: false,
        user6: false,
        user7: false,
        user8: false,
    });



        const [showSubUser, setShowSubUser] = useState(false);
     
        
        const handleSubUser = () => {
            setShowSubUser(true);
        };
    
        const handleCloseAll = () => {
            setShowSubUser(false);
        };
    


  return (
    <div className="table-default min-w-1200">
        <Table className="text-center table-hover align-middle m-0 p-0" responsive>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Orders</th>
                    <th>Created On</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Sandeep P.
                    </td>
                    <td>
                        sandeep.p@cisinlabs.com
                    </td>
                    <td>
                        <div className='pass d-flex align-items-center gap-2 justify-content-center justify-content-between mx-w-100'>
                            <div className='p-0 m-0 '>********</div>
                            <Link to="" className=''>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM12.5 16.25H3.75V7.5H12.5V16.25ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#64748B"/></svg>
                            </Link>
                        </div>
                    </td>
                    <td>34</td>
                    <td>05/05/2026</td>
                    <td>
                        <Form.Check type="switch" id="custom-switch-1"  label={userStatus.user1 ? "Active" : "Disabled"} className="switch-btn switch-active-disactive m-auto justify-content-center"  checked={userStatus.user1} onChange={() => setUserStatus({...userStatus, user1: !userStatus.user1,})}/>
                    </td>
                    <td>
                        <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                            <li>
                                <Link to="" onClick={handleSubUser} className='icons-link '>
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
                        Mike Smith
                    </td>
                    <td>
                        sandeep.p@cisinlabs.com
                    </td>
                    <td>
                        <div className='pass d-flex align-items-center gap-2 justify-content-center justify-content-between mx-w-100'>
                            <div className='p-0 m-0 '>********</div>
                            <Link to="" className=''>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM12.5 16.25H3.75V7.5H12.5V16.25ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#64748B"/></svg>
                            </Link>
                        </div>
                    </td>
                    <td>34</td>
                    <td>05/05/2026</td>
                    <td>
                        <Form.Check type="switch" id="custom-switch-2"  label={userStatus.user2 ? "Active" : "Disabled"} className="switch-btn switch-active-disactive m-auto justify-content-center"  checked={userStatus.user2} onChange={() => setUserStatus({...userStatus, user2: !userStatus.user2,})}/>
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
                        William K
                    </td>
                    <td>
                        sandeep.p@cisinlabs.com
                    </td>
                    <td>
                        <div className='pass d-flex align-items-center gap-2 justify-content-center justify-content-between mx-w-100'>
                            <div className='p-0 m-0 '>********</div>
                            <Link to="" className=''>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM12.5 16.25H3.75V7.5H12.5V16.25ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#64748B"/></svg>
                            </Link>
                        </div>
                    </td>
                    <td>34</td>
                    <td>05/05/2026</td>
                    <td>
                        <Form.Check type="switch" id="custom-switch-3"  label={userStatus.user3 ? "Active" : "Disabled"} className="switch-btn switch-active-disactive m-auto justify-content-center"  checked={userStatus.user3} onChange={() => setUserStatus({...userStatus, user3: !userStatus.user3,})}/>
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
                        Don Norman
                    </td>
                    <td>
                        sandeep.p@cisinlabs.com
                    </td>
                    <td>
                        <div className='pass d-flex align-items-center gap-2 justify-content-center justify-content-between mx-w-100'>
                            <div className='p-0 m-0 '>********</div>
                            <Link to="" className=''>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM12.5 16.25H3.75V7.5H12.5V16.25ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#64748B"/></svg>
                            </Link>
                        </div>
                    </td>
                    <td>34</td>
                    <td>05/05/2026</td>
                    <td>
                        <Form.Check type="switch" id="custom-switch-4"  label={userStatus.user4 ? "Active" : "Disabled"} className="switch-btn switch-active-disactive m-auto justify-content-center"  checked={userStatus.user4} onChange={() => setUserStatus({...userStatus, user4: !userStatus.user4,})}/>
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
                        Emma Being
                    </td>
                    <td>
                        sandeep.p@cisinlabs.com
                    </td>
                    <td>
                        <div className='pass d-flex align-items-center gap-2 justify-content-center justify-content-between mx-w-100'>
                            <div className='p-0 m-0 '>********</div>
                            <Link to="" className=''>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM12.5 16.25H3.75V7.5H12.5V16.25ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#64748B"/></svg>
                            </Link>
                        </div>
                    </td>
                    <td>34</td>
                    <td>05/05/2026</td>
                    <td>
                        <Form.Check type="switch" id="custom-switch-5"  label={userStatus.user5 ? "Active" : "Disabled"} className="switch-btn switch-active-disactive m-auto justify-content-center"  checked={userStatus.user5} onChange={() => setUserStatus({...userStatus, user5: !userStatus.user5,})}/>
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
                        Emma Being
                    </td>
                    <td>
                        sandeep.p@cisinlabs.com
                    </td>
                    <td>
                        <div className='pass d-flex align-items-center gap-2 justify-content-center justify-content-between mx-w-100'>
                            <div className='p-0 m-0 '>********</div>
                            <Link to="" className=''>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM12.5 16.25H3.75V7.5H12.5V16.25ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#64748B"/></svg>
                            </Link>
                        </div>
                    </td>
                    <td>34</td>
                    <td>05/05/2026</td>
                    <td>
                        <Form.Check type="switch" id="custom-switch-6"  label={userStatus.user6 ? "Active" : "Disabled"} className="switch-btn switch-active-disactive m-auto justify-content-center"  checked={userStatus.user6} onChange={() => setUserStatus({...userStatus, user6: !userStatus.user6,})}/>
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
                        Emma Being
                    </td>
                    <td>
                        sandeep.p@cisinlabs.com
                    </td>
                    <td>
                        <div className='pass d-flex align-items-center gap-2 justify-content-center justify-content-between mx-w-100'>
                            <div className='p-0 m-0 '>********</div>
                            <Link to="" className=''>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM12.5 16.25H3.75V7.5H12.5V16.25ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#64748B"/></svg>
                            </Link>
                        </div>
                    </td>
                    <td>34</td>
                    <td>05/05/2026</td>
                    <td>
                        <Form.Check type="switch" id="custom-switch-7"  label={userStatus.user7 ? "Active" : "Disabled"} className="switch-btn switch-active-disactive m-auto justify-content-center"  checked={userStatus.user7} onChange={() => setUserStatus({...userStatus, user7: !userStatus.user7,})}/>
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
                        Emma Being
                    </td>
                    <td>
                        sandeep.p@cisinlabs.com
                    </td>
                    <td>
                        <div className='pass d-flex align-items-center gap-2 justify-content-center justify-content-between mx-w-100'>
                            <div className='p-0 m-0 '>********</div>
                            <Link to="" className=''>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.875 2.5H6.875C6.70924 2.5 6.55027 2.56585 6.43306 2.68306C6.31585 2.80027 6.25 2.95924 6.25 3.125V6.25H3.125C2.95924 6.25 2.80027 6.31585 2.68306 6.43306C2.56585 6.55027 2.5 6.70924 2.5 6.875V16.875C2.5 17.0408 2.56585 17.1997 2.68306 17.3169C2.80027 17.4342 2.95924 17.5 3.125 17.5H13.125C13.2908 17.5 13.4497 17.4342 13.5669 17.3169C13.6842 17.1997 13.75 17.0408 13.75 16.875V13.75H16.875C17.0408 13.75 17.1997 13.6842 17.3169 13.5669C17.4342 13.4497 17.5 13.2908 17.5 13.125V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5ZM12.5 16.25H3.75V7.5H12.5V16.25ZM16.25 12.5H13.75V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H7.5V3.75H16.25V12.5Z" fill="#64748B"/></svg>
                            </Link>
                        </div>
                    </td>
                    <td>34</td>
                    <td>05/05/2026</td>
                    <td>
                        <Form.Check type="switch" id="custom-switch-8"  label={userStatus.user8 ? "Active" : "Disabled"} className="switch-btn switch-active-disactive m-auto justify-content-center"  checked={userStatus.user8} onChange={() => setUserStatus({...userStatus, user8: !userStatus.user8,})}/>
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
        <CreateSubUser show={showSubUser} handleClose={handleCloseAll} />
    </div>
  )
}

export default ChildTable