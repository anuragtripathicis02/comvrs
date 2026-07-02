import { Form } from "react-bootstrap"
import { DateRangePicker } from "rsuite"


const AnnouncementsHead = () => {
  return (
    <div className='billing-history-sec'>
        {/* <div className="head-box w-100 mb-2">
            <p className="m-0 font-w-600 fs-16">Billing History</p>
        </div> */}
        <div className='fice-col-box white-select'>
            <div className="header-list-box p-0 mb-2 border-0 radius-0">
                <ul className="p-0 pb-2 min-w-900 m-0 list-unstyled d-flex radius-0  flex-wrap">
                    <li>
                        <Form.Group className="position-relative search-box">
                            <Form.Control type="text" placeholder="Search by user id or customer name..." className='ps-5 w-100'/>
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
                            <span className="option-in-select">User :  </span>
                            <Form.Select aria-label="Default select example">
                                <option>Recent First</option>
                                <option value="1"> First One</option>
                                <option value="2"> First Two</option>
                                <option value="3"> First Three</option>
                            </Form.Select>
                        </Form.Group>  
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default AnnouncementsHead