import React from 'react'
import { Table } from 'react-bootstrap'

const PoliceRecords = () => {
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
                        <td> Accident Reports on File at PD (Initial Rpt Only)</td>
                        <td>$33.00</td>
                        <td>--</td>
                    </tr>  
                    <tr>
                        <td>Accident Reports on File at PD (Entire Report)</td>
                        <td>$90.00</td>
                        <td>Plus costs</td>
                    </tr>    
                    <tr>
                        <td>Accident Reports in Other States</td>
                        <td>$35.00</td>
                        <td>--</td>
                    </tr>   
                    <tr>
                        <td>CBI Arrest Record</td>
                        <td>$20.00</td>
                        <td>--</td>
                    </tr>   
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default PoliceRecords