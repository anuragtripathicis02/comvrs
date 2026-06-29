import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const AdministratorInfo = () => {
  return (
    <div className='admin-inis-info mt-5'>
        <div className='head-box-icons'>
            <p className='d-flex align-items-center gap-2'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2501 7.50063C14.2501 7.30172 14.3291 7.11095 14.4698 6.9703C14.6104 6.82965 14.8012 6.75063 15.0001 6.75063H23.2501C23.449 6.75063 23.6398 6.82965 23.7804 6.9703C23.9211 7.11095 24.0001 7.30172 24.0001 7.50063C24.0001 7.69954 23.9211 7.89031 23.7804 8.03096C23.6398 8.17161 23.449 8.25063 23.2501 8.25063H15.0001C14.8012 8.25063 14.6104 8.17161 14.4698 8.03096C14.3291 7.89031 14.2501 7.69954 14.2501 7.50063ZM23.2501 11.2506H15.0001C14.8012 11.2506 14.6104 11.3296 14.4698 11.4703C14.3291 11.611 14.2501 11.8017 14.2501 12.0006C14.2501 12.1995 14.3291 12.3903 14.4698 12.531C14.6104 12.6716 14.8012 12.7506 15.0001 12.7506H23.2501C23.449 12.7506 23.6398 12.6716 23.7804 12.531C23.9211 12.3903 24.0001 12.1995 24.0001 12.0006C24.0001 11.8017 23.9211 11.611 23.7804 11.4703C23.6398 11.3296 23.449 11.2506 23.2501 11.2506ZM23.2501 15.7506H17.2501C17.0512 15.7506 16.8604 15.8296 16.7198 15.9703C16.5791 16.111 16.5001 16.3017 16.5001 16.5006C16.5001 16.6995 16.5791 16.8903 16.7198 17.031C16.8604 17.1716 17.0512 17.2506 17.2501 17.2506H23.2501C23.449 17.2506 23.6398 17.1716 23.7804 17.031C23.9211 16.8903 24.0001 16.6995 24.0001 16.5006C24.0001 16.3017 23.9211 16.111 23.7804 15.9703C23.6398 15.8296 23.449 15.7506 23.2501 15.7506ZM14.2266 17.8131C14.2512 17.9085 14.2566 18.0079 14.2428 18.1054C14.2289 18.2029 14.196 18.2968 14.1458 18.3816C14.0957 18.4664 14.0293 18.5404 13.9505 18.5996C13.8717 18.6587 13.7821 18.7018 13.6866 18.7263C13.6255 18.7427 13.5625 18.7509 13.4991 18.7506C13.3328 18.7507 13.1712 18.6955 13.0396 18.5937C12.9081 18.4918 12.8142 18.3492 12.7726 18.1881C12.1951 15.9438 9.92821 14.2506 7.49915 14.2506C5.07009 14.2506 2.80321 15.9428 2.22571 18.1881C2.17598 18.3808 2.05174 18.5459 1.88032 18.647C1.7089 18.7481 1.50434 18.7769 1.31165 18.7272C1.11895 18.6775 0.953902 18.5532 0.852808 18.3818C0.751714 18.2104 0.722857 18.0058 0.772585 17.8131C1.29665 15.7778 2.82009 14.1297 4.75321 13.3131C4.00886 12.7398 3.46264 11.9479 3.19113 11.0484C2.91963 10.149 2.93647 9.18709 3.23928 8.29768C3.5421 7.40827 4.11571 6.63596 4.87967 6.08904C5.64362 5.54213 6.5596 5.24805 7.49915 5.24805C8.43869 5.24805 9.35467 5.54213 10.1186 6.08904C10.8826 6.63596 11.4562 7.40827 11.759 8.29768C12.0618 9.18709 12.0787 10.149 11.8072 11.0484C11.5357 11.9479 10.9894 12.7398 10.2451 13.3131C12.1791 14.1297 13.7026 15.7778 14.2266 17.8131ZM7.50009 12.7506C8.09343 12.7506 8.67345 12.5747 9.1668 12.245C9.66014 11.9154 10.0447 11.4469 10.2717 10.8987C10.4988 10.3505 10.5582 9.7473 10.4424 9.16536C10.3267 8.58342 10.041 8.04887 9.62141 7.62931C9.20185 7.20975 8.6673 6.92403 8.08536 6.80828C7.50341 6.69252 6.90021 6.75193 6.35203 6.97899C5.80386 7.20606 5.33532 7.59057 5.00568 8.08392C4.67603 8.57727 4.50009 9.15729 4.50008 9.75063C4.50009 10.5463 4.81616 11.3093 5.37876 11.872C5.94137 12.4346 6.70444 12.7506 7.50009 12.7506Z" fill="currentColor"/></svg>
                <span>Administrator Info</span>
            </p>
        </div>
        <div className='form-box bg-white radius-12 p-20'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 mb-lg-0 mb-4'>
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-md-0 filled-box filled-bg">
                        <Form.Control type="text" placeholder="John" defaultValue="John"/>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-lg-0 mb-4'>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-md-0 filled-box filled-bg">
                        <Form.Control type="text" placeholder="John" defaultValue="Smith"/>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-md-0 mb-4'>
                        <FloatingLabel controlId="floatingInput" label="Your Email Address" className="mb-md-0 filled-box filled-bg">
                        <Form.Control type="text" placeholder="John" defaultValue="johnsmith@xyz.com"/>
                    </FloatingLabel>
                </div>
                <div className='col-lg-3 col-md-6 mb-0'>
                    <FloatingLabel controlId="floatingSelect" label="Account Type">
                        <Form.Select aria-label="Account Type">
                            <option>Privet Investigator (PI)</option>
                            <option value="1">Privet Investigator (PI)</option>
                            <option value="2">Privet Investigator (PI)</option>
                            <option value="3">Privet Investigator (PI)</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdministratorInfo