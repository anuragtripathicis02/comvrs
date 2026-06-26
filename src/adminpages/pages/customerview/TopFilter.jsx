import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DatePicker, DateRangePicker } from 'rsuite'

const TopFilter = () => {
  return (
    <div className='fice-col-box'>
        <div className="header-list-box p-0 mb-2 border-0 radius-0">
            <ul className="p-0 pb-2 min-w-900 m-0 list-unstyled d-flex radius-0  flex-wrap">
                <li>
                    <Form.Group className="position-relative search-box">
                        <Form.Control type="text" placeholder="Search Projects by name or ID..." className='ps-5 w-100'/>
                        <span className='icons cursor-pointer position-absolute'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#97979E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.8037 15.8032L21.0003 20.9998" stroke="#97979E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                    </Form.Group>
                </li>
                <li>
                    <div className="calendar-box position-relative">
                         <DateRangePicker className="custom-date-range w-100" placeholder="From Date - To Date" editable={false} cleanable={false} format="dd/MM/yyyy"/>
                    </div>
                </li>
                <li>
                    <Form.Group className="form-group position-relative select-with-text" controlId="exampleForm.ControlTextarea1">
                        <span className="option-in-select">Status : </span>
                        <Form.Select aria-label="Default select example">
                            <option>All</option>
                            <option value="1"> First One</option>
                            <option value="2"> First Two</option>
                            <option value="3"> First Three</option>
                        </Form.Select>
                    </Form.Group>  
                </li>
               
                <li>
                    <Form.Group className="form-group position-relative select-with-text" controlId="exampleForm.ControlTextarea1">
                        <span className="option-in-select">Sort : </span>
                        <Form.Select aria-label="Default select example">
                            <option>Recent First</option>
                            <option value="1">Recent First One</option>
                            <option value="2">Recent First Two</option>
                            <option value="3">Recent First Three</option>
                        </Form.Select>
                    </Form.Group>  
                </li>
                <li>
                    <Link to="/creating-an-order" className="small-btn-outline btn-outline fill-btn d-flex align-items-center gap-2 text-nowrap flex-nowrap justify-content-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 7.8125C15.625 8.06114 15.5262 8.2996 15.3504 8.47541C15.1746 8.65123 14.9361 8.75 14.6875 8.75H8.75V14.6875C8.75 14.9361 8.65123 15.1746 8.47541 15.3504C8.2996 15.5262 8.06114 15.625 7.8125 15.625C7.56386 15.625 7.3254 15.5262 7.14959 15.3504C6.97377 15.1746 6.875 14.9361 6.875 14.6875V8.75H0.9375C0.68886 8.75 0.450403 8.65123 0.274587 8.47541C0.0987721 8.2996 0 8.06114 0 7.8125C0 7.56386 0.0987721 7.3254 0.274587 7.14959C0.450403 6.97377 0.68886 6.875 0.9375 6.875H6.875V0.9375C6.875 0.68886 6.97377 0.450403 7.14959 0.274587C7.3254 0.0987721 7.56386 0 7.8125 0C8.06114 0 8.2996 0.0987721 8.47541 0.274587C8.65123 0.450403 8.75 0.68886 8.75 0.9375V6.875H14.6875C14.9361 6.875 15.1746 6.97377 15.3504 7.14959C15.5262 7.3254 15.625 7.56386 15.625 7.8125Z" fill="currentColor"/></svg>
                        <span>Add Invoice</span>
                    </Link>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default TopFilter