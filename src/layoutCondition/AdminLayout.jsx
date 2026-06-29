import { Outlet } from "react-router-dom";
import AdminHeader from "../comonComponent/AdminHeader";
import AdminSidebar from "../comonComponent/AdminSidebar";

export default function AdminLayout() {
  return (
    <>
        <AdminHeader />
        <AdminSidebar />
        <div className="outlate-cls">
            <Outlet />
      </div>
    </>
  );
}