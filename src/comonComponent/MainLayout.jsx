import { Outlet } from "react-router-dom";
import SideNavbar from './SideNavbar'
import DashboardHeader from './DashboardHeader'


const MainLayout = () => {
  return (
    <div className="dashboard-com">
      <DashboardHeader />
      <SideNavbar />

      <div className="content-wrapper mt-60">
        <div className="content-inner-wrapper">
          <div className="container">
            <div className="py-32">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;