
import TopCardImg from '../../../assets/images/top-card-img.png'

const ViewInvoiceTop = () => {
  return (
    <div className='top-view-invoice'>
        <div className='row'>
            <div className='col-xxl-8 col-lg-7 col-md-12 mb-4'>
                <div className="head-box w-100 mb-2">
                    <p className="m-0 font-w-600 fs-16">Invoicing to</p>
                </div>
                <div className='card-box white-card w-100 card-top-box d-flex align-items-center gap-2 flex-lg-nowrap flex-wrap min-h-90'>
                    <div className='card-img d-flex align-items-center gap-2'>
                        <div className='img-box'>
                            <img src={TopCardImg} alt="" />
                        </div>
                         <div className='text-left-box'>
                            <p className='p-0 m-0 mb-1 fs-16'> <strong> Sella Miller </strong>(#9008)</p>
                            <p className='p-0 m-0 fs-16'>sellameller@xyz.com</p>
                        </div>
                    </div>
                    <div className='card-text '>
                        <p className='p-0 m-0 mb-1 fs-16'><strong>Lavien Law LLC.</strong></p> 
                        <p className='p-0 m-0  fs-16'>1234 Main Street, Apt 100, Houston, Taxes 770021</p>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-lg-5 col-md-12 mb-4'>
                <div className="head-box w-100 mb-2">
                    <p className="m-0 font-w-600 fs-16">Invoice By</p>
                </div>
                <div className='card-box white-card w-100 card-top-box min-h-90'>
                        <p className='p-0 m-0 mb-1 fs-14'> <strong> CoMVRs.com</strong></p>
                        <p className='p-0 m-0 fs-14'>7114 West Jefferson Ave., Suite 211 Lakewood, CO 80235 Call : 303-239-1411    |    Fax: 800-420-0817</p>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-xxl-3 col-md-6 mb-4'>
                <div className="head-box w-100 mb-2">
                    <p className="m-0 font-w-600 fs-16">Summery</p>
                </div>
                <div className='card-box white-card w-100 card-top-box min-h-80'>
                    <p className='p-0 m-0 mb-1 fs-14'>Billing Month :   <strong> May 2026</strong></p>
                    <p className='p-0 m-0 fs-14'>Total Orders : <strong> 34 </strong></p>
                </div>
            </div>
            <div className='col-xxl-3 col-md-6 mb-4'>
                <div className="head-box w-100 mb-2">
                    <p className="m-0 font-w-600 fs-16">Timeline</p>
                </div>
                <div className='card-box white-card w-100 card-top-box min-h-80'>
                    <p className='p-0 m-0 mb-1 fs-14'>Bill Generation :   <strong> 01 Jun 2026 @12:00AM</strong></p>
                    <p className='p-0 m-0 fs-14'>Last Day of Payment :  <strong> 07 Jun 2026 </strong></p>
                </div>
            </div>
            <div className='col-xxl-3 col-md-6 mb-4'>
                <div className="head-box w-100 mb-2">
                    <p className="m-0 font-w-600 fs-16">Payment</p>
                </div>
                <div className='card-box white-card w-100 card-top-box min-h-80'>
                    <p className='p-0 m-0 mb-1 fs-14'>Billing Cycle : <strong> Monthly</strong></p>
                    <p className='p-0 m-0 fs-14'>Pay Mode :<strong>  Card Payment </strong></p>
                </div>
            </div>
            <div className='col-xxl-3 col-md-6 mb-4'>
                <div className="head-box w-100 mb-2">
                    <p className="m-0 font-w-600 fs-16">Billed Total</p>
                </div>
                <div className='card-box white-card w-100 card-top-box min-h-80 d-flex align-items-center justify-content-center'>
                    <h2 className='m-0 p-0'>$234.45</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewInvoiceTop