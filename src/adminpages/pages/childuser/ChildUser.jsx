import BackArrow from '../../../assets/icons/BackArrow'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import ChildUserFilter from './ChildUserFilter'
import CustomTable from './CustomTable'

const ChildUser = () => {
  return (
    <div>
       <div className="page-title">
            <div className="d-flex align-items-center gap-2">
            <Link to="" className="icon-back">
                <BackArrow />
            </Link>
            <div className="page-title-right">
                <h6 className="m-0 p-0">Child User</h6>
                <Breadcrumb className="m-0">
                    <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                    <Breadcrumb.Item active>Child User</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            </div>
       </div>
       <ChildUserFilter/>
       <CustomTable/>
    </div>
  )
}

export default ChildUser