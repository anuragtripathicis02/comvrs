import React from "react";
import { Modal, Button, Tab } from "react-bootstrap";

const SubCreateManager = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal sm-modal pt-lg-4 pt-5">
      <Button variant="link" className="btn-close-btn" onClick={handleClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="currentColor"/></svg>
      </Button>

      <Modal.Body className="common-modal-body">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="modal-inner-content sub-user-created-sec">
            <div className="head-modal-create text-center pb-4">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_445_2421)"><path d="M54.3069 14.2023C52.8369 8.79156 47.2095 3.16312 41.7977 1.69313C38.4792 0.86625 34.0342 0.0142187 28 0C21.9658 0.0142187 17.5208 0.86625 14.2023 1.69313C8.79156 3.16312 3.16312 8.79047 1.69313 14.2023C0.86625 17.5208 0.0142187 21.9658 0 28C0.0142187 34.0342 0.86625 38.4792 1.69313 41.7977C3.16312 47.2095 8.79156 52.8369 14.2023 54.3069C17.5208 55.1337 21.968 55.9858 28 56C34.0331 55.9858 38.4792 55.1337 41.7977 54.3069C47.2095 52.8369 52.8369 47.2095 54.3069 41.7977C55.1337 38.4792 55.9858 34.032 56 28C55.9858 21.9658 55.1337 17.5208 54.3069 14.2023Z" fill="#E5F4D9"/><path d="M28 9.40625C24.3225 9.40625 20.7276 10.4968 17.6699 12.5399C14.6121 14.583 12.2289 17.4869 10.8216 20.8845C9.41431 24.282 9.04609 28.0206 9.76353 31.6275C10.481 35.2343 12.2519 38.5474 14.8522 41.1478C17.4526 43.7481 20.7657 45.519 24.3725 46.2365C27.9794 46.9539 31.718 46.5857 35.1155 45.1784C38.5131 43.7711 41.417 41.3879 43.4601 38.3301C45.5033 35.2724 46.5938 31.6775 46.5938 28C46.5938 23.0686 44.6348 18.3392 41.1478 14.8522C37.6608 11.3652 32.9314 9.40625 28 9.40625Z" fill="url(#paint0_linear_445_2421)"/><path d="M38.6095 24.9211L27.4281 36.6592C27.1236 36.9789 26.7577 37.2339 26.3523 37.4089C25.9469 37.5838 25.5104 37.6752 25.0689 37.6775H25.0547C24.6157 37.6774 24.1812 37.5893 23.7769 37.4184C23.3726 37.2474 23.0067 36.9971 22.7009 36.6821L16.7695 30.5714C16.4469 30.2675 16.1893 29.9014 16.0121 29.4952C15.8348 29.089 15.7417 28.6511 15.7384 28.208C15.735 27.7648 15.8215 27.3256 15.9925 26.9167C16.1635 26.5079 16.4156 26.1379 16.7335 25.8292C17.0514 25.5204 17.4286 25.2793 17.8423 25.1203C18.2559 24.9613 18.6975 24.8877 19.1404 24.904C19.5833 24.9204 20.0182 25.0262 20.4191 25.2153C20.8199 25.4043 21.1783 25.6725 21.4726 26.0039L25.0273 29.6668L33.8528 20.3984C34.1497 20.0861 34.5053 19.8353 34.8992 19.6604C35.2931 19.4855 35.7176 19.3898 36.1484 19.379C36.5792 19.3681 37.008 19.4422 37.4102 19.597C37.8124 19.7519 38.1801 19.9844 38.4925 20.2814C38.8048 20.5783 39.0556 20.9339 39.2305 21.3278C39.4054 21.7217 39.501 22.1461 39.5119 22.577C39.5228 23.0078 39.4487 23.4366 39.2938 23.8388C39.139 24.241 38.9065 24.6087 38.6095 24.9211Z" fill="url(#paint1_linear_445_2421)"/></g><defs><linearGradient id="paint0_linear_445_2421" x1="41.1502" y1="41.1502" x2="14.8499" y2="14.8498" gradientUnits="userSpaceOnUse"><stop stop-color="#13B601"/><stop offset="0.52" stop-color="#13B601"/><stop offset="1" stop-color="#CBF4B4"/></linearGradient><linearGradient id="paint1_linear_445_2421" x1="33.1014" y1="30.9881" x2="22.4439" y2="20.3295" gradientUnits="userSpaceOnUse"><stop stop-color="#CBF4B4"/><stop offset="0.57" stop-color="white"/><stop offset="1" stop-color="white"/></linearGradient><clipPath id="clip0_445_2421"><rect width="56" height="56" fill="white"/></clipPath></defs></svg>
                <h5 className="m-0 p-0 mb-1 mt-3">Manager Created!</h5>
                <p className="p-0 m-0">User has been created with the following details</p>
            </div>
            <ul className="p-0 m-0 list-unstyled yellow-btn">
                <li className="d-flex">
                    <span className="text-start text-user">User Name</span>
                    <span className="icons">:</span>
                    <span className="text-end text-user">Don Norman</span>
                </li>
                <li className="d-flex">
                    <span className="text-start text-user">Email</span>
                    <span className="icons">:</span>
                    <span className="text-end text-user word-wrap">mandon@xyz.com</span>
                </li>
                <li className="d-flex">
                    <span className="text-start text-user">Password</span>
                    <span className="icons">:</span>
                    <span className="text-end text-user">***********</span>
                </li>
                <li className="d-flex">
                    <span className="text-start text-user">Status</span>
                    <span className="icons">:</span>
                    <span className="text-end text-user">Active</span>
                </li>
            </ul>
          </div>
        </Tab.Container>
      </Modal.Body>

      <Modal.Footer className="w-100 flex-nowrap border-0 pt-0 p-3">
        <button className="btn-outline grey-btn w-50" onClick={handleClose}>
          Close
        </button>
        <button className="btn-outline fill-btn w-50">
          Copy Details
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default SubCreateManager