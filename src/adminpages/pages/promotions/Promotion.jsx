import { Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import BackArrow from "../../../assets/icons/BackArrow"
import PromotionHead from "./PromotionHead"
import PromotionList from "./PromotionList"


const Promotion = () => {
  return (
    <div className="promotion-sec">
        <div className="page-title">
            <div className="d-flex align-items-center gap-2">
                <Link to="" className="icon-back">
                    <BackArrow />
                </Link>
                <div className="page-title-right">
                    <h6 className="m-0 p-0">Promotion List</h6>
                    <Breadcrumb className="m-0">
                        <Breadcrumb.Item href="/dashboard"> Dashboard </Breadcrumb.Item>
                        <Breadcrumb.Item active>Promotion List</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
       </div>
       <div className="promotion-details">
            <div className="mb-2">
                <PromotionHead />
            </div>
            <div>
                <PromotionList />
            </div>
       </div>
    </div>
  )
}

export default Promotion