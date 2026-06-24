import React, {useState} from 'react'
import { Modal, Button, Tab, FloatingLabel, Form } from "react-bootstrap";
import AmricanIcons from '../assets/images/american-icons.png'
import EditIcons from '../assets/icons/EditIcons';
import { DatePicker } from "rsuite";

const InvoiceGeneratedEditCardModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal sm-modal pt-lg-4 pt-5">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>

            <Modal.Body className="common-modal-body">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="modal-inner-content">
                        <h5 className="mb-2 m-0 p-0 yellow-text ">Invoice Generated</h5> 
                        <p className="p-0 m-0 mb-2">Your Payment for the billing month <strong> May 2026 </strong>is generated and about to be charged by your card in 3 working days. If you want to pay now or change card details before the final deduction you can do it now.</p>
                        <p className="p-0 m-0 mb-3">Please note your account will be marked as suspended if the payment failed and you won’t be able to place new orders till the previous bill is cleared.</p>
                        <p className='p-0 m-0 mb-2'>Card Details:</p>
                        <div className='card-box-grey mt-2'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <FloatingLabel controlId="floatingInput" label="Credit Card Number" className="mb-4 background-transparent credit-card filled-box filled-bg posotion-relative">
                                        <Form.Control type="text" placeholder="text" defaultValue="1234 1234 1234 1234" />
                                        <span className="icons position-absolute">
                                        <img src={AmricanIcons} alt="" />
                                        </span>
                                    </FloatingLabel>
                                </div>
                                <div className='col-md-12'>
                                    <FloatingLabel controlId="floatingInput" label="Name On Card" className="mb-4 background-transparent filled-box filled-bg">
                                        <Form.Control type="text" placeholder="text" defaultValue="John Smith" />
                                    </FloatingLabel>
                                </div>
                                <div className="col-md-6">
                                    <div className="calendar-box floating-calendar-box mb-4 background-transparent position-relative">
                                        <Form.Label>Expiring on </Form.Label>
                                        <DatePicker className="w-100" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <FloatingLabel controlId="floatingInput" label="CSV/CVV*" className="mb-4 background-transparent credit-card filled-box filled-bg posotion-relative">
                                        <Form.Control type="text" placeholder="text" defaultValue="123" />
                                        <span className="icons position-absolute">
                                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V13.5C0 13.8978 0.158035 14.2794 0.43934 14.5607C0.720644 14.842 1.10218 15 1.5 15H19.5C19.8978 15 20.2794 14.842 20.5607 14.5607C20.842 14.2794 21 13.8978 21 13.5V1.5C21 1.10218 20.842 0.720644 20.5607 0.43934C20.2794 0.158035 19.8978 0 19.5 0ZM19.5 1.5V3.75H1.5V1.5H19.5ZM19.5 13.5H1.5V5.25H19.5V13.5ZM18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H14.25C14.0511 12 13.8603 11.921 13.7197 11.7803C13.579 11.6397 13.5 11.4489 13.5 11.25C13.5 11.0511 13.579 10.8603 13.7197 10.7197C13.8603 10.579 14.0511 10.5 14.25 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25ZM12 11.25C12 11.4489 11.921 11.6397 11.7803 11.7803C11.6397 11.921 11.4489 12 11.25 12H9.75C9.55109 12 9.36032 11.921 9.21967 11.7803C9.07902 11.6397 9 11.4489 9 11.25C9 11.0511 9.07902 10.8603 9.21967 10.7197C9.36032 10.579 9.55109 10.5 9.75 10.5H11.25C11.4489 10.5 11.6397 10.579 11.7803 10.7197C11.921 10.8603 12 11.0511 12 11.25Z" fill="#4B7652"/></svg>
                                        </span>
                                    </FloatingLabel>
                                </div>
                                <div className='col-md-12'>
                                    <FloatingLabel controlId="floatingInput" label="Billing Address" className="mb-4 background-transparent filled-box filled-bg">
                                        <Form.Control type="email" placeholder="1234 Main Street, Apt 100" defaultValue="1234 Main Street, Apt 100" />
                                    </FloatingLabel>
                                </div>
                                <div className='col-md-6 mb-4'>
                                    <FloatingLabel controlId="floatingSelect" label="City" className='background-transparent'>
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Huston</option>
                                            <option value="1">Huston 1</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </div>
                                <div className='col-md-6 mb-4'>
                                    <FloatingLabel controlId="floatingSelect" label="State" className='background-transparent'>
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Taxus</option>
                                            <option value="1">Taxus 1</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </div>
                                <div className='col-md-12'>
                                    <FloatingLabel controlId="floatingInput" label="Billing ZIP Code" className="mb-4 filled-box filled-bg background-transparent">
                                        <Form.Control type="text" placeholder="123456" defaultValue="123456" />
                                    </FloatingLabel>
                                </div>
                                <div className='col-md-12'>
                                    <button className="btn-outline fill-btn w-100 py-2">
                                        Save Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Container>
            </Modal.Body>
            <Modal.Footer className="flex-nowrap m-1 border-0 pt-0">
                <button className="w-100 btn-outline grey-btn disabled" onClick={handleClose}>
                    Close
                </button>
                <button className="w-100 btn-outline fill-btn disabled">
                    Pay Now
                </button>
            </Modal.Footer>
        </Modal>
  )
}

export default InvoiceGeneratedEditCardModal