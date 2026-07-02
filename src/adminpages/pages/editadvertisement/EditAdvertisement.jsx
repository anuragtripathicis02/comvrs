import { Link } from "react-router-dom"
import BackArrow from "../../../assets/icons/BackArrow"
import { Breadcrumb } from "react-bootstrap"
import BasicDetails from "./BasicDetails"
import AdvertiseforAttorneys from "./AdvertiseforAttorneys"
import AdvertiseforInvestigatorsOthers from "./AdvertiseforInvestigatorsOthers"
const EditAdvertisement = () => {
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
        <BasicDetails/>
        <div className="row">
            <div className="col-lg-6">
                    <AdvertiseforAttorneys/>
            </div>
            <div className="col-lg-6">
                <AdvertiseforInvestigatorsOthers/>
            </div>
        </div>
        <div className="text-center text-md-end">
            <button className="btn-outline fill-btn">Set Preference</button>
        </div>
    </div>
  )
}

export default EditAdvertisement