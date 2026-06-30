import { Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/BackArrow";
import { Breadcrumb } from "react-bootstrap";
import FileUpload from "../../../comonComponent/FileUpload";
import OrderAdmin from "../../../assets/images/order-admin.png"

const ViewOrders = () => {
  return (
    <div className="views-order-sec">
      <div className="page-title">
        <div className="d-flex align-items-center gap-2">
          <Link to="" className="icon-back">
            <BackArrow />
          </Link>
          <div className="page-title-right">
            <h6 className="m-0 p-0">View Order</h6>
            <Breadcrumb className="m-0">
              <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
              <Breadcrumb.Item href="/clients"> Customers </Breadcrumb.Item>
              <Breadcrumb.Item active>CID-#23455</Breadcrumb.Item>
              <Breadcrumb.Item active>OID-#448337</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      
        <div className='row'>
            <div className='col-lg-8 col-md-12 '>
                <div className='view-order-left mb-4'>
                    <div className='card-box white-card w-100 d-flex align-items-center justify-content-between gap-2 flex-lg-nowrap flex-wrap min-h-90'>
                        <div className='card-text text-start'>
                            <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-2 mb-2">
                                <li>
                                    <Link to="" className=" inline-block blue-btn blue-text btn-small">New</Link>
                                </li>
                                <li>
                                    <Link to="" className="inline-block green-lighter-btn green-lighter-text btn-small">Paid</Link>
                                </li>
                                <li>
                                    <p className='p-0 m-0 fs-16'><strong> OID-#4483347 </strong></p>
                                </li>
                            </ul>
                            <h5 className='p-0 m-0 mb-1'>Record Type: CBI Arrest Record</h5>
                        </div>
                        <div className='card-text text-md-end text-start'>
                            <p className='p-0 m-0 mb-1 fs-16 color-secondary-500'>Ordered On</p> 
                            <p className='p-0 m-0  fs-16'>05-27-2026 at 03:24 AM</p>
                        </div>
                    </div>
                </div>
                <div className='view-order-left mb-4'> 
                    <div className="head-box w-100 mb-2">
                        <p className="m-0 font-w-600 fs-16">Details Provided</p>
                    </div>
                    <div className='card-box white-card w-100'>
                        <div className='list-details'>
                            <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                <p className='p-0 m-0'>First Name</p>
                                <span className='p-0 m-0'>:</span>
                                <p className='p-0 m-0'>Mikel James</p>
                            </div>
                            <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                <p className='p-0 m-0'>Last Name</p>
                                <span className='p-0 m-0'>:</span>
                                <p className='p-0 m-0'>Smith</p>
                            </div>
                            <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                <p className='p-0 m-0'>DOB (MM/DD/YYYY)</p>
                                <span className='p-0 m-0'>:</span>
                                <p className='p-0 m-0'>28/01/1975</p>
                            </div>
                            <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                <p className='p-0 m-0'>SSN</p>
                                <span className='p-0 m-0'>:</span>
                                <p className='p-0 m-0'>122345 45561</p>
                            </div>
                            <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                <p className='p-0 m-0'>Driver License Number and State</p>
                                <span className='p-0 m-0'>:</span>
                                <p className='p-0 m-0'>1234 1234 1234</p>
                            </div>
                            <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                <p className='p-0 m-0'>Complete Address, if known</p>
                                <span className='p-0 m-0'>:</span>
                                <p className='p-0 m-0'>1234 Main Street, Apt 100 Houston, TX 77002</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='view-order-left mb-4'> 
                    <div className="head-box w-100 mb-2">
                        <p className="m-0 font-w-600 fs-16">Additional Info</p>
                    </div>
                    <div className='card-box white-card w-100'>
                        <p className='p-0 m-0'>Lorem ipsum dolor sit amet consectetur. Amet malesuada vel non enim amet. Libero risus mi sed sem natoque accumsan risus. Mauris risus quis accumsan urna nunc. Eget ornare vel et diam vivamus massa et facilisis. Egestas fusce suspendisse tincidunt elit nascetur. Etiam porttitor mi morbi ultrices auctor vestibulum dolor eleifend.</p>
                    </div>
                </div>
                <div className='view-order-left mb-4'> 
                    <div className="head-box w-100 mb-2">
                        <p className="m-0 font-w-600 fs-16">User Attachments</p>
                    </div>
                    <div className=' w-100'>
                    <FileUpload />
                    </div>
                </div>
                <div className='view-order-left mb-4'> 
                    <div className="head-box w-100 mb-2">
                        <p className="m-0 font-w-600 fs-16">CoMVR Attachments</p>
                    </div>
                    <div className='card-box white-card w-100'>
                        <div className='no-file d-flex align-items-center gap-2 text-light-text'>
                             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4422 2.6833L12.9422 0.183304C12.8841 0.125194 12.8152 0.0790944 12.7393 0.0476417C12.6635 0.016189 12.5821 0 12.5 0C12.4179 0 12.3365 0.016189 12.2607 0.0476417C12.1848 0.0790944 12.1159 0.125194 12.0578 0.183304L4.55781 7.6833C4.49979 7.74139 4.45378 7.81034 4.42241 7.88621C4.39105 7.96208 4.37494 8.04339 4.375 8.12549V10.6255C4.375 10.7913 4.44085 10.9502 4.55806 11.0674C4.67527 11.1846 4.83424 11.2505 5 11.2505H7.5C7.5821 11.2506 7.66341 11.2344 7.73928 11.2031C7.81515 11.1717 7.8841 11.1257 7.94219 11.0677L15.4422 3.56768C15.5003 3.50963 15.5464 3.4407 15.5779 3.36483C15.6093 3.28896 15.6255 3.20763 15.6255 3.12549C15.6255 3.04336 15.6093 2.96203 15.5779 2.88615C15.5464 2.81028 15.5003 2.74135 15.4422 2.6833ZM7.24141 10.0005H5.625V8.38409L10.625 3.38409L12.2414 5.00049L7.24141 10.0005ZM13.125 4.1169L11.5086 2.50049L12.5 1.50909L14.1164 3.12549L13.125 4.1169ZM15 8.12549V14.3755C15 14.707 14.8683 15.025 14.6339 15.2594C14.3995 15.4938 14.0815 15.6255 13.75 15.6255H1.25C0.918479 15.6255 0.600537 15.4938 0.366116 15.2594C0.131696 15.025 0 14.707 0 14.3755V1.87549C0 1.54397 0.131696 1.22603 0.366116 0.991608C0.600537 0.757188 0.918479 0.625492 1.25 0.625492H7.5C7.66576 0.625492 7.82473 0.69134 7.94194 0.80855C8.05915 0.92576 8.125 1.08473 8.125 1.25049C8.125 1.41625 8.05915 1.57522 7.94194 1.69243C7.82473 1.80964 7.66576 1.87549 7.5 1.87549H1.25V14.3755H13.75V8.12549C13.75 7.95973 13.8158 7.80076 13.9331 7.68355C14.0503 7.56634 14.2092 7.50049 14.375 7.50049C14.5408 7.50049 14.6997 7.56634 14.8169 7.68355C14.9342 7.80076 15 7.95973 15 8.12549Z" fill="currentColor"/></svg>
                            <span className='d-block'>No attachments yet, accept the order to start uploading the files here.</span>
                        </div>
                    </div>
                </div>
                <div className='view-order-left mb-4'> 
                    <div className="head-box w-100 mb-2">
                        <p className="m-0 font-w-600 fs-16">Public Notes</p>
                    </div>
                    <div className='card-box white-card w-100'>
                        <div className='no-file d-flex align-items-center gap-2 text-light-text'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4422 2.6833L12.9422 0.183304C12.8841 0.125194 12.8152 0.0790944 12.7393 0.0476417C12.6635 0.016189 12.5821 0 12.5 0C12.4179 0 12.3365 0.016189 12.2607 0.0476417C12.1848 0.0790944 12.1159 0.125194 12.0578 0.183304L4.55781 7.6833C4.49979 7.74139 4.45378 7.81034 4.42241 7.88621C4.39105 7.96208 4.37494 8.04339 4.375 8.12549V10.6255C4.375 10.7913 4.44085 10.9502 4.55806 11.0674C4.67527 11.1846 4.83424 11.2505 5 11.2505H7.5C7.5821 11.2506 7.66341 11.2344 7.73928 11.2031C7.81515 11.1717 7.8841 11.1257 7.94219 11.0677L15.4422 3.56768C15.5003 3.50963 15.5464 3.4407 15.5779 3.36483C15.6093 3.28896 15.6255 3.20763 15.6255 3.12549C15.6255 3.04336 15.6093 2.96203 15.5779 2.88615C15.5464 2.81028 15.5003 2.74135 15.4422 2.6833ZM7.24141 10.0005H5.625V8.38409L10.625 3.38409L12.2414 5.00049L7.24141 10.0005ZM13.125 4.1169L11.5086 2.50049L12.5 1.50909L14.1164 3.12549L13.125 4.1169ZM15 8.12549V14.3755C15 14.707 14.8683 15.025 14.6339 15.2594C14.3995 15.4938 14.0815 15.6255 13.75 15.6255H1.25C0.918479 15.6255 0.600537 15.4938 0.366116 15.2594C0.131696 15.025 0 14.707 0 14.3755V1.87549C0 1.54397 0.131696 1.22603 0.366116 0.991608C0.600537 0.757188 0.918479 0.625492 1.25 0.625492H7.5C7.66576 0.625492 7.82473 0.69134 7.94194 0.80855C8.05915 0.92576 8.125 1.08473 8.125 1.25049C8.125 1.41625 8.05915 1.57522 7.94194 1.69243C7.82473 1.80964 7.66576 1.87549 7.5 1.87549H1.25V14.3755H13.75V8.12549C13.75 7.95973 13.8158 7.80076 13.9331 7.68355C14.0503 7.56634 14.2092 7.50049 14.375 7.50049C14.5408 7.50049 14.6997 7.56634 14.8169 7.68355C14.9342 7.80076 15 7.95973 15 8.12549Z" fill="currentColor"/></svg>
                            <span className='d-block'>No notes attached, <Link to="" className="text-link"> Check here </Link>to attach notes to the request.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-12'>
                <div className='view-order-right'>
                    <div className='view-order-left mb-4'> 
                        <div className="head-box w-100 mb-2">
                            <p className="m-0 font-w-600 fs-16">Client Info</p>
                        </div>
                        <div className='card-box white-card w-100'>
                            <div className="author-name d-flex align-items-center gap-2 admin-img-fixed-box">
                                <span className="short-name placeholder-img">
                                    <img src={OrderAdmin} alt="" />
                                </span>
                                <div className='auth-name-details'>
                                    <span className="name fs-16"><strong> Sella Miller</strong></span>
                                    <span className='d-block fs-14'>sellameller@xyz.com</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='view-order-left mb-4'> 
                        <div className="head-box w-100 mb-2 ">
                            <p className="m-0 font-w-600 fs-16">Company Info</p>
                        </div>
                        <div className='card-box white-card w-100 admin-img-fixed-box'>
                            <div className="author-name d-flex align-items-center gap-2">
                                <span className="short-name placeholder-img green-lighter-btn radius-8">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.25 19.5H21.75V9C21.9489 9 22.1397 8.92098 22.2803 8.78033C22.421 8.63968 22.5 8.44891 22.5 8.25C22.5 8.05109 22.421 7.86032 22.2803 7.71967C22.1397 7.57902 21.9489 7.5 21.75 7.5H17.25V4.5C17.4489 4.5 17.6397 4.42098 17.7803 4.28033C17.921 4.13968 18 3.94891 18 3.75C18 3.55109 17.921 3.36032 17.7803 3.21967C17.6397 3.07902 17.4489 3 17.25 3H3.75C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75C3 3.94891 3.07902 4.13968 3.21967 4.28033C3.36032 4.42098 3.55109 4.5 3.75 4.5V19.5H2.25C2.05109 19.5 1.86032 19.579 1.71967 19.7197C1.57902 19.8603 1.5 20.0511 1.5 20.25C1.5 20.4489 1.57902 20.6397 1.71967 20.7803C1.86032 20.921 2.05109 21 2.25 21H23.25C23.4489 21 23.6397 20.921 23.7803 20.7803C23.921 20.6397 24 20.4489 24 20.25C24 20.0511 23.921 19.8603 23.7803 19.7197C23.6397 19.579 23.4489 19.5 23.25 19.5ZM20.25 9V19.5H17.25V9H20.25ZM5.25 4.5H15.75V19.5H13.5V15C13.5 14.8011 13.421 14.6103 13.2803 14.4697C13.1397 14.329 12.9489 14.25 12.75 14.25H8.25C8.05109 14.25 7.86032 14.329 7.71967 14.4697C7.57902 14.6103 7.5 14.8011 7.5 15V19.5H5.25V4.5ZM12 19.5H9V15.75H12V19.5ZM6.75 7.5C6.75 7.30109 6.82902 7.11032 6.96967 6.96967C7.11032 6.82902 7.30109 6.75 7.5 6.75H9C9.19891 6.75 9.38968 6.82902 9.53033 6.96967C9.67098 7.11032 9.75 7.30109 9.75 7.5C9.75 7.69891 9.67098 7.88968 9.53033 8.03033C9.38968 8.17098 9.19891 8.25 9 8.25H7.5C7.30109 8.25 7.11032 8.17098 6.96967 8.03033C6.82902 7.88968 6.75 7.69891 6.75 7.5ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75H13.5C13.6989 6.75 13.8897 6.82902 14.0303 6.96967C14.171 7.11032 14.25 7.30109 14.25 7.5C14.25 7.69891 14.171 7.88968 14.0303 8.03033C13.8897 8.17098 13.6989 8.25 13.5 8.25H12C11.8011 8.25 11.6103 8.17098 11.4697 8.03033C11.329 7.88968 11.25 7.69891 11.25 7.5ZM6.75 11.25C6.75 11.0511 6.82902 10.8603 6.96967 10.7197C7.11032 10.579 7.30109 10.5 7.5 10.5H9C9.19891 10.5 9.38968 10.579 9.53033 10.7197C9.67098 10.8603 9.75 11.0511 9.75 11.25C9.75 11.4489 9.67098 11.6397 9.53033 11.7803C9.38968 11.921 9.19891 12 9 12H7.5C7.30109 12 7.11032 11.921 6.96967 11.7803C6.82902 11.6397 6.75 11.4489 6.75 11.25ZM11.25 11.25C11.25 11.0511 11.329 10.8603 11.4697 10.7197C11.6103 10.579 11.8011 10.5 12 10.5H13.5C13.6989 10.5 13.8897 10.579 14.0303 10.7197C14.171 10.8603 14.25 11.0511 14.25 11.25C14.25 11.4489 14.171 11.6397 14.0303 11.7803C13.8897 11.921 13.6989 12 13.5 12H12C11.8011 12 11.6103 11.921 11.4697 11.7803C11.329 11.6397 11.25 11.4489 11.25 11.25Z" fill="#10B981"/></svg>
                                </span>
                                <div className='auth-name-details'>
                                    <span className="name fs-16"><strong> Sella and Co.</strong></span>
                                    <span className='d-block fs-14'>Huston, Taxes 770012</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='view-order-left mb-4'> 
                        <div className="head-box w-100 mb-2 ">
                            <p className="m-0 font-w-600 fs-16">Requested By</p>
                        </div>
                        <div className='card-box white-card w-100 admin-img-fixed-box'>
                            <div className="author-name d-flex align-items-center gap-2">
                                <span className="short-name placeholder-img">s</span>
                                <div className='auth-name-details'>
                                    <span className="name fs-16"><strong> John Smith</strong></span>
                                    <span className='d-block fs-14'>joshsmith@xyz.com</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='view-order-left mb-4'> 
                        <div className="head-box w-100 mb-2">
                            <p className="m-0 font-w-600 fs-16">Accounting</p>
                        </div>
                        <div className='card-box white-card w-100 position-relative'>
                            <div className='list-details'>
                                <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                    <p className='p-0 m-0'>Initial Order Quote</p>
                                    <span className='p-0 m-0'>:</span>
                                    <p className='p-0 m-0'>$ 20.00</p>
                                </div>
                                <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                    <p className='p-0 m-0'>Actual Order Cost</p>
                                    <span className='p-0 m-0'>:</span>
                                    <p className='p-0 m-0'>$ 20.00</p>
                                </div>
                                <div className='list-details-card pb-2 d-flex align-items-center gap-3 w-100'>
                                    <p className='p-0 m-0'>Additional Charges</p>
                                    <span className='p-0 m-0'>:</span>
                                    <p className='p-0 m-0'>$ 0.00</p>
                                </div>
                                <hr className='p-0 m-0 pb-2' />
                                <div className='list-details-card pb-0 d-flex align-items-center gap-3 w-100'>
                                    <p className='p-0 m-0'><strong>Final Charge Amount</strong></p>
                                    <span className='p-0 m-0'>:</span>
                                    <p className='p-0 m-0'><strong>$ 20.00</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className='card-yellow yellow-btn d-flex align-items-center justify-content-center text-center py-3 pt-4 gap-2'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.1875 5C2.1875 4.75136 2.28627 4.5129 2.46209 4.33709C2.6379 4.16127 2.87636 4.0625 3.125 4.0625H16.875C17.1236 4.0625 17.3621 4.16127 17.5379 4.33709C17.7137 4.5129 17.8125 4.75136 17.8125 5C17.8125 5.24864 17.7137 5.4871 17.5379 5.66291C17.3621 5.83873 17.1236 5.9375 16.875 5.9375H3.125C2.87636 5.9375 2.6379 5.83873 2.46209 5.66291C2.28627 5.4871 2.1875 5.24864 2.1875 5ZM3.125 10.9375H16.875C17.1236 10.9375 17.3621 10.8387 17.5379 10.6629C17.7137 10.4871 17.8125 10.2486 17.8125 10C17.8125 9.75136 17.7137 9.5129 17.5379 9.33709C17.3621 9.16127 17.1236 9.0625 16.875 9.0625H3.125C2.87636 9.0625 2.6379 9.16127 2.46209 9.33709C2.28627 9.5129 2.1875 9.75136 2.1875 10C2.1875 10.2486 2.28627 10.4871 2.46209 10.6629C2.6379 10.8387 2.87636 10.9375 3.125 10.9375ZM11.25 14.0625H3.125C2.87636 14.0625 2.6379 14.1613 2.46209 14.3371C2.28627 14.5129 2.1875 14.7514 2.1875 15C2.1875 15.2486 2.28627 15.4871 2.46209 15.6629C2.6379 15.8387 2.87636 15.9375 3.125 15.9375H11.25C11.4986 15.9375 11.7371 15.8387 11.9129 15.6629C12.0887 15.4871 12.1875 15.2486 12.1875 15C12.1875 14.7514 12.0887 14.5129 11.9129 14.3371C11.7371 14.1613 11.4986 14.0625 11.25 14.0625ZM18.125 14.0625H17.1875V13.125C17.1875 12.8764 17.0887 12.6379 16.9129 12.4621C16.7371 12.2863 16.4986 12.1875 16.25 12.1875C16.0014 12.1875 15.7629 12.2863 15.5871 12.4621C15.4113 12.6379 15.3125 12.8764 15.3125 13.125V14.0625H14.375C14.1264 14.0625 13.8879 14.1613 13.7121 14.3371C13.5363 14.5129 13.4375 14.7514 13.4375 15C13.4375 15.2486 13.5363 15.4871 13.7121 15.6629C13.8879 15.8387 14.1264 15.9375 14.375 15.9375H15.3125V16.875C15.3125 17.1236 15.4113 17.3621 15.5871 17.5379C15.7629 17.7137 16.0014 17.8125 16.25 17.8125C16.4986 17.8125 16.7371 17.7137 16.9129 17.5379C17.0887 17.3621 17.1875 17.1236 17.1875 16.875V15.9375H18.125C18.3736 15.9375 18.6121 15.8387 18.7879 15.6629C18.9637 15.4871 19.0625 15.2486 19.0625 15C19.0625 14.7514 18.9637 14.5129 18.7879 14.3371C18.6121 14.1613 18.3736 14.0625 18.125 14.0625Z" fill="currentColor"/></svg>
                            <span>View Statement</span>
                        </div>
                    </div>
                    <ul className="p-0 m-0 list-unstyled d-flex gap-2 mt-5">
                         <li className="w-100">
                            <Link to="" className='btn-outline red-btn red-text red-border d-flex align-items-center gap-2 w-100 justify-content-center'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1633 8.16328L11.3281 10L13.1656 11.8367C13.3417 12.0128 13.4407 12.2517 13.4407 12.5008C13.4407 12.7499 13.3417 12.9887 13.1656 13.1648C12.9895 13.341 12.7506 13.4399 12.5016 13.4399C12.2525 13.4399 12.0136 13.341 11.8375 13.1648L10 11.3281L8.16328 13.1656C7.98716 13.3417 7.74829 13.4407 7.49922 13.4407C7.25015 13.4407 7.01128 13.3417 6.83516 13.1656C6.65904 12.9895 6.5601 12.7506 6.5601 12.5016C6.5601 12.2525 6.65904 12.0136 6.83516 11.8375L8.67188 10L6.83672 8.16328C6.74952 8.07608 6.68034 7.97255 6.63315 7.85861C6.58595 7.74467 6.56166 7.62255 6.56166 7.49922C6.56166 7.25015 6.6606 7.01128 6.83672 6.83516C7.01284 6.65904 7.25171 6.56009 7.50078 6.56009C7.74986 6.56009 7.98873 6.65904 8.16485 6.83516L10 8.67188L11.8367 6.83438C12.0128 6.65825 12.2517 6.55931 12.5008 6.55931C12.7499 6.55931 12.9887 6.65825 13.1648 6.83438C13.341 7.0105 13.4399 7.24937 13.4399 7.49844C13.4399 7.74751 13.341 7.98638 13.1648 8.1625L13.1633 8.16328ZM18.4375 10C18.4375 11.6688 17.9427 13.3001 17.0155 14.6876C16.0884 16.0752 14.7706 17.1566 13.2289 17.7952C11.6871 18.4338 9.99064 18.6009 8.35393 18.2754C6.71721 17.9498 5.2138 17.1462 4.03379 15.9662C2.85379 14.7862 2.05019 13.2828 1.72463 11.6461C1.39907 10.0094 1.56616 8.31286 2.20477 6.77111C2.84338 5.22936 3.92484 3.9116 5.31238 2.98448C6.69992 2.05735 8.33122 1.5625 10 1.5625C12.237 1.56498 14.3817 2.45473 15.9635 4.03653C17.5453 5.61833 18.435 7.763 18.4375 10ZM16.5625 10C16.5625 8.70206 16.1776 7.43327 15.4565 6.35407C14.7354 5.27487 13.7105 4.43374 12.5114 3.93704C11.3122 3.44034 9.99272 3.31038 8.71972 3.5636C7.44672 3.81681 6.2774 4.44183 5.35962 5.35961C4.44183 6.27739 3.81682 7.44672 3.5636 8.71972C3.31038 9.99272 3.44034 11.3122 3.93704 12.5114C4.43374 13.7105 5.27488 14.7354 6.35407 15.4565C7.43327 16.1776 8.70206 16.5625 10 16.5625C11.7399 16.5606 13.408 15.8686 14.6383 14.6383C15.8686 13.408 16.5606 11.7399 16.5625 10Z" fill="currentColor"/></svg>
                                <span> Reject Request</span>
                            </Link>
                        </li>
                        <li className="w-100">
                            <Link to="" className='btn-outline fill-btn d-flex align-items-center gap-2 w-100 justify-content-center'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7883 7.46172C13.8757 7.54882 13.945 7.65231 13.9923 7.76626C14.0397 7.88022 14.064 8.00239 14.064 8.12578C14.064 8.24917 14.0397 8.37134 13.9923 8.4853C13.945 8.59925 13.8757 8.70275 13.7883 8.78984L9.41328 13.1648C9.32619 13.2522 9.22269 13.3216 9.10874 13.3689C8.99478 13.4162 8.87261 13.4406 8.74922 13.4406C8.62583 13.4406 8.50366 13.4162 8.3897 13.3689C8.27575 13.3216 8.17226 13.2522 8.08516 13.1648L6.21016 11.2898C6.12295 11.2026 6.05378 11.0991 6.00658 10.9852C5.95939 10.8712 5.9351 10.7491 5.9351 10.6258C5.9351 10.5025 5.95939 10.3803 6.00658 10.2664C6.05378 10.1525 6.12295 10.0489 6.21016 9.96172C6.29737 9.87451 6.40089 9.80534 6.51483 9.75814C6.62877 9.71095 6.75089 9.68665 6.87422 9.68665C6.99755 9.68665 7.11967 9.71095 7.23361 9.75814C7.34755 9.80534 7.45108 9.87451 7.53828 9.96172L8.75 11.1719L12.4617 7.45938C12.5489 7.37236 12.6525 7.3034 12.7664 7.25642C12.8803 7.20944 13.0023 7.18537 13.1255 7.18559C13.2487 7.18581 13.3706 7.21031 13.4844 7.25769C13.5981 7.30507 13.7014 7.3744 13.7883 7.46172ZM18.4375 10C18.4375 11.6688 17.9427 13.3001 17.0155 14.6876C16.0884 16.0752 14.7706 17.1566 13.2289 17.7952C11.6871 18.4338 9.99064 18.6009 8.35393 18.2754C6.71721 17.9498 5.2138 17.1462 4.03379 15.9662C2.85379 14.7862 2.05019 13.2828 1.72463 11.6461C1.39907 10.0094 1.56616 8.31286 2.20477 6.77111C2.84338 5.22936 3.92484 3.9116 5.31238 2.98448C6.69992 2.05735 8.33122 1.5625 10 1.5625C12.237 1.56498 14.3817 2.45473 15.9635 4.03653C17.5453 5.61833 18.435 7.763 18.4375 10ZM16.5625 10C16.5625 8.70206 16.1776 7.43327 15.4565 6.35407C14.7354 5.27487 13.7105 4.43374 12.5114 3.93704C11.3122 3.44034 9.99272 3.31038 8.71972 3.5636C7.44672 3.81681 6.2774 4.44183 5.35962 5.35961C4.44183 6.27739 3.81682 7.44672 3.5636 8.71972C3.31038 9.99272 3.44034 11.3122 3.93704 12.5114C4.43374 13.7105 5.27488 14.7354 6.35407 15.4565C7.43327 16.1776 8.70206 16.5625 10 16.5625C11.7399 16.5606 13.408 15.8686 14.6383 14.6383C15.8686 13.408 16.5606 11.7399 16.5625 10Z" fill="currentColor"/></svg>
                                <span> Accept Request</span>
                            </Link>
                        </li>
                    </ul>
                    <p className="m-0 p-0 fs-16 fw-medium text-center mt-4">If you accept the request it will be marked as under progress</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ViewOrders;
