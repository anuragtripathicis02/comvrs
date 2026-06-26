import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EyeIcons from '../../../assets/icons/EyeIcons'
import EditIcons from '../../../assets/icons/EditIcons'
import Download from '../../../assets/icons/Download'
import { Dropdown, Table } from 'react-bootstrap'
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
                        <th>Order Id</th>
                        <th>Requested Record/Info</th>
                        <th>Ordered By</th>
                        <th>Order Date</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            440980
                        </td>
                        <td>
                            01 Accident Reports on File at PD (Initial Rpt Only)
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
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B" /></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
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