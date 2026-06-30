
import { Table } from 'react-bootstrap'

const DmvRecords = () => {
  return (
    <div className='dmv-records-sec'>
        <p>Anything at DMV that is publicly available under the Colorado Open Records Act (CORA).</p>
        <div className='tabs-smv-head'>
            <h5>Important Pricing Notes For DMV Searches</h5>
            <p className='p-0 m-0 pb-2'>If you have any questions about these prices, please contact us at billing@comvrs.com.</p>
            <ul className='p-0 m-0 list-unstyled list-new-dot'>
                <li>Colorado DMV charges a search fee, regardless of whether a record is returned or not. Because of this you will also be charged the search fee regardless of whether a record is returned.</li>
                <li>Colorado DMV charges a fee for each record that is returned as of a result of any search request. Because of this, if your search returns multiple records, you will be charged for each record returned. However, because our initial search fee covers our time and effort to  go to DMV, we will charge you a lesser amount for any additional records returned because of a search.</li>
            </ul>
        </div>
         <div className="table-default min-w-1000 mt-3 border-top border-radius-remove">
            <Table className="text-center table-hover align-middle m-0 p-0" responsive>
                <tbody>
                    <tr>
                        <td>MVR, 7-yr</td>
                        <td>$33.00</td>
                        <td>--</td>
                    </tr>  
                    <tr>
                        <td>MVR, Full/Lifetime</td>
                        <td>$40.00</td>
                        <td>--</td>
                    </tr>    
                    <tr>
                        <td>Accident Report, DMV, Specific</td>
                        <td>$33.00</td>
                        <td>--</td>
                    </tr>   
                    <tr>
                        <td>Accident Report, DMV, All</td>
                        <td>$33.00</td>
                        <td>$15.00 Each Additional Record</td>
                    </tr>   
                    <tr>
                        <td>Accident Report, PD, Initial Report Only</td>
                        <td>$35.00</td>
                        <td>Plus costs</td>
                    </tr>  
                    <tr>
                        <td>Accident Report, PD, All Info</td>
                        <td>$90.00</td>
                        <td>Plus costs of Photos, Videos, CAD, 911, Etc.</td>
                    </tr>  
                    <tr>
                        <td>DL/ID Card Application Copy</td>
                        <td>$33.00</td>
                        <td>$15.00 Each Additional Record</td>
                    </tr> 
                    <tr>
                        <td>Minor Affidavit (Financial Responsibility)</td>
                        <td>$33.00</td>
                        <td>--</td>
                    </tr> 
                    <tr>
                        <td>Declaration Sheet</td>
                        <td>$33.00</td>
                        <td>$15.00 Each Additional Record</td>
                    </tr> 
                    <tr>
                        <td>Ticket Copy</td>
                        <td>$35.00</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>Letters to Driver</td>
                        <td>$33.00</td>
                        <td>$15.00 Each Additional Record</td>
                    </tr>
                    <tr>
                        <td>Expressed Consent Packets (Discovery)</td>
                        <td>$33.00</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>Expressed Consent Packets (Public Record)</td>
                        <td>$33.00</td>
                        <td>$15.00 Each Additional Record</td>
                    </tr>
                    <tr>
                        <td>Vehicle Ownership by Plate or VIN</td>
                        <td>$27.00</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>Vehicle Ownership by Name</td>
                        <td>$27.00</td>
                        <td>$20 2nd thru 5th Record. $4 6th Record +</td>
                    </tr>
                    <tr>
                        <td>Lienholder Search</td>
                        <td>$33.00</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>Title History (No Title Transfer Docs)</td>
                        <td>$27.00</td>
                        <td>$20 2nd thru 5th Record. $4 6th Record +</td>
                    </tr>
                    <tr>
                        <td>Title History (Docs)</td>
                        <td>$40.00</td>
                        <td>$20 2nd thru 5th Record. $4 6th Record +</td>
                    </tr>
                    <tr>
                        <td>Certification Fee</td>
                        <td>$10.00</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>Insurance Search</td>
                        <td>$50.00</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>Out of State Driving Record</td>
                        <td>$60.00</td>
                        <td>Plus costs through state’s DMV</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default DmvRecords