import  {useEffect, useRef, useState} from 'react'
import { Modal, Button, Tab, Tabs, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

const TabTitle = ({ title, icon }) => (
  <div className="tab-simple-tabs d-flex align-items-center gap-2 justify-content-center">
    <span className="main-icons">{icon}</span>
    <span className="main-title">{title}</span>
  </div>
);

const SelectProductModal = ({ show, handleClose }) => {
     
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
     

       
    const [selectedOption, setSelectedOption] = useState("radiobox-1");
    const [selectedOption1, setSelectedOption1] = useState("radiobox-40");
       
  return (
    <Modal show={show} onHide={handleClose} centered  className="common-modal sm-modal pt-lg-4 pt-5">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>

            <Modal.Body className="common-modal-body">
                <div className="modal-inner-content">
                    <h5 className="mb-2 m-0 p-0  ">Select Product</h5> 
                    <p className="p-0 m-0 mb-3">Choose a reference product to proceed furether</p>
                </div>
                <div className="tabs-default-box font-16 scrollBar" ref={tabsWrapperRef}>
                    <Tabs activeKey={activeKey} onSelect={handleTabClick} className="tabs-default-box tabs-fifty">
                        <Tab eventKey="First" title={<TabTitle title="DMV Records" />}>
                            <div className="tabs-content-box  position-relative">
                                 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <div className='mt-4'>
                                        <div className='row'>
                                           <div className='col-md-12'>
                                                <div className='procced-sec scrollable'>
                                                    <ul className='p-0 m-0 list-unstyled d-flex flex-wrap flex-column list-procced gap-2 fixed-modal'>
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 1" checked={selectedOption === "radiobox-1"}  onChange={() => setSelectedOption("radiobox-1")} id='radiobox-1' label="09- Other"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 2" checked={selectedOption === "radiobox-2"}  onChange={() => setSelectedOption("radiobox-2")} id='radiobox-2' label="INSURANCE POLICY SEARCH "  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 3" checked={selectedOption === "radiobox-3"}  onChange={() => setSelectedOption("radiobox-3")} id='radiobox-3' label="7-year Driving Record (MVR)"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-4"}  onChange={() => setSelectedOption("radiobox-4")} id='radiobox-4' label="7-year Driving Record (MVR), Certified"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-5"}  onChange={() => setSelectedOption("radiobox-5")} id='radiobox-5' label="Lifetime Driving Record (MVR)"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-6"}  onChange={() => setSelectedOption("radiobox-6")} id='radiobox-6' label="Lifetime Driving Record (MVR), Certified"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-7"}  onChange={() => setSelectedOption("radiobox-7")} id='radiobox-7' label="Out of State Driving Records"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-8"}  onChange={() => setSelectedOption("radiobox-8")} id='radiobox-8' label="Accident Report (Specific Accident) DMV Copy"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-9"}  onChange={() => setSelectedOption("radiobox-9")} id='radiobox-9' label="Accident Reports (All), DMV Copy"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-10"}  onChange={() => setSelectedOption("radiobox-10")} id='radiobox-10' label="Vehicles Registered to a Person"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-11"}  onChange={() => setSelectedOption("radiobox-11")} id='radiobox-11' label="Current Registration Info on Plate"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-12"}  onChange={() => setSelectedOption("radiobox-12")} id='radiobox-12' label="Current Registration Info on VIN"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-13"}  onChange={() => setSelectedOption("radiobox-13")} id='radiobox-13' label="Lienholder Information on a VIN"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-14"}  onChange={() => setSelectedOption("radiobox-14")} id='radiobox-14' label="Title Histories on a VIN"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-15"}  onChange={() => setSelectedOption("radiobox-15")} id='radiobox-15' label="DUI Records (Expressed Consent Pkt)"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-16"}  onChange={() => setSelectedOption("radiobox-16")} id='radiobox-16' label="Copy of Application for License or ID"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-17"}  onChange={() => setSelectedOption("radiobox-17")} id='radiobox-17' label="Suspension Letters"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-18"}  onChange={() => setSelectedOption("radiobox-18")} id='radiobox-18' label="Ticket/Citation Copy"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceType" aria-label="radio 4" checked={selectedOption === "radiobox-19"}  onChange={() => setSelectedOption("radiobox-19")} id='radiobox-19' label="Minor Affidavit (Affidavit of Liability and Guardianship)"  />
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                </Tab.Container>
                            </div>
                        </Tab>
                        <Tab eventKey="Second" title={<TabTitle title="Police Records" />}>
                            <div className="tabs-content-box  position-relative">
                                 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <div className='mt-4'>
                                        <div className='row'>
                                           <div className='col-md-12'>
                                                <div className='procced-sec scrollable'>
                                                    <ul className='p-0 m-0 list-unstyled d-flex flex-wrap flex-column list-procced gap-2 fixed-modal'>
                                                       <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceTypeNew" aria-label="radio 40" checked={selectedOption1 === "radiobox-40"}  onChange={() => setSelectedOption1("radiobox-40")} id='radiobox-40' label="Title Histories on a VIN"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceTypeNew" aria-label="radio 41" checked={selectedOption1 === "radiobox-41"}  onChange={() => setSelectedOption1("radiobox-41")} id='radiobox-41' label="DUI Records (Expressed Consent Pkt)"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceTypeNew" aria-label="radio 42" checked={selectedOption1 === "radiobox-42"}  onChange={() => setSelectedOption1("radiobox-42")} id='radiobox-42' label="Copy of Application for License or ID"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceTypeNew" aria-label="radio 43" checked={selectedOption1 === "radiobox-43"}  onChange={() => setSelectedOption1("radiobox-43")} id='radiobox-43' label="Suspension Letters"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceTypeNew" aria-label="radio 44" checked={selectedOption1 === "radiobox-44"}  onChange={() => setSelectedOption1("radiobox-44")} id='radiobox-44' label="Ticket/Citation Copy"  />
                                                            
                                                        </li>
                                                        <hr className='p-0 m-0 color-lighter-hr' />
                                                        <li className='d-flex align-items-center gap-2 w-100' >
                                                            <Form.Check type="radio" name="serviceTypeNew" aria-label="radio 45" checked={selectedOption1 === "radiobox-45"}  onChange={() => setSelectedOption1("radiobox-45")} id='radiobox-45' label="Minor Affidavit (Affidavit of Liability and Guardianship)"  />
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
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
                <Link to="/select-data-field" className="btn-outline fill-btn w-100 ">
                Proceed to Form Builder
                </Link>
            </Modal.Footer>
        </Modal>
  )
}

export default SelectProductModal