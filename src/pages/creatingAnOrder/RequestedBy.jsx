import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const RequestedBy = () => {
  return (
    <div className='service-selection mb-4'  >
        <div className='optional-information-sec'>
            <h5 className='mb-3'>Requested By</h5>
            <div className='form-box bg-white radius-12 p-20'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 mb-lg-0 mb-4'>
                        <FloatingLabel controlId="floatingSelect" label="">
                            <Form.Select aria-label="Floating label select example">
                                <option>Who is Ordering?</option>
                                <option value="1">Who is Ordering?</option>
                                <option value="2">Who is Ordering?</option>
                                <option value="3">Who is Ordering?</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-lg-0 mb-4'>
                        <FloatingLabel controlId="floatingSelect" label="">
                            <Form.Select aria-label="Floating label select example">
                                <option>Requestee Name</option>
                                <option value="1">Requestee Name</option>
                                <option value="2">Requestee Name</option>
                                <option value="3">Requestee Name</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-0'>
                         <FloatingLabel controlId="floatingInput" label="" className="mb-md-0 filled-box filled-bg">
                            <Form.Control type="text" placeholder="John" defaultValue="Requestee Email"/>
                        </FloatingLabel>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequestedBy