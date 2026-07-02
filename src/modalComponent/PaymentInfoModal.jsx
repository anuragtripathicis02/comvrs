import  {useEffect, useRef, useState} from 'react'
import { Modal, Button, Tab, Tabs, FloatingLabel, Form } from "react-bootstrap";
import { DatePicker } from 'rsuite';

const TabTitle = ({ title, icon }) => (
  <div className="tab-simple-tabs d-flex align-items-center gap-2">
    <span className="main-icons">{icon}</span>
    <span className="main-title">{title}</span>
  </div>
);

const PaymentInfoModal = ({ show, handleClose }) => {
     
       const [activeKey, setActiveKey] = useState("First");
     
       const tabsWrapperRef = useRef(null);
     
       useEffect(() => {
         const navTabs = tabsWrapperRef.current?.querySelector(".nav-tabs");
     
         if (
           navTabs &&
           !navTabs.parentElement?.classList.contains("nav-tabs-scroll")
         ) {
           const wrapper = document.createElement("div");
           wrapper.className = "nav-tabs-scroll";
     
           navTabs.parentNode?.insertBefore(wrapper, navTabs);
           wrapper.appendChild(navTabs);
         }
       }, []);
     
       const handleTabClick = (key) => {
         setActiveKey(key);
       };
     
       
  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal sm-modal pt-lg-4 pt-5">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>

            <Modal.Body className="common-modal-body">
                <div className="modal-inner-content">
                    <h5 className="mb-2 m-0 p-0  ">Payment Info</h5> 
                    <p className="p-0 m-0 mb-3">Just Select payment type and verify your payment information</p>
                </div>
                <div className="tabs-default-box font-16 scrollBar" ref={tabsWrapperRef}>
                    <Tabs activeKey={activeKey} onSelect={handleTabClick} className="tabs-default-box">
                        <Tab eventKey="First" title={<TabTitle icon={<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.25 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V11.25C0 11.5815 0.131696 11.8995 0.366116 12.1339C0.600537 12.3683 0.918479 12.5 1.25 12.5H16.25C16.5815 12.5 16.8995 12.3683 17.1339 12.1339C17.3683 11.8995 17.5 11.5815 17.5 11.25V1.25C17.5 0.918479 17.3683 0.600537 17.1339 0.366116C16.8995 0.131696 16.5815 0 16.25 0ZM16.25 1.25V3.125H1.25V1.25H16.25ZM16.25 11.25H1.25V4.375H16.25V11.25ZM15 9.375C15 9.54076 14.9342 9.69973 14.8169 9.81694C14.6997 9.93415 14.5408 10 14.375 10H11.875C11.7092 10 11.5503 9.93415 11.4331 9.81694C11.3158 9.69973 11.25 9.54076 11.25 9.375C11.25 9.20924 11.3158 9.05027 11.4331 8.93306C11.5503 8.81585 11.7092 8.75 11.875 8.75H14.375C14.5408 8.75 14.6997 8.81585 14.8169 8.93306C14.9342 9.05027 15 9.20924 15 9.375ZM10 9.375C10 9.54076 9.93415 9.69973 9.81694 9.81694C9.69973 9.93415 9.54076 10 9.375 10H8.125C7.95924 10 7.80027 9.93415 7.68306 9.81694C7.56585 9.69973 7.5 9.54076 7.5 9.375C7.5 9.20924 7.56585 9.05027 7.68306 8.93306C7.80027 8.81585 7.95924 8.75 8.125 8.75H9.375C9.54076 8.75 9.69973 8.81585 9.81694 8.93306C9.93415 9.05027 10 9.20924 10 9.375Z" fill="currentColor"/></svg>} title="Charge My Card" />}>
                            <div className="tabs-content-box  position-relative">
                                 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <div className='mt-4'>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <FloatingLabel controlId="floatingInput" label="Credit Card Number" className="mb-4  filled-box filled-bg">
                                                    <Form.Control type="text" placeholder="text" defaultValue="1234 1234 1234 1234" />
                                                </FloatingLabel>
                                            </div>
                                            <div className='col-md-12'>
                                                <FloatingLabel controlId="floatingInput" label="Name On Card" className="mb-4  filled-box filled-bg">
                                                    <Form.Control type="text" placeholder="text" defaultValue="John Smith" />
                                                </FloatingLabel>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="calendar-box floating-calendar-box mb-4 position-relative">
                                                <Form.Label>Expiring on </Form.Label>
                                                <DatePicker className="w-100" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <FloatingLabel controlId="floatingInput" label="CSV/CVV*" className="mb-4 credit-card filled-box filled-bg posotion-relative">
                                                <Form.Control type="text" placeholder="text" defaultValue="123" />
                                                <span className="icons position-absolute">
                                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V13.5C0 13.8978 0.158035 14.2794 0.43934 14.5607C0.720644 14.842 1.10218 15 1.5 15H19.5C19.8978 15 20.2794 14.842 20.5607 14.5607C20.842 14.2794 21 13.8978 21 13.5V1.5C21 1.10218 20.842 0.720644 20.5607 0.43934C20.2794 0.158035 19.8978 0 19.5 0ZM19.5 1.5V3.75H1.5V1.5H19.5ZM19.5 13.5H1.5V5.25H19.5V13.5ZM18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H14.25C14.0511 12 13.8603 11.921 13.7197 11.7803C13.579 11.6397 13.5 11.4489 13.5 11.25C13.5 11.0511 13.579 10.8603 13.7197 10.7197C13.8603 10.579 14.0511 10.5 14.25 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25ZM12 11.25C12 11.4489 11.921 11.6397 11.7803 11.7803C11.6397 11.921 11.4489 12 11.25 12H9.75C9.55109 12 9.36032 11.921 9.21967 11.7803C9.07902 11.6397 9 11.4489 9 11.25C9 11.0511 9.07902 10.8603 9.21967 10.7197C9.36032 10.579 9.55109 10.5 9.75 10.5H11.25C11.4489 10.5 11.6397 10.579 11.7803 10.7197C11.921 10.8603 12 11.0511 12 11.25Z" fill="#4B7652"/></svg>
                                                </span>
                                            </FloatingLabel>
                                            </div>
                                            <div className='col-md-12'>
                                                <FloatingLabel controlId="floatingInput" label="Billing Address" className="mb-4 filled-box filled-bg ">
                                                    <Form.Control type="text" placeholder="123456" defaultValue="Billing Address" />
                                                </FloatingLabel>
                                            </div>
                                            <div className='col-md-6 mb-4'>
                                                <FloatingLabel controlId="floatingSelect" label="City" className=''>
                                                    <Form.Select aria-label="Floating label select example">
                                                        <option>Huston</option>
                                                        <option value="1">Huston 1</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </div>
                                            <div className='col-md-6 mb-4'>
                                                <FloatingLabel controlId="floatingSelect" label="State" className=''>
                                                    <Form.Select aria-label="Floating label select example">
                                                        <option>Taxus</option>
                                                        <option value="1">Taxus 1</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </div>
                                            <div className='col-md-12'>
                                                <FloatingLabel controlId="floatingInput" label="Billing ZIP Code" className="mb-0 filled-box filled-bg ">
                                                    <Form.Control type="text" placeholder="123456" defaultValue="Billing ZIP Code" />
                                                </FloatingLabel>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Container>
                            </div>
                        </Tab>
                        <Tab eventKey="Second" title={<TabTitle icon={<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.9375 6.875C0.77174 6.875 0.612768 6.80915 0.495558 6.69194C0.378348 6.57473 0.3125 6.41576 0.3125 6.25C0.3125 6.08424 0.378348 5.92527 0.495558 5.80806C0.612768 5.69085 0.77174 5.625 0.9375 5.625H3.125C3.29076 5.625 3.44973 5.55915 3.56694 5.44194C3.68415 5.32473 3.75 5.16576 3.75 5C3.75 4.83424 3.68415 4.67527 3.56694 4.55806C3.44973 4.44085 3.29076 4.375 3.125 4.375H1.875C1.37772 4.375 0.900806 4.17746 0.549175 3.82583C0.197544 3.47419 0 2.99728 0 2.5C0 2.00272 0.197544 1.52581 0.549175 1.17417C0.900806 0.822544 1.37772 0.625 1.875 0.625C1.875 0.45924 1.94085 0.300269 2.05806 0.183058C2.17527 0.0658481 2.33424 0 2.5 0C2.66576 0 2.82473 0.0658481 2.94194 0.183058C3.05915 0.300269 3.125 0.45924 3.125 0.625H3.75C3.91576 0.625 4.07473 0.690848 4.19194 0.808058C4.30915 0.925269 4.375 1.08424 4.375 1.25C4.375 1.41576 4.30915 1.57473 4.19194 1.69194C4.07473 1.80915 3.91576 1.875 3.75 1.875H1.875C1.70924 1.875 1.55027 1.94085 1.43306 2.05806C1.31585 2.17527 1.25 2.33424 1.25 2.5C1.25 2.66576 1.31585 2.82473 1.43306 2.94194C1.55027 3.05915 1.70924 3.125 1.875 3.125H3.125C3.62228 3.125 4.09919 3.32254 4.45083 3.67417C4.80246 4.02581 5 4.50272 5 5C5 5.49728 4.80246 5.97419 4.45083 6.32583C4.09919 6.67746 3.62228 6.875 3.125 6.875C3.125 7.04076 3.05915 7.19973 2.94194 7.31694C2.82473 7.43415 2.66576 7.5 2.5 7.5C2.33424 7.5 2.17527 7.43415 2.05806 7.31694C1.94085 7.19973 1.875 7.04076 1.875 6.875H0.9375ZM16.875 1.25V11.875C16.875 12.2065 16.7433 12.5245 16.5089 12.7589C16.2745 12.9933 15.9565 13.125 15.625 13.125H1.875C1.54348 13.125 1.22554 12.9933 0.991116 12.7589C0.756696 12.5245 0.625 12.2065 0.625 11.875V8.75C0.625 8.58424 0.690848 8.42527 0.808058 8.30806C0.925268 8.19085 1.08424 8.125 1.25 8.125C1.41576 8.125 1.57473 8.19085 1.69194 8.30806C1.80915 8.42527 1.875 8.58424 1.875 8.75V11.875H11.25V9.375H5C4.83424 9.375 4.67527 9.30915 4.55806 9.19194C4.44085 9.07473 4.375 8.91576 4.375 8.75C4.375 8.58424 4.44085 8.42527 4.55806 8.30806C4.67527 8.19085 4.83424 8.125 5 8.125H11.25V5.625H6.875C6.70924 5.625 6.55027 5.55915 6.43306 5.44194C6.31585 5.32473 6.25 5.16576 6.25 5C6.25 4.83424 6.31585 4.67527 6.43306 4.55806C6.55027 4.44085 6.70924 4.375 6.875 4.375H15.625V1.875H6.25C6.08424 1.875 5.92527 1.80915 5.80806 1.69194C5.69085 1.57473 5.625 1.41576 5.625 1.25C5.625 1.08424 5.69085 0.925269 5.80806 0.808058C5.92527 0.690848 6.08424 0.625 6.25 0.625H16.25C16.4158 0.625 16.5747 0.690848 16.6919 0.808058C16.8092 0.925269 16.875 1.08424 16.875 1.25ZM12.5 8.125H15.625V5.625H12.5V8.125ZM15.625 11.875V9.375H12.5V11.875H15.625Z" fill="currentColor"/></svg>} title="Send Me Invoice" />}>
                            <div className="tabs-content-box  position-relative">
                                 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <div className='mt-4'>
                                        <div className='row'>
                                            <div className='col-md-12 mb-4'>
                                                <FloatingLabel controlId="floatingSelect" label="Invoice Duration" className=''>
                                                    <Form.Select aria-label="Floating label select example">
                                                        <option>Weekly</option>
                                                        <option value="1">Weekly 1</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </div>
                                            <div className='col-md-12 mb-4'>
                                                <FloatingLabel controlId="floatingSelect" label="Send Invoice To" className=''>
                                                    <Form.Select aria-label="Floating label select example">
                                                        <option>Other</option>
                                                        <option value="1">Other 1</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </div>
                                            <div className='col-md-12'>
                                                <FloatingLabel controlId="floatingInput" label="Enter Email" className="mb-0 filled-box filled-bg ">
                                                    <Form.Control type="email" placeholder="123456" defaultValue="markwill@xyz.com" />
                                                </FloatingLabel>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Container>
                            </div>
                        </Tab>
                    </Tabs>
                    </div>
                    
               
            </Modal.Body>

            <Modal.Footer className="flex-nowrap m-1 border-0 pt-0">
                <button className="btn-outline fill-btn w-100 ">
                Save Details
                </button>
            </Modal.Footer>
        </Modal>
  )
}

export default PaymentInfoModal