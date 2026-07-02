import { Link } from "react-router-dom"
import BackArrow from "../../../assets/icons/BackArrow"
import { Breadcrumb } from "react-bootstrap"
import ActivityHead from "./ActivityHead"
import BannerRecord from "./BannerRecord"
const Advertisement = () => {
  return (
    <div>
         <div className="page-title">
            <div className="d-flex align-items-center gap-2">
                <Link to="" className="icon-back">
                    <BackArrow />
                </Link>
                <div className="page-title-right">
                    <h6 className="m-0 p-0">Advertisement</h6>
                    <Breadcrumb className="m-0">
                        <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                        <Breadcrumb.Item active>Advertisement</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </div>

        <ActivityHead/>
        <BannerRecord/>
        
    </div>
  )
}

export default Advertisement