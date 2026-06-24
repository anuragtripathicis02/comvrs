import React, {useState} from 'react'
import { Modal, Button, Tab } from "react-bootstrap";
import AmricanIcons from '../assets/images/american-icons.png'
import EditIcons from '../assets/icons/EditIcons';
import PaymentFailedEditCardModal from './PaymentFailedEditCardModal';


const PaymentFailedModal = ({ show, handleClose }) => {

    const [showPaymentFailed, setShowPaymentFailed] = useState(false);
    const [showEditCard, setShowEditCard] = useState(false);

    const handleOpenEditCard = () => {
    handleClose();
    setShowEditCard(true); 
};

  return (
    <>
        <Modal show={show} onHide={handleClose} centered className="common-modal sm-modal pt-lg-4 pt-5">
            <Button variant="link" className="btn-close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor" />
                </svg>
            </Button>

            <Modal.Body className="common-modal-body">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="modal-inner-content">
                        <h5 className="mb-2 m-0 p-0 red-text ">Edit Card Details</h5> 
                        <p className="p-0 m-0 mb-1">Your Payment for the billing month <strong> May 2026</strong> is failed due to the card details you have entered has been declined.</p>
                        <p className="p-0 m-0 mb-3">Please try again or continue with a different method or use a different card to continue...</p>
                        <p className='p-0 m-0 mb-2'>Card Details:</p>
                        <button className='card-box white-card w-100 text-start border-card' onClick={handleOpenEditCard}>
                            <div className='inner-card-box d-flex align-items-center gap-2 justify-content-between'>
                                <div className='card-left d-flex align-items-center gap-2'>
                                    <div className='img-box'>
                                        <img src={AmricanIcons} alt="" />
                                    </div>
                                    <div className='text-box'>
                                        <p className='p-0 m-0 mb-1 fs-16'><strong>**** **** **** 5234</strong></p>
                                        <span className='d-block'>Expiring on: 02/28</span>
                                        <span className='d-block'>John Smith</span>
                                    </div>
                                </div>
                                <div className='card-right'>
                                    <EditIcons />
                                </div>
                            </div>
                        </button>
                    </div>
                </Tab.Container>
            </Modal.Body>

            <Modal.Footer className="flex-nowrap m-1 border-0 pt-0">
                <button className="btn-outline fill-btn w-100">
                Retry Payment
                </button>
            </Modal.Footer>
        </Modal>
        <PaymentFailedEditCardModal show={showEditCard} handleClose={() => setShowEditCard(false)}/>
    </>
  )
}

export default PaymentFailedModal