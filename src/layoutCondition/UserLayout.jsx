import { Outlet } from "react-router-dom";
import DashboardHeader from "../comonComponent/DashboardHeader";
import SideNavbar from "../comonComponent/SideNavbar";

export default function UserLayout() {
  return (
    <>
      <DashboardHeader />
      <SideNavbar />
        <div className="outlate-cls">
            <Outlet />
        </div>
    </>
  );
}