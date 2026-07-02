import { Breadcrumb, FloatingLabel, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import BackArrow from "../../../assets/icons/BackArrow"
import { useState } from "react";

const SelectDataFields = () => {

    const [fields, setFields] = useState([
        { id: 1, label: "First Name", type: "Short Answers", required: "Required" },
        { id: 2, label: "Last Name", type: "Short Answers", required: "Required" },
        { id: 3, label: "Email", type: "Short Answers", required: "Required" },
        { id: 4, label: "First Name", type: "Short Answers", required: "Required" },
        { id: 5, label: "First Name", type: "Short Answers", required: "Required" },
        { id: 6, label: "First Name", type: "Short Answers", required: "Required" },
        { id: 7, label: "First Name", type: "Short Answers", required: "Required" },
    ]);

  const [dragIndex, setDragIndex] = useState(null);

  // DELETE
  const handleDelete = (id) => {
    setFields(fields.filter((item) => item.id !== id));
  };

  // DRAG START
  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  // DROP
  const handleDrop = (index) => {
    const updated = [...fields];
    const draggedItem = updated[dragIndex];

    updated.splice(dragIndex, 1);
    updated.splice(index, 0, draggedItem);

    setDragIndex(null);
    setFields(updated);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };


  return (
    <div className="select-data-sec">
        
      <div className="page-title">
        <div className="d-flex align-items-center gap-2">
          <Link to="" className="icon-back">
            <BackArrow />
          </Link>
          <div className="page-title-right">
            <h6 className="m-0 p-0">Manage Products</h6>
            <Breadcrumb className="m-0">
              <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
              <Breadcrumb.Item active>Manage Products</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
        <div className="head-create mb-5 text-center">
            <h2 className="m-0 p-0 mb-1">Select Data Fields</h2>
            <p className="p-0 m-0 fs-16">Create a form for the users what do you need to know before starting the process</p>
        </div>
        <div className="mb-4">
            <div className="head-box w-100 mb-2">
                <p className="m-0 font-w-600 fs-14 p-0 m-0">Report Info</p>
            </div>
            <div className='form-box bg-white radius-12 p-20'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12'>
                         <FloatingLabel controlId="floatingInput" label="Report Name" className="mb-4 filled-box filled-bg">
                            <Form.Control type="text" placeholder="John" defaultValue="Report name s"/>
                        </FloatingLabel>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <FloatingLabel controlId="floatingSelect" label="Auth Form Needed">
                            <Form.Select aria-label="Floating label select example">
                                <option>DR2489.PDF</option>
                                <option value="1">DR2489.PDF One</option>
                                <option value="2">DR2489.PDF Two</option>
                                <option value="3">DR2489.PDF Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                         <FloatingLabel controlId="floatingInput" label="Slug" className="mb-4 filled-box filled-bg">
                            <Form.Control type="text" placeholder="John" defaultValue="1254125425"/>
                        </FloatingLabel>
                    </div>
                    <div className='col-md-12'>
                         <FloatingLabel controlId="floatingTextarea2" label="Additional Info" className="mb-0 min-h-textarea">
                            <Form.Control as="textarea" placeholder="Leave a comment here" defaultValue="Do not use this box to order/request additional products/services, even if for the same subject. Use this box to provide us with any additional information that might help us complete this particular order. After the order has been submitted, you can also use your Account Dashboard area to upload any supporting documentation associated with this request." style={{ height: '100px' }} />
                        </FloatingLabel>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <div className="head-box w-100 mb-2">
                <p className="m-0 font-w-600 fs-14 p-0 m-0">Set Price Variation</p>
            </div>
            <div className='form-box bg-white radius-12 p-20'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12'>
                         <FloatingLabel controlId="floatingInput" label="Investigator Price($)" className="mb-lg-0 mb-4 filled-box filled-bg">
                            <Form.Control type="text" placeholder="John" defaultValue="$ 35.00"/>
                        </FloatingLabel>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                         <FloatingLabel controlId="floatingInput" label="Attorney Price($)" className="mb-md-0 mb-4 filled-box filled-bg">
                            <Form.Control type="text" placeholder="John" defaultValue="$ 35.00"/>
                        </FloatingLabel>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                         <FloatingLabel controlId="floatingInput" label="Other Price($)" className="mb-lg-0 mb-0 filled-box filled-bg">
                            <Form.Control type="text" placeholder="John" defaultValue="$ 35.00"/>
                        </FloatingLabel>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-0">
            <div className="head-box w-100 mb-2">
                <p className="m-0 font-w-600 fs-14 p-0 m-0">Select Form Fields</p>
            </div>
            {fields.map((item, index) => (
                <div className="select-field-box mb-2"  key={item.id} draggable onDragStart={() => handleDragStart(index)} onDragOver={handleDragOver} onDrop={() => handleDrop(index)}>
                    <div className="form-box bg-white radius-12 p-20"> 
                        <div className='row position-relative justify-content-center pt-lg-0 pt-5'>
                            <div className="right-drag-mouse">
                                <button className="scroll-mouse bg-transparent" style={{ cursor: "grab" }}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 7.5C13.5 7.89556 13.3827 8.28224 13.1629 8.61114C12.9432 8.94004 12.6308 9.19639 12.2654 9.34776C11.8999 9.49914 11.4978 9.53874 11.1098 9.46157C10.7219 9.3844 10.3655 9.19392 10.0858 8.91421C9.80608 8.63451 9.6156 8.27814 9.53843 7.89018C9.46126 7.50222 9.50087 7.10009 9.65224 6.73463C9.80362 6.36918 10.06 6.05682 10.3889 5.83706C10.7178 5.6173 11.1044 5.5 11.5 5.5C12.0304 5.5 12.5391 5.71071 12.9142 6.08579C13.2893 6.46086 13.5 6.96957 13.5 7.5ZM20.5 9.5C20.8956 9.5 21.2822 9.3827 21.6111 9.16294C21.94 8.94318 22.1964 8.63082 22.3478 8.26537C22.4991 7.89992 22.5387 7.49778 22.4616 7.10982C22.3844 6.72186 22.1939 6.36549 21.9142 6.08579C21.6345 5.80608 21.2781 5.6156 20.8902 5.53843C20.5022 5.46126 20.1001 5.50087 19.7346 5.65224C19.3692 5.80362 19.0568 6.05996 18.8371 6.38886C18.6173 6.71776 18.5 7.10444 18.5 7.5C18.5 8.03043 18.7107 8.53914 19.0858 8.91421C19.4609 9.28929 19.9696 9.5 20.5 9.5ZM11.5 14C11.1044 14 10.7178 14.1173 10.3889 14.3371C10.06 14.5568 9.80362 14.8692 9.65224 15.2346C9.50087 15.6001 9.46126 16.0022 9.53843 16.3902C9.6156 16.7781 9.80608 17.1345 10.0858 17.4142C10.3655 17.6939 10.7219 17.8844 11.1098 17.9616C11.4978 18.0387 11.8999 17.9991 12.2654 17.8478C12.6308 17.6964 12.9432 17.44 13.1629 17.1111C13.3827 16.7822 13.5 16.3956 13.5 16C13.5 15.4696 13.2893 14.9609 12.9142 14.5858C12.5391 14.2107 12.0304 14 11.5 14ZM20.5 14C20.1044 14 19.7178 14.1173 19.3889 14.3371C19.06 14.5568 18.8036 14.8692 18.6522 15.2346C18.5009 15.6001 18.4613 16.0022 18.5384 16.3902C18.6156 16.7781 18.8061 17.1345 19.0858 17.4142C19.3655 17.6939 19.7219 17.8844 20.1098 17.9616C20.4978 18.0387 20.8999 17.9991 21.2654 17.8478C21.6308 17.6964 21.9432 17.44 22.1629 17.1111C22.3827 16.7822 22.5 16.3956 22.5 16C22.5 15.4696 22.2893 14.9609 21.9142 14.5858C21.5391 14.2107 21.0304 14 20.5 14ZM11.5 22.5C11.1044 22.5 10.7178 22.6173 10.3889 22.8371C10.06 23.0568 9.80362 23.3692 9.65224 23.7346C9.50087 24.1001 9.46126 24.5022 9.53843 24.8902C9.6156 25.2781 9.80608 25.6345 10.0858 25.9142C10.3655 26.1939 10.7219 26.3844 11.1098 26.4616C11.4978 26.5387 11.8999 26.4991 12.2654 26.3478C12.6308 26.1964 12.9432 25.94 13.1629 25.6111C13.3827 25.2822 13.5 24.8956 13.5 24.5C13.5 23.9696 13.2893 23.4609 12.9142 23.0858C12.5391 22.7107 12.0304 22.5 11.5 22.5ZM20.5 22.5C20.1044 22.5 19.7178 22.6173 19.3889 22.8371C19.06 23.0568 18.8036 23.3692 18.6522 23.7346C18.5009 24.1001 18.4613 24.5022 18.5384 24.8902C18.6156 25.2781 18.8061 25.6345 19.0858 25.9142C19.3655 26.1939 19.7219 26.3844 20.1098 26.4616C20.4978 26.5387 20.8999 26.4991 21.2654 26.3478C21.6308 26.1964 21.9432 25.94 22.1629 25.6111C22.3827 25.2822 22.5 24.8956 22.5 24.5C22.5 23.9696 22.2893 23.4609 21.9142 23.0858C21.5391 22.7107 21.0304 22.5 20.5 22.5Z" fill="#64748B"/></svg>
                                </button>
                            </div>  
                            <div className='col-lg-5 col-md-12 mb-lg-0 mb-4'>
                                <FloatingLabel controlId="floatingInput" label="Enter Label" className=" filled-box filled-bg">
                                    <Form.Control type="text" placeholder="John" defaultValue={item.label}/>
                                </FloatingLabel>
                            </div>
                            <div className='col-lg-3 col-md-6 mb-md-0 mb-4'>
                                <FloatingLabel controlId="floatingSelect" label="Select Type">
                                    <Form.Select aria-label="Floating label select example" defaultValue={item.type}>
                                        <option>Short Answers</option>
                                        <option value="1">Short Answers One</option>
                                        <option value="2">Short Answers Two</option>
                                        <option value="3">Short Answers Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>
                            <div className='col-lg-3 col-md-6'>
                                <FloatingLabel controlId="floatingSelect" label="Type">
                                    <Form.Select aria-label="Floating label select example" defaultValue={item.required}>
                                        <option>Required</option>
                                        <option value="1">Required One</option>
                                        <option value="2">Required Two</option>
                                        <option value="3">Required Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </div>
                            <div className='delete-box'>
                                <button className="delete-btn" onClick={() => handleDelete(item.id)} style={{ border: "none", background: "transparent" }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z" fill="#EF4444"/></svg>
                                </button>
                            </div>  

                        </div>
                    </div>
                </div>

            ))}
          
        </div>
        
        <div className='btn-bottom-sec d-flex align-items-center gap-2 justify-content-between flex-wrap mt-4'>
            <Link className='btn-outline fill-btn bg-transparent inline-block border-0  d-flex align-items-center gap-2 color-secondary-500'>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0006 7.50042C18.0006 7.69933 17.9216 7.8901 17.7809 8.03075C17.6403 8.1714 17.4495 8.25042 17.2506 8.25042H2.5609L8.03122 13.7198C8.1009 13.7895 8.15617 13.8722 8.19389 13.9632C8.2316 14.0543 8.25101 14.1519 8.25101 14.2504C8.25101 14.349 8.2316 14.4465 8.19389 14.5376C8.15617 14.6286 8.1009 14.7114 8.03122 14.781C7.96153 14.8507 7.87881 14.906 7.78776 14.9437C7.69672 14.9814 7.59914 15.0008 7.50059 15.0008C7.40204 15.0008 7.30446 14.9814 7.21342 14.9437C7.12237 14.906 7.03965 14.8507 6.96996 14.781L0.219965 8.03104C0.150233 7.96139 0.0949134 7.87867 0.0571702 7.78762C0.019427 7.69657 0 7.59898 0 7.50042C0 7.40186 0.019427 7.30426 0.0571702 7.21321C0.0949134 7.12216 0.150233 7.03945 0.219965 6.96979L6.96996 0.219792C7.1107 0.0790615 7.30157 -1.48284e-09 7.50059 0C7.69961 1.48284e-09 7.89048 0.0790615 8.03122 0.219792C8.17195 0.360523 8.25101 0.551394 8.25101 0.750417C8.25101 0.94944 8.17195 1.14031 8.03122 1.28104L2.5609 6.75042H17.2506C17.4495 6.75042 17.6403 6.82943 17.7809 6.97009C17.9216 7.11074 18.0006 7.3015 18.0006 7.50042Z" fill="currentColor"/></svg>
                <span> Back </span>
            </Link>
            
            <ul className="p-0 m-0 list-unstyled d-flex gap-2">
                    <li className="w-100">
                    <Link to="" className=' btn-outline bg-white border-white text-nowrap'>
                        Reset Form
                    </Link>
                </li>
                <li className="w-100">
                    <Link to="" className='btn-outline fill-btn w-100 text-nowrap '>
                       Save  Product
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SelectDataFields