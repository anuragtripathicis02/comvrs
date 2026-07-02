
import { Modal, Button, Tab, FloatingLabel, Form } from "react-bootstrap";
import { DatePicker } from "rsuite";


const CreatePromotionModal  = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal md-modal pt-lg-4 pt-5">
      <Button variant="link" className="btn-close-btn" onClick={handleClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor"/>
        </svg>
      </Button>

      <Modal.Body className="common-modal-body">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="modal-inner-content">
            <h5 className="m-0 p-0 mb-1">Create Promotion</h5> 
            <p className="p-0 m-0">Create a coupon code or promotional offer</p>
            <div className='form-box mt-4'>
              <div className='row'>
                <div className='col-md-8'>
                  <FloatingLabel controlId="floatingInput" label="Promotion Title" className="mb-4 filled-box filled-bg">
                    <Form.Control type="text" placeholder="text" defaultValue="Christmas special" />
                  </FloatingLabel>
                </div>
                <div className='col-md-4'>
                  <FloatingLabel controlId="floatingInput" label="Promo Code" className="mb-4 filled-box filled-bg">
                    <Form.Control type="text" placeholder="text" defaultValue="COMVRS10" />
                  </FloatingLabel>
                </div>
                <div className='col-md-4 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Discount Type">
                        <Form.Select aria-label="Floating label select example">
                            <option>Flat (fixed)</option>
                            <option value="1">Flat (fixed) 1</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-md-4 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Unit">
                        <Form.Select aria-label="Floating label select example">
                            <option>Percentile (%)</option>
                            <option value="1">Percentile (%) 1</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-md-4 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Value(%)">
                        <Form.Select aria-label="Floating label select example">
                            <option>10%</option>
                            <option value="1">10% 1</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className="col-md-4">
                    <div className="calendar-box floating-calendar-box mb-4 position-relative">
                      <Form.Label>Valid From </Form.Label>
                      <DatePicker className="w-100" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="calendar-box floating-calendar-box mb-4 position-relative">
                      <Form.Label>Valid Through </Form.Label>
                      <DatePicker className="w-100" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="calendar-box floating-calendar-box mb-4 position-relative">
                      <Form.Label>Status </Form.Label>
                      <DatePicker className="w-100" />
                    </div>
                </div>
                <div className='col-md-12 mb-4'>
                    <FloatingLabel controlId="floatingSelect" label="Applied Product/Services">
                        <Form.Select aria-label="Floating label select example">
                            <option>All / Any</option>
                            <option value="1">All / Any 1</option>
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <div className='col-md-12'>
                    <FloatingLabel controlId="floatingTextarea2" label="Description" className="mb-0">
                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} defaultValue="Get 10% Off for your first order every day from 1st to 26th December."/>
                    </FloatingLabel>
                </div>
              </div>
            </div>
          </div>
        </Tab.Container>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn-outline grey-btn" onClick={handleClose}>
          Clear Form
        </button>

        <button className="btn-outline fill-btn">
          Save Promotion
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreatePromotionModal