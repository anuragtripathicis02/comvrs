import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logoDashboard.png";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import AdminImg from "../assets/images/admin-img.png"
import DropDownImg from "../assets/icons/DropDownImg";

const AdminHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleOverlayClick = () => {
  setMenuOpen(false);
};


  const navigate = useNavigate();
 
  return (
    <div className='header-dashboard position-fixed top-0 w-100 z-3'>
      <div className='header-container'>
        
          <div className='flex-grow-1 d-flex align-items-center'>
            <div className="logo-box d-xl-none d-block">
                <Link to="/dashboard" className="big-logo">
                  <img src={Logo} alt="logo" />
                </Link>
            </div>
            <div className='ms-auto'>
              <div className='d-flex align-items-center gap-2'>
                <div className='dropdownBox txet-drop'>
                    <Dropdown>
                        <Dropdown.Toggle className='dropdown-icons d-flex align-items-center gap-2'>
                            <span>
                              <img src={AdminImg} alt="" />
                            </span>
                            <div className="text-drop d-md-flex align-items-center gap-2 d-none">
                              <div className="text-drop-down">
                                <h6 className="p-0 m-0">Bray Chris</h6>
                                <p className="p-0 m-0">Admin User</p>
                              </div>
                              <DropDownImg />
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu  align="end">
                            <Dropdown.Item onClick={() => navigate("/dashboard")}> User Panel</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate("/admin-dashboard")}>Admin Panel</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <button className={`btn d-xl-none bg-transparent border-0 p-0 ${menuOpen ? "active" : ""}`} onClick={handleMenuToggle}>
                  <span className="mobile-nav">
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        <div
          className={`overlay ${menuOpen ? "show" : ""}`}
          onClick={handleOverlayClick}
        ></div>
      </div>
    </div>
  )
}

export default AdminHeader