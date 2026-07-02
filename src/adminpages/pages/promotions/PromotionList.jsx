import { Dropdown } from "react-bootstrap"

const PromotionList = () => {
  return (
    <div className="promotion-list-sec">
        <div className="card-box white-card w-100 mb-2 position-relative">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <p className="p-0 m-0 mb-1 fs-16"><strong>Christmas Special</strong></p>
                    <p className="p-0 m-0 fs-16 text-link fw-normal">COMVRS10</p>
                </div>
                <div className="col-xl-8 mt-xl-0 mt-3 col-md-12">
                    <div className="promotion-box-com d-flex align-items-center flex-wrap w-100 gap-2">
                        <div className="promo-box">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">Applications</p>
                            <p className="p-0 m-0 fs-16"><strong>123</strong></p>
                        </div>
                        <div className="promo-box">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">For</p>
                            <p className="p-0 m-0 fs-16"><strong>New Users</strong></p>
                        </div>
                        <div className="promo-box-date">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">Duration:</p>
                            <p className="p-0 m-0 fs-16"><strong>01 /12/2026 to 26/12/2026</strong></p>
                        </div>
                        <div className="promo-box">
                            <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-3 justify-content-end">
                                <li className="w-50">
                                    <span className="d-block blue-btn blue-text btn-small">Upcoming</span>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B"/></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu  align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-box white-card w-100 mb-2 position-relative">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <p className="p-0 m-0 mb-1 fs-16"><strong>Christmas Special</strong></p>
                    <p className="p-0 m-0 fs-16 text-link fw-normal">COMVRS10</p>
                </div>
                <div className="col-xl-8 mt-xl-0 mt-3 col-md-12">
                    <div className="promotion-box-com d-flex align-items-center flex-wrap w-100 gap-2">
                        <div className="promo-box">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">Applications</p>
                            <p className="p-0 m-0 fs-16"><strong>123</strong></p>
                        </div>
                        <div className="promo-box">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">For</p>
                            <p className="p-0 m-0 fs-16"><strong>New Users</strong></p>
                        </div>
                        <div className="promo-box-date">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">Duration:</p>
                            <p className="p-0 m-0 fs-16"><strong>01 /12/2026 to 26/12/2026</strong></p>
                        </div>
                        <div className="promo-box">
                            <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-3 justify-content-end">
                                <li className="w-50">
                                    <span className="d-block green-btn green-text btn-small w-100">Active</span>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B"/></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu  align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-box white-card w-100 mb-2 position-relative">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <p className="p-0 m-0 mb-1 fs-16"><strong>Christmas Special</strong></p>
                    <p className="p-0 m-0 fs-16 text-link fw-normal">COMVRS10</p>
                </div>
                <div className="col-xl-8 mt-xl-0 mt-3 col-md-12">
                    <div className="promotion-box-com d-flex align-items-center flex-wrap w-100 gap-2">
                        <div className="promo-box">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">Applications</p>
                            <p className="p-0 m-0 fs-16"><strong>123</strong></p>
                        </div>
                        <div className="promo-box">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">For</p>
                            <p className="p-0 m-0 fs-16"><strong>New Users</strong></p>
                        </div>
                        <div className="promo-box-date">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">Duration:</p>
                            <p className="p-0 m-0 fs-16"><strong>01 /12/2026 to 26/12/2026</strong></p>
                        </div>
                        <div className="promo-box">
                            <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-3 justify-content-end">
                                <li className="w-50">
                                    <span className="d-block yellow-btn yellow-text btn-small w-100">Draft</span>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B"/></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu  align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-box white-card w-100 mb-2 position-relative">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                    <p className="p-0 m-0 mb-1 fs-16"><strong>Christmas Special</strong></p>
                    <p className="p-0 m-0 fs-16 text-link fw-normal">COMVRS10</p>
                </div>
                <div className="col-xl-8 mt-xl-0 mt-3 col-md-12">
                    <div className="promotion-box-com d-flex align-items-center flex-wrap w-100 gap-2">
                        <div className="promo-box">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">Applications</p>
                            <p className="p-0 m-0 fs-16"><strong>123</strong></p>
                        </div>
                        <div className="promo-box">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">For</p>
                            <p className="p-0 m-0 fs-16"><strong>New Users</strong></p>
                        </div>
                        <div className="promo-box-date">
                            <p className="p-0 m-0 mb-1 uploadText fw-normal">Duration:</p>
                            <p className="p-0 m-0 fs-16"><strong>01 /12/2026 to 26/12/2026</strong></p>
                        </div>
                        <div className="promo-box">
                            <ul className="p-0 m-0 list-unstyled d-flex align-items-center gap-3 justify-content-end">
                                <li className="w-50">
                                    <span className="d-block red-btn red-text btn-small w-100">Expired</span>
                                </li>
                                <li>
                                    <div className='dropdownBox '>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08342e-07 1.5C8.08342e-07 1.20333 0.0879744 0.913319 0.252797 0.666646C0.417619 0.419972 0.651887 0.227713 0.925976 0.114181C1.20007 0.000649922 1.50166 -0.0290551 1.79264 0.0288228C2.08361 0.0867006 2.35088 0.229562 2.56066 0.439341C2.77044 0.649119 2.9133 0.916394 2.97118 1.20737C3.02906 1.49834 2.99935 1.79994 2.88582 2.07403C2.77229 2.34811 2.58003 2.58238 2.33336 2.74721C2.08668 2.91203 1.79667 3 1.5 3C1.10218 3 0.720645 2.84197 0.439341 2.56066C0.158036 2.27936 8.08342e-07 1.89783 8.08342e-07 1.5ZM1.5 6.375C1.20333 6.375 0.913319 6.46297 0.666646 6.6278C0.419972 6.79262 0.227713 7.02689 0.114181 7.30098C0.000649922 7.57506 -0.0290551 7.87666 0.0288228 8.16764C0.0867006 8.45861 0.229562 8.72588 0.439341 8.93566C0.64912 9.14544 0.916394 9.2883 1.20737 9.34618C1.49834 9.40406 1.79994 9.37435 2.07403 9.26082C2.34812 9.14729 2.58238 8.95503 2.74721 8.70836C2.91203 8.46168 3 8.17167 3 7.875C3 7.47718 2.84197 7.09565 2.56066 6.81434C2.27936 6.53304 1.89783 6.375 1.5 6.375ZM1.5 12.75C1.20333 12.75 0.913319 12.838 0.666646 13.0028C0.419972 13.1676 0.227713 13.4019 0.114181 13.676C0.000649922 13.9501 -0.0290551 14.2517 0.0288228 14.5426C0.0867006 14.8336 0.229562 15.1009 0.439341 15.3107C0.64912 15.5204 0.916394 15.6633 1.20737 15.7212C1.49834 15.7791 1.79994 15.7494 2.07403 15.6358C2.34812 15.5223 2.58238 15.33 2.74721 15.0834C2.91203 14.8367 3 14.5467 3 14.25C3 13.8522 2.84197 13.4706 2.56066 13.1893C2.27936 12.908 1.89783 12.75 1.5 12.75Z" fill="#64748B"/></svg>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu  align="end">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PromotionList