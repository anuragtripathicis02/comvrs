import React from 'react'
import BackArrow from '../../assets/icons/BackArrow'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import FileUpload from '../../comonComponent/FileUpload'

const ViewOrder = () => {
  return (
    <div className='view-order-sec'>
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
            <Link to="" className="icon-back">
                <BackArrow />
            </Link>
            <div className="page-title-right">
                <h6 className="m-0 p-0">View Order</h6>
                <Breadcrumb className="m-0">
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item href="/completing-profile"> My Orders </Breadcrumb.Item>
                    <Breadcrumb.Item active>OID-#448373</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-8 col-md-12 '>
                <div className='view-order-left mb-4'>
                    <div className='card-box white-card w-100 d-flex align-items-center justify-content-between gap-2 flex-lg-nowrap flex-wrap min-h-90'>
                        <div className='card-text text-start'>
                           <h5 className='p-0 m-0 mb-1'>OID-#4483347</h5>
                           <p className='p-0 m-0 fs-16'>Record Type: CBI Arrest Record</p>
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
                        <div className='no-file d-flex align-items-center gap-2'>
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.125 15.625C3.125 15.7908 3.05915 15.9497 2.94194 16.0669C2.82473 16.1842 2.66576 16.25 2.5 16.25H1.25C0.918479 16.25 0.600537 16.1183 0.366116 15.8839C0.131696 15.6495 0 15.3315 0 15V12.5C0 12.3342 0.0658481 12.1753 0.183058 12.0581C0.300269 11.9408 0.45924 11.875 0.625 11.875C0.79076 11.875 0.949731 11.9408 1.06694 12.0581C1.18415 12.1753 1.25 12.3342 1.25 12.5V15H2.5C2.66576 15 2.82473 15.0658 2.94194 15.1831C3.05915 15.3003 3.125 15.4592 3.125 15.625ZM13.75 5V8.75C13.75 8.91576 13.6842 9.07473 13.5669 9.19194C13.4497 9.30915 13.2908 9.375 13.125 9.375C12.9592 9.375 12.8003 9.30915 12.6831 9.19194C12.5658 9.07473 12.5 8.91576 12.5 8.75V5.625H8.75C8.58424 5.625 8.42527 5.55915 8.30806 5.44194C8.19085 5.32473 8.125 5.16576 8.125 5V1.25H6.25C6.08424 1.25 5.92527 1.18415 5.80806 1.06694C5.69085 0.949732 5.625 0.790761 5.625 0.625C5.625 0.45924 5.69085 0.300269 5.80806 0.183058C5.92527 0.0658482 6.08424 1.93249e-07 6.25 1.93249e-07H8.75C8.8321 -6.43662e-05 8.91341 0.0160474 8.98928 0.0474149C9.06515 0.0787825 9.1341 0.124791 9.19219 0.182813L13.5672 4.55781C13.6252 4.6159 13.6712 4.68485 13.7026 4.76072C13.734 4.83659 13.7501 4.9179 13.75 5ZM9.375 4.375H11.6164L9.375 2.13359V4.375ZM3.125 1.93249e-07H1.25C0.918479 1.93249e-07 0.600537 0.131696 0.366116 0.366117C0.131696 0.600537 0 0.91848 0 1.25V3.125C0 3.29076 0.0658481 3.44973 0.183058 3.56694C0.300269 3.68415 0.45924 3.75 0.625 3.75C0.79076 3.75 0.949731 3.68415 1.06694 3.56694C1.18415 3.44973 1.25 3.29076 1.25 3.125V1.25H3.125C3.29076 1.25 3.44973 1.18415 3.56694 1.06694C3.68415 0.949732 3.75 0.790761 3.75 0.625C3.75 0.45924 3.68415 0.300269 3.56694 0.183058C3.44973 0.0658482 3.29076 1.93249e-07 3.125 1.93249e-07ZM13.125 11.25C12.9592 11.25 12.8003 11.3158 12.6831 11.4331C12.5658 11.5503 12.5 11.7092 12.5 11.875V15H11.875C11.7092 15 11.5503 15.0658 11.4331 15.1831C11.3158 15.3003 11.25 15.4592 11.25 15.625C11.25 15.7908 11.3158 15.9497 11.4331 16.0669C11.5503 16.1842 11.7092 16.25 11.875 16.25H12.5C12.8315 16.25 13.1495 16.1183 13.3839 15.8839C13.6183 15.6495 13.75 15.3315 13.75 15V11.875C13.75 11.7092 13.6842 11.5503 13.5669 11.4331C13.4497 11.3158 13.2908 11.25 13.125 11.25ZM0.625 10C0.79076 10 0.949731 9.93415 1.06694 9.81694C1.18415 9.69973 1.25 9.54076 1.25 9.375V6.25C1.25 6.08424 1.18415 5.92527 1.06694 5.80806C0.949731 5.69085 0.79076 5.625 0.625 5.625C0.45924 5.625 0.300269 5.69085 0.183058 5.80806C0.0658481 5.92527 0 6.08424 0 6.25V9.375C0 9.54076 0.0658481 9.69973 0.183058 9.81694C0.300269 9.93415 0.45924 10 0.625 10ZM8.75 15H5.625C5.45924 15 5.30027 15.0658 5.18306 15.1831C5.06585 15.3003 5 15.4592 5 15.625C5 15.7908 5.06585 15.9497 5.18306 16.0669C5.30027 16.1842 5.45924 16.25 5.625 16.25H8.75C8.91576 16.25 9.07473 16.1842 9.19194 16.0669C9.30915 15.9497 9.375 15.7908 9.375 15.625C9.375 15.4592 9.30915 15.3003 9.19194 15.1831C9.07473 15.0658 8.91576 15 8.75 15Z" fill="currentColor"/></svg>
                            <span className='d-block'>No files attached</span>
                        </div>
                    </div>
                </div>
                <div className='view-order-left mb-4'> 
                    <div className="head-box w-100 mb-2">
                        <p className="m-0 font-w-600 fs-16">Public Notes</p>
                    </div>
                   <div className='card-box white-card w-100'>
                        <div className='no-file d-flex align-items-center gap-2'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4422 2.6833L12.9422 0.183304C12.8841 0.125194 12.8152 0.0790944 12.7393 0.0476417C12.6635 0.016189 12.5821 0 12.5 0C12.4179 0 12.3365 0.016189 12.2607 0.0476417C12.1848 0.0790944 12.1159 0.125194 12.0578 0.183304L4.55781 7.6833C4.49979 7.74139 4.45378 7.81034 4.42241 7.88621C4.39105 7.96208 4.37494 8.04339 4.375 8.12549V10.6255C4.375 10.7913 4.44085 10.9502 4.55806 11.0674C4.67527 11.1846 4.83424 11.2505 5 11.2505H7.5C7.5821 11.2506 7.66341 11.2344 7.73928 11.2031C7.81515 11.1717 7.8841 11.1257 7.94219 11.0677L15.4422 3.56768C15.5003 3.50963 15.5464 3.4407 15.5779 3.36483C15.6093 3.28896 15.6255 3.20763 15.6255 3.12549C15.6255 3.04336 15.6093 2.96203 15.5779 2.88615C15.5464 2.81028 15.5003 2.74135 15.4422 2.6833ZM7.24141 10.0005H5.625V8.38409L10.625 3.38409L12.2414 5.00049L7.24141 10.0005ZM13.125 4.1169L11.5086 2.50049L12.5 1.50909L14.1164 3.12549L13.125 4.1169ZM15 8.12549V14.3755C15 14.707 14.8683 15.025 14.6339 15.2594C14.3995 15.4938 14.0815 15.6255 13.75 15.6255H1.25C0.918479 15.6255 0.600537 15.4938 0.366116 15.2594C0.131696 15.025 0 14.707 0 14.3755V1.87549C0 1.54397 0.131696 1.22603 0.366116 0.991608C0.600537 0.757188 0.918479 0.625492 1.25 0.625492H7.5C7.66576 0.625492 7.82473 0.69134 7.94194 0.80855C8.05915 0.92576 8.125 1.08473 8.125 1.25049C8.125 1.41625 8.05915 1.57522 7.94194 1.69243C7.82473 1.80964 7.66576 1.87549 7.5 1.87549H1.25V14.3755H13.75V8.12549C13.75 7.95973 13.8158 7.80076 13.9331 7.68355C14.0503 7.56634 14.2092 7.50049 14.375 7.50049C14.5408 7.50049 14.6997 7.56634 14.8169 7.68355C14.9342 7.80076 15 7.95973 15 8.12549Z" fill="currentColor"/></svg>
                            <span className='d-block'>No notes attached</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-12'>
                <div className='view-order-right'>
                    <div className='view-order-left mb-4'> 
                        <div className="head-box w-100 mb-2">
                            <p className="m-0 font-w-600 fs-16">Requested By</p>
                        </div>
                        <div className='card-box white-card w-100'>
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
                            <span>Create Statement</span>
                        </div>
                    </div>
                    <div className='mail-text text-center mb-4'>
                        <p className='p-0 m-0 mb-1 fs-16'><strong>Questions about this order? Email: </strong></p>
                        <Link to="" className='fs-16 d-block text-link'>process@comvrs.com</Link>
                    </div>
                    <Link to="" className='btn-outline fill-btn d-flex align-items-center gap-2 w-100 justify-content-center'>
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9209 5.57906L11.6709 0.329063C11.5664 0.224624 11.4423 0.141808 11.3057 0.0853468C11.1691 0.0288852 11.0228 -0.000115859 10.875 3.47849e-07H1.875C1.37772 3.47849e-07 0.900806 0.197544 0.549175 0.549175C0.197544 0.900806 0 1.37772 0 1.875V18.375C0 18.8723 0.197544 19.3492 0.549175 19.7008C0.900806 20.0525 1.37772 20.25 1.875 20.25H15.375C15.8723 20.25 16.3492 20.0525 16.7008 19.7008C17.0525 19.3492 17.25 18.8723 17.25 18.375V6.375C17.2501 6.22722 17.2211 6.08086 17.1647 5.94429C17.1082 5.80772 17.0254 5.68362 16.9209 5.57906ZM13.7812 5.625H11.625V3.46875L13.7812 5.625ZM7.5 18V16.125H8.25C8.54837 16.125 8.83452 16.0065 9.04549 15.7955C9.25647 15.5845 9.375 15.2984 9.375 15C9.375 14.7016 9.25647 14.4155 9.04549 14.2045C8.83452 13.9935 8.54837 13.875 8.25 13.875H7.5V12.375H8.25C8.54837 12.375 8.83452 12.2565 9.04549 12.0455C9.25647 11.8345 9.375 11.5484 9.375 11.25C9.375 10.9516 9.25647 10.6655 9.04549 10.4545C8.83452 10.2435 8.54837 10.125 8.25 10.125H7.5V9C7.5 8.70163 7.38147 8.41548 7.1705 8.2045C6.95952 7.99353 6.67337 7.875 6.375 7.875C6.07663 7.875 5.79048 7.99353 5.5795 8.2045C5.36853 8.41548 5.25 8.70163 5.25 9V10.125H4.5C4.20163 10.125 3.91548 10.2435 3.7045 10.4545C3.49353 10.6655 3.375 10.9516 3.375 11.25C3.375 11.5484 3.49353 11.8345 3.7045 12.0455C3.91548 12.2565 4.20163 12.375 4.5 12.375H5.25V13.875H4.5C4.20163 13.875 3.91548 13.9935 3.7045 14.2045C3.49353 14.4155 3.375 14.7016 3.375 15C3.375 15.2984 3.49353 15.5845 3.7045 15.7955C3.91548 16.0065 4.20163 16.125 4.5 16.125H5.25V18H2.25V2.25H9.375V6.75C9.375 7.04837 9.49353 7.33452 9.70451 7.5455C9.91548 7.75647 10.2016 7.875 10.5 7.875H15V18H7.5Z" fill="currentColor"/></svg> <span> Download Results</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewOrder