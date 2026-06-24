import React from 'react'
import { Link } from 'react-router-dom'

const WorkWithUs = () => {
  return (
    <div className='dmv-records-sec'>
        <p className='mb-4'>We have been providing DMV and Public Record research for Colorado’s legal industry since 1997. We have over 200 law firms and attorneys from across the state that use our investigative services. </p>
        <div className='tabs-smv-head mb-4'>
            <h5>Subcontracted Investigative Services</h5>
            <p className='p-0 m-0 '>We are always looking for experienced, professional investigators to help meet the demands of our clients. If you are interested in accepting subcontract work from us, please send your resume to <Link to="" className='text-link'> investigations@comvrs.com,</Link> along with the geographic area you’re willing to cover.</p>
        </div>
        <div className='tabs-smv-head mb-4'>
            <h5>Direct Employment Opportunities</h5>
            <p className='p-0 m-0 '>Are you new to the industry? Is your book of business slow, or your client base small? Perhaps you’d like to come work for us. We offer a professional office setting for when you’re not telecommuting and can provide a steady income for the PI that is just getting started. For more information, please email <Link to="" className='text-link'> careers@comvrs.com.</Link></p>
        </div>
    </div>
  )
}

export default WorkWithUs