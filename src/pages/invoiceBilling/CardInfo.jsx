import {useState} from 'react'
import AmricanIcons from '../../assets/images/american-icons.png'
import EditIcons from '../../assets/icons/EditIcons'
import EditCardDetailsModal from '../../modalComponent/EditCardDetailsModal'

const CardInfo = () => {
    
    const [showCardDetails, setShowCardDetails] = useState (false);
    
    const handleCardDetails = () => {
        setShowCardDetails(true);
    };

    const handleCloseAll = () => {
        setShowCardDetails(false);
    };

  return (
    <div className='card-info-sec'>
        <div className="head-box w-100 mb-2">
            <p className="m-0 font-w-600 fs-16">Card Info</p>
        </div>
        <div className='row'>
            <div className='col-lg-4 col-md-6 mb-4'>
                <button className='card-box white-card w-100 text-start' onClick={handleCardDetails}>
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
        </div> 
        <EditCardDetailsModal show={showCardDetails} handleClose={handleCloseAll}/>
    </div>
  )
}

export default CardInfo