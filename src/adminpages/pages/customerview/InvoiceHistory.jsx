import { useState } from 'react'
import { Link } from 'react-router-dom'
import EyeIcons from '../../../assets/icons/EyeIcons'
import Download from '../../../assets/icons/Download'
import { Table } from 'react-bootstrap'


const InvoiceHistory = () => {
    // table pagination 

    const [page, setPage] = useState(1);
    const totalPages = 80;

    return (
        <div className="table-default min-w-1200">
            <Table className="text-center table-hover align-middle m-0 p-0" responsive>
                <thead>
                    <tr>
                        <th>Invoice ID</th>
                        <th>Billing  Month</th>
                        <th>Total Orders</th>
                        <th>Invoice date</th>
                        <th>Billing Total</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            IN-05#1234567890
                        </td>
                        <td>
                            May 2026
                        </td>
                        <td>
                            34
                        </td>

                        <td>05/22/26</td>
                        <td>$350.0</td>
                        <td>
                            <span className='inline-block red-btn red-text btn-small'>Re-try</span>
                        </td>
                        <td>
                            <span className='d-inline-flex align-items-center gap-1 red-btn red-text btn-small'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM8 13.5C6.91221 13.5 5.84884 13.1774 4.94437 12.5731C4.0399 11.9687 3.33495 11.1098 2.91867 10.1048C2.50238 9.09977 2.39347 7.9939 2.60568 6.927C2.8179 5.86011 3.34173 4.8801 4.11092 4.11091C4.8801 3.34172 5.86011 2.8179 6.92701 2.60568C7.9939 2.39346 9.09977 2.50238 10.1048 2.91866C11.1098 3.33494 11.9687 4.03989 12.5731 4.94436C13.1774 5.84883 13.5 6.9122 13.5 8C13.4983 9.45818 12.9184 10.8562 11.8873 11.8873C10.8562 12.9184 9.45819 13.4983 8 13.5ZM9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11ZM7 5.25C7 5.10166 7.04399 4.95666 7.1264 4.83332C7.20881 4.70999 7.32595 4.61386 7.46299 4.55709C7.60003 4.50032 7.75083 4.48547 7.89632 4.51441C8.04181 4.54335 8.17544 4.61478 8.28033 4.71967C8.38522 4.82456 8.45665 4.9582 8.48559 5.10368C8.51453 5.24917 8.49968 5.39997 8.44291 5.53701C8.38615 5.67406 8.29002 5.79119 8.16668 5.8736C8.04334 5.95601 7.89834 6 7.75 6C7.55109 6 7.36032 5.92098 7.21967 5.78033C7.07902 5.63968 7 5.44891 7 5.25Z" fill="#D93E3E" />
                                </svg>
                                Failed
                            </span>
                        </td>
                        <td>
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="/view-bill-invoice" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='icons-link'>
                                         <Download/>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            IN-05#1234567890
                        </td>
                        <td>
                            May 2026
                        </td>
                        <td>
                            34
                        </td>

                        <td>05/22/26</td>
                        <td>$350.0</td>
                        <td>
                            <span className='inline-block green-btn green-text btn-small'>Sent</span>
                        </td>
                        <td>
                            <span className='d-inline-flex align-items-center gap-1 yellow-btn yellow-text btn-small'>
                               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 2V4C8.5 4.13261 8.44732 4.25979 8.35355 4.35355C8.25979 4.44732 8.13261 4.5 8 4.5C7.86739 4.5 7.74021 4.44732 7.64645 4.35355C7.55268 4.25979 7.5 4.13261 7.5 4V2C7.5 1.86739 7.55268 1.74021 7.64645 1.64645C7.74021 1.55268 7.86739 1.5 8 1.5C8.13261 1.5 8.25979 1.55268 8.35355 1.64645C8.44732 1.74021 8.5 1.86739 8.5 2ZM14 7.5H12C11.8674 7.5 11.7402 7.55268 11.6464 7.64645C11.5527 7.74021 11.5 7.86739 11.5 8C11.5 8.13261 11.5527 8.25979 11.6464 8.35355C11.7402 8.44732 11.8674 8.5 12 8.5H14C14.1326 8.5 14.2598 8.44732 14.3536 8.35355C14.4473 8.25979 14.5 8.13261 14.5 8C14.5 7.86739 14.4473 7.74021 14.3536 7.64645C14.2598 7.55268 14.1326 7.5 14 7.5ZM11.1819 10.475C11.0873 10.3852 10.9615 10.3359 10.8311 10.3375C10.7007 10.3392 10.5761 10.3917 10.4839 10.4839C10.3917 10.5761 10.3392 10.7007 10.3375 10.8311C10.3359 10.9615 10.3852 11.0873 10.475 11.1819L11.8888 12.5962C11.9826 12.6901 12.1098 12.7428 12.2425 12.7428C12.3752 12.7428 12.5024 12.6901 12.5962 12.5962C12.6901 12.5024 12.7428 12.3752 12.7428 12.2425C12.7428 12.1098 12.6901 11.9826 12.5962 11.8888L11.1819 10.475ZM8 11.5C7.86739 11.5 7.74021 11.5527 7.64645 11.6464C7.55268 11.7402 7.5 11.8674 7.5 12V14C7.5 14.1326 7.55268 14.2598 7.64645 14.3536C7.74021 14.4473 7.86739 14.5 8 14.5C8.13261 14.5 8.25979 14.4473 8.35355 14.3536C8.44732 14.2598 8.5 14.1326 8.5 14V12C8.5 11.8674 8.44732 11.7402 8.35355 11.6464C8.25979 11.5527 8.13261 11.5 8 11.5ZM4.81812 10.475L3.40375 11.8888C3.30993 11.9826 3.25722 12.1098 3.25722 12.2425C3.25722 12.3752 3.30993 12.5024 3.40375 12.5962C3.49757 12.6901 3.62482 12.7428 3.7575 12.7428C3.89018 12.7428 4.01743 12.6901 4.11125 12.5962L5.525 11.1819C5.61481 11.0873 5.66414 10.9615 5.66247 10.8311C5.6608 10.7007 5.60826 10.5761 5.51606 10.4839C5.42386 10.3917 5.29929 10.3392 5.16891 10.3375C5.03853 10.3359 4.91266 10.3852 4.81812 10.475ZM4.5 8C4.5 7.86739 4.44732 7.74021 4.35355 7.64645C4.25979 7.55268 4.13261 7.5 4 7.5H2C1.86739 7.5 1.74021 7.55268 1.64645 7.64645C1.55268 7.74021 1.5 7.86739 1.5 8C1.5 8.13261 1.55268 8.25979 1.64645 8.35355C1.74021 8.44732 1.86739 8.5 2 8.5H4C4.13261 8.5 4.25979 8.44732 4.35355 8.35355C4.44732 8.25979 4.5 8.13261 4.5 8ZM4.11125 3.40375C4.01743 3.30993 3.89018 3.25722 3.7575 3.25722C3.62482 3.25722 3.49757 3.30993 3.40375 3.40375C3.30993 3.49757 3.25722 3.62482 3.25722 3.7575C3.25722 3.89018 3.30993 4.01743 3.40375 4.11125L4.81812 5.525C4.91266 5.61481 5.03853 5.66414 5.16891 5.66247C5.29929 5.6608 5.42386 5.60826 5.51606 5.51606C5.60826 5.42386 5.6608 5.29929 5.66247 5.16891C5.66414 5.03853 5.61481 4.91266 5.525 4.81812L4.11125 3.40375Z" fill="#AE7008"/>
</svg>

                                Pending
                            </span>
                        </td>
                        <td>
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="/view-bill-invoice" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='icons-link'>
                                         <Download/>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                      <tr>
                        <td>
                            IN-05#1234567890
                        </td>
                        <td>
                            May 2026
                        </td>
                        <td>
                            34
                        </td>

                        <td>05/22/26</td>
                        <td>$350.0</td>
                        <td>
                            <span className='inline-block green-btn green-text btn-small'>Sent</span>
                        </td>
                         <td>
                            <span className='inline-block green-btn green-text btn-small'>Paid</span>
                        </td>
                        <td>
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="/view-bill-invoice" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='icons-link'>
                                         <Download/>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                     <tr>
                        <td>
                            IN-05#1234567890
                        </td>
                        <td>
                            May 2026
                        </td>
                        <td>
                            34
                        </td>

                        <td>05/22/26</td>
                        <td>$350.0</td>
                        <td>
                            <span className='inline-block green-btn-fill white-text btn-small'>Sent</span>
                        </td>
                         <td>
                            <span className='inline-block green-btn-fill white-text btn-small'>Paid</span>
                        </td>
                        <td>
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="/view-bill-invoice" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='icons-link'>
                                         <Download/>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            IN-05#1234567890
                        </td>
                        <td>
                            May 2026
                        </td>
                        <td>
                            34
                        </td>

                        <td>05/22/26</td>
                        <td>$350.0</td>
                        <td>
                            <span className='inline-block green-btn green-text btn-small'>Sent</span>
                        </td>
                         <td>
                            <span className='inline-block green-btn green-text btn-small'>Paid</span>
                        </td>
                        <td>
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="/view-bill-invoice" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='icons-link'>
                                         <Download/>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            IN-05#1234567890
                        </td>
                        <td>
                            May 2026
                        </td>
                        <td>
                            34
                        </td>

                        <td>05/22/26</td>
                        <td>$350.0</td>
                        <td>
                            <span className='inline-block green-btn green-text btn-small'>Sent</span>
                        </td>
                         <td>
                            <span className='inline-block green-btn green-text btn-small'>Paid</span>
                        </td>
                        <td>
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="/view-bill-invoice" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='icons-link'>
                                         <Download/>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            IN-05#1234567890
                        </td>
                        <td>
                            May 2026
                        </td>
                        <td>
                            34
                        </td>

                        <td>05/22/26</td>
                        <td>$350.0</td>
                        <td>
                            <span className='inline-block green-btn green-text btn-small'>Sent</span>
                        </td>
                         <td>
                            <span className='inline-block green-btn green-text btn-small'>Paid</span>
                        </td>
                        <td>
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="/view-bill-invoice" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='icons-link'>
                                         <Download/>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            IN-05#1234567890
                        </td>
                        <td>
                            May 2026
                        </td>
                        <td>
                            34
                        </td>

                        <td>05/22/26</td>
                        <td>$350.0</td>
                        <td>
                            <span className='inline-block green-btn green-text btn-small'>Sent</span>
                        </td>
                         <td>
                            <span className='inline-block green-btn green-text btn-small'>Paid</span>
                        </td>
                        <td>
                            <ul className='d-flex p-0 m-0 align-items-center gap-3 list-unstyled justify-content-center'>
                                <li>
                                    <Link to="/view-bill-invoice" className='icons-link'>
                                        <EyeIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='icons-link'>
                                        <Download/>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <div className="custom-pagination d-flex align-items-center gap-2 pt-3 pb-0">
                <div className='pagination-left  d-flex align-items-center gap-2 '>
                    <button className="page-arrow btn-gray" disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1L1 8.5L8.5 16" stroke="#8390A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <span className="page-count">
                        <span className='active'>{page}</span> <span> {totalPages}</span>
                    </span>
                    <button className="page-next no-hover d-flex gap-2  align-items-center" disabled={page === totalPages} onClick={() => setPage((prev) => prev + 1)}>
                        Next
                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 16L8.5 8.5L1 1" stroke="#8390A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                </div>
                <div className='pagination-right d-md-block d-none'>
                    <span className="pagination-info">15</span> out of 80 Orders Visible
                </div>
                <div className='ms-auto'>
                    <button className='theme-btn-light'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 16.875C4.5 17.9062 5.17313 18.75 6 18.75C6.18098 18.7459 6.35925 18.7051 6.52396 18.63C6.68867 18.5549 6.83638 18.4471 6.95813 18.3131C7.0963 18.1724 7.28436 18.0917 7.48157 18.0887C7.67878 18.0856 7.86926 18.1603 8.01178 18.2966C8.15429 18.433 8.23736 18.62 8.24299 18.8171C8.24862 19.0143 8.17637 19.2057 8.04187 19.35C7.78073 19.6311 7.46492 19.8559 7.11381 20.0107C6.7627 20.1655 6.38369 20.2469 6 20.25C4.34531 20.25 3 18.7359 3 16.875C3 15.0141 4.34531 13.5 6 13.5C6.38369 13.5031 6.7627 13.5845 7.11381 13.7393C7.46492 13.8941 7.78073 14.1189 8.04187 14.4C8.17637 14.5443 8.24862 14.7357 8.24299 14.9329C8.23736 15.13 8.15429 15.317 8.01178 15.4533C7.86926 15.5897 7.67878 15.6644 7.48157 15.6613C7.28436 15.6583 7.0963 15.5776 6.95813 15.4369C6.83638 15.3029 6.68867 15.1951 6.52396 15.12C6.35925 15.0449 6.18098 15.0041 6 15C5.17313 15 4.5 15.8437 4.5 16.875ZM11.9625 16.0603C11.5875 15.9516 11.1994 15.84 10.9828 15.7003C10.8656 15.6244 10.8675 15.6066 10.8778 15.5222C10.8794 15.4541 10.8973 15.3873 10.9299 15.3275C10.9625 15.2676 11.0089 15.2164 11.0653 15.1781C11.4966 14.8856 12.5034 15.0159 12.9234 15.1256C13.1159 15.1772 13.3209 15.1502 13.4935 15.0506C13.6661 14.951 13.792 14.787 13.8436 14.5945C13.8952 14.4021 13.8682 14.197 13.7686 14.0245C13.669 13.8519 13.5049 13.726 13.3125 13.6744C13.1138 13.6228 11.3438 13.185 10.2338 13.9331C9.99902 14.0907 9.80178 14.2979 9.65597 14.5401C9.51017 14.7822 9.41937 15.0535 9.39 15.3347C9.2025 16.8234 10.6697 17.2481 11.5463 17.5012C12.6769 17.8284 12.7762 17.9625 12.7444 18.2128C12.7153 18.4387 12.6263 18.5259 12.5438 18.5812C12.1125 18.8681 11.1216 18.7275 10.7109 18.615C10.519 18.5614 10.3136 18.5863 10.14 18.6841C9.96638 18.782 9.83874 18.9448 9.78516 19.1367C9.73157 19.3287 9.75644 19.534 9.85428 19.7077C9.95212 19.8813 10.1149 20.0089 10.3069 20.0625C10.7719 20.1843 11.2503 20.2473 11.7309 20.25C12.2766 20.25 12.8841 20.1562 13.3706 19.8319C13.6108 19.6723 13.8126 19.4615 13.9616 19.2146C14.1105 18.9677 14.203 18.6909 14.2322 18.4041C14.4375 16.7812 12.8897 16.3284 11.9625 16.0603ZM19.7522 13.5441C19.6594 13.5109 19.561 13.4962 19.4626 13.5011C19.3642 13.5059 19.2677 13.5301 19.1786 13.5722C19.0896 13.6144 19.0097 13.6736 18.9435 13.7467C18.8774 13.8197 18.8263 13.905 18.7931 13.9978L17.625 17.2697L16.4559 13.9978C16.3891 13.8105 16.2505 13.6574 16.0707 13.5722C15.8909 13.487 15.6847 13.4767 15.4973 13.5436C15.31 13.6105 15.1569 13.749 15.0717 13.9288C14.9865 14.1086 14.9762 14.3148 15.0431 14.5022L16.9181 19.7522C16.9701 19.8979 17.0659 20.024 17.1924 20.1132C17.3188 20.2024 17.4698 20.2502 17.6245 20.2502C17.7793 20.2502 17.9302 20.2024 18.0567 20.1132C18.1832 20.024 18.279 19.8979 18.3309 19.7522L20.2059 14.5022C20.2727 14.315 20.2624 14.1089 20.1774 13.9292C20.0923 13.7496 19.9394 13.611 19.7522 13.5441ZM20.25 8.25V10.5C20.25 10.6989 20.171 10.8897 20.0303 11.0303C19.8897 11.171 19.6989 11.25 19.5 11.25C19.3011 11.25 19.1103 11.171 18.9697 11.0303C18.829 10.8897 18.75 10.6989 18.75 10.5V9H14.25C14.0511 9 13.8603 8.92098 13.7197 8.78033C13.579 8.63968 13.5 8.44891 13.5 8.25V3.75H5.25V10.5C5.25 10.6989 5.17098 10.8897 5.03033 11.0303C4.88968 11.171 4.69891 11.25 4.5 11.25C4.30109 11.25 4.11032 11.171 3.96967 11.0303C3.82902 10.8897 3.75 10.6989 3.75 10.5V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H14.25C14.3485 2.24992 14.4461 2.26926 14.5371 2.3069C14.6282 2.34454 14.7109 2.39975 14.7806 2.46938L20.0306 7.71937C20.1003 7.78908 20.1555 7.87182 20.1931 7.96286C20.2307 8.05391 20.2501 8.15148 20.25 8.25ZM17.6897 7.5L15 4.81031V7.5H17.6897Z" fill="#64748B" />
                        </svg>
                        Download CSV
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InvoiceHistory