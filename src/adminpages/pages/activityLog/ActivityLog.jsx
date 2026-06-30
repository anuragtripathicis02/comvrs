import { Link } from "react-router-dom"
import BackArrow from "../../../assets/icons/BackArrow"
import { Breadcrumb } from "react-bootstrap"
import ActivityHead from "./ActivityHead"
import ActivityDetails from "./ActivityDetails"


const ActivityLog = () => {
  return (
    <div>
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
                <Link to="" className="icon-back">
                    <BackArrow />
                </Link>
                <div className="page-title-right">
                    <h6 className="m-0 p-0">Activity Log</h6>
                    <Breadcrumb className="m-0">
                        <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                        <Breadcrumb.Item active>Activity Log</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </div>
        <div className="mb-2">
            <ActivityHead />
        </div>
        <ActivityDetails />
    </div>
  )
}

export default ActivityLog