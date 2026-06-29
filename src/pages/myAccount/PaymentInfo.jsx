import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DatePicker } from 'rsuite'

const PaymentInfo = () => {
  return (
    <div className='admin-inis-info'>
        <div className='head-box-icons'>
            <p className='d-flex align-items-center gap-2'>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM21 6V8.25H3V6H21ZM21 18H3V9.75H21V18ZM19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5H15.75C15.5511 16.5 15.3603 16.421 15.2197 16.2803C15.079 16.1397 15 15.9489 15 15.75C15 15.5511 15.079 15.3603 15.2197 15.2197C15.3603 15.079 15.5511 15 15.75 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75ZM13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5H11.25C11.0511 16.5 10.8603 16.421 10.7197 16.2803C10.579 16.1397 10.5 15.9489 10.5 15.75C10.5 15.5511 10.579 15.3603 10.7197 15.2197C10.8603 15.079 11.0511 15 11.25 15H12.75C12.9489 15 13.1397 15.079 13.2803 15.2197C13.421 15.3603 13.5 15.5511 13.5 15.75Z" fill="#4B7652"/></svg>
                <span>Payment Info</span>
            </p>
        </div>
        <div className='form-box bg-white radius-12 p-20 mb-4'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 mb-lg-0 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Preference">
                        <Form.Select aria-label="City">
                            <option>Charge my card</option>
                            <option value="1">Charge my card</option>
                            <option value="2">Charge my card</option>
                            <option value="3">Charge my card</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-lg-0 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Billing Circle">
                        <Form.Select aria-label="City">
                            <option>Pre Order</option>
                            <option value="1">Pre Order</option>
                            <option value="2">Pre Order</option>
                            <option value="3">Pre Order</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Credit Card Number" className="mb-md-0 filled-box filled-bg">
                        <Form.Control type="text" placeholder="John" defaultValue="1234 1234 1234 1234"/>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                        <FloatingLabel controlId="floatingInput" label="Name On Card" className="mb-md-0 filled-box filled-bg">
                        <Form.Control type="text" placeholder="John" defaultValue="John Smith"/>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <div className="calendar-box floating-calendar-box  position-relative">
                        <Form.Label>Expiring on </Form.Label>
                        <DatePicker className="w-100" />
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="CSV/CVV*" className=" credit-card filled-box filled-bg posotion-relative">
                        <Form.Control type="text" placeholder="text" defaultValue="123" />
                        <span className="icons position-absolute">
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V13.5C0 13.8978 0.158035 14.2794 0.43934 14.5607C0.720644 14.842 1.10218 15 1.5 15H19.5C19.8978 15 20.2794 14.842 20.5607 14.5607C20.842 14.2794 21 13.8978 21 13.5V1.5C21 1.10218 20.842 0.720644 20.5607 0.43934C20.2794 0.158035 19.8978 0 19.5 0ZM19.5 1.5V3.75H1.5V1.5H19.5ZM19.5 13.5H1.5V5.25H19.5V13.5ZM18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H14.25C14.0511 12 13.8603 11.921 13.7197 11.7803C13.579 11.6397 13.5 11.4489 13.5 11.25C13.5 11.0511 13.579 10.8603 13.7197 10.7197C13.8603 10.579 14.0511 10.5 14.25 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25ZM12 11.25C12 11.4489 11.921 11.6397 11.7803 11.7803C11.6397 11.921 11.4489 12 11.25 12H9.75C9.55109 12 9.36032 11.921 9.21967 11.7803C9.07902 11.6397 9 11.4489 9 11.25C9 11.0511 9.07902 10.8603 9.21967 10.7197C9.36032 10.579 9.55109 10.5 9.75 10.5H11.25C11.4489 10.5 11.6397 10.579 11.7803 10.7197C11.921 10.8603 12 11.0511 12 11.25Z" fill="#4B7652"/></svg>
                        </span>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-lg-0 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="City">
                        <Form.Select aria-label="City">
                            <option>Huston</option>
                            <option value="1">Huston</option>
                            <option value="2">Huston</option>
                            <option value="3">Huston</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-lg-0 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="State">
                        <Form.Select aria-label="State">
                            <option>Taxus</option>
                            <option value="1">Taxus</option>
                            <option value="2">Taxus</option>
                            <option value="3">Taxus</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-md-0 mb-4'>
                    <FloatingLabel controlId="floatingInput" label="Company Zip Code" className="mb-md-0 filled-box filled-bg">
                        <Form.Control type="text" placeholder="John" defaultValue="123456"/>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-lg-0 mb-0'>
                    <FloatingLabel controlId="floatingInput" label="Billing Address" className="mb-md-0 filled-box filled-bg">
                        <Form.Control type="text" placeholder="John" defaultValue="1234 Main Street, Apt 100"/>
                    </FloatingLabel>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-end'>
            <Link to="" className=" btn-outline fill-btn disabled">Save Details</Link>
        </div>
    </div>
  )
}

export default PaymentInfo