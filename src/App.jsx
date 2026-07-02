import '../src/assets/css/global.css'
import './App.css'
import AOS from "aos";
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import NewsUpdates from './pages/newsUpdates/NewsUpdates'
import InvoiceBilling from './pages/invoiceBilling/InvoiceBilling'
import Services from './pages/services/Services'
import ChildUsers from './pages/childUsers/ChildUsers'
import MyAccount from './pages/myAccount/MyAccount'
import Default from './pages/Default'
import Login from './pages/authentication/Login'
import Signup from './pages/authentication/Signup'
import { useEffect } from 'react'
import ViewInvoice from './pages/invoiceBilling/viewInvoice/ViewInvoice'
import ViewDueInvoice from './pages/invoiceBilling/viewDueInvoice/ViewDueInvoice'
import CompletingProfile from './pages/completingProfile/CompletingProfile'
import CreatingAnOrder from './pages/creatingAnOrder/CreatingAnOrder'

import AdminLogin from './adminpages/pages/authentication/Login'
import AdminDashboard from './adminpages/pages/dashboard/AdminDashboard';
import AdminCustomers from './adminpages/pages/accountscustomers/Customers';
import AdminCustomersView from './adminpages/pages/customerview/CustomerView';
import SelectingRequestType from './pages/creatingAnOrder/SelectingRequestType'
import ViewOrder from './pages/creatingAnOrder/ViewOrder'
import Managers from './pages/managers/Managers'
import UserLayout from './layoutCondition/UserLayout';
import AdminLayout from './layoutCondition/AdminLayout';

import AdminUser from './adminpages/pages/adminuser/AdminUsers';
import CreateEditCustomer from './adminpages/pages/createEditCustomer/CreateEditCustomer';
import ViewOrders from './adminpages/pages/viewOrder/ViewOrder';
import ViewBillInvoice from './adminpages/pages/viewInvoice/ViewInvoice';
import Settings from './adminpages/pages/settings/Settings';
import ActivityLog from './adminpages/pages/activityLog/ActivityLog';
import ChildUser from './adminpages/pages/childuser/ChildUser';
import ManageProducts from './adminpages/pages/manageproducts/ManageProducts';
import InvoiceAndBilling from './adminpages/pages/invoiceandbilling/InvoiceAndBilling';
import Announcements from './adminpages/pages/announcements/Announcements';
import CreateNewProduct from './adminpages/pages/manageproducts/CreateNewProduct';
import SelectDataFields from './adminpages/pages/manageproducts/SelectDataFields';
import Advertisement from './adminpages/pages/advertisement/Advertisement';
import Promotion from './adminpages/pages/promotions/Promotion';
import EditAdvertisement from './adminpages/pages/editadvertisement/EditAdvertisement';

function App() {
  const location = useLocation()
  const hideLayoutRoutes = ['/login', '/sign-up', '/admin-login']
  const isLoginPage = hideLayoutRoutes.includes(location.pathname)

  const extraClassRoutes = ['/invoice-billing', '/services', '/child-users', '/view-invoice', '/view-invoice-due', '/creating-an-order', '/selecting-request-type', '/view-order', '/managers', '/my-account', '/create-edit-customer', '/view-orders', '/view-bill-invoice', '/setting', '/activity-log', '/Announcement', '/create-new-product', '/select-data-field', '/admin-customer-view', '/advertisement', '/promotion']
  const extraClassRoutes = ['/invoice-billing', '/services', '/child-users', '/view-invoice', '/view-invoice-due', '/creating-an-order', '/selecting-request-type', '/view-order', '/managers', '/my-account', '/create-edit-customer', '/view-orders', '/view-bill-invoice', '/setting', '/activity-log', '/Announcement', '/create-new-product', '/select-data-field', '/admin-customer-view', '/advertisement', '/edit-advertisement']
  const hasExtraClass = extraClassRoutes.includes(location.pathname)

  const noContainerRoutes = ['/view-invoice-due'];
  const isNoContainerPage = noContainerRoutes.includes(location.pathname);


  const centeredRoutes = ['/dashboard', '/services'];
  const isCenteredPage = centeredRoutes.includes(location.pathname);

    useEffect(() => {
    if (isLoginPage) {
      document.body.classList.add('open-authontication')
    } else {
      document.body.classList.remove('open-authontication')
    }

    return () => {
      document.body.classList.remove('open-authontication')
    }
  }, [isLoginPage])


  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 20,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  return ( 
    <div className='dashboard-com'>
      {/* {!isLoginPage && <DashboardHeader />}
      {!isLoginPage && <SideNavbar />} */}



      <div className={!isLoginPage ? 'content-wrapper mt-60' : ''}>
        <div className={ !isLoginPage ? `content-inner-wrapper ${hasExtraClass ? 'custom-layout' : ''}`: ''}>
          <div className={!isLoginPage && !isNoContainerPage ? 'container' : ''}>
            <div className={!isLoginPage && !isNoContainerPage ? 'py-32' : ''}>
             <div className={isCenteredPage ? "row justify-content-center" : ""}>
                <div className={isCenteredPage ? "col-xl-10 col-12" : ""}>
                  <Routes>

                    <Route element={<UserLayout />}>
                      <Route path="/" element={<Navigate to="/dashboard" replace />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/completing-profile" element={<CompletingProfile />} />
                      <Route path="/creating-an-order" element={<CreatingAnOrder />} />
                      <Route path="/selecting-request-type" element={<SelectingRequestType />} />
                      <Route path="/view-order" element={<ViewOrder />} />
                      <Route path="/default" element={<Default />} />
                      <Route path="/news-updates" element={<NewsUpdates />} />
                      <Route path="/invoice-billing" element={<InvoiceBilling />} />
                      <Route path="/view-invoice" element={<ViewInvoice />} />
                      <Route path="/view-invoice-due" element={<ViewDueInvoice />} />
                      <Route path="/managers" element={<Managers />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/child-users" element={<ChildUsers />} />
                      <Route path="/my-account" element={<MyAccount />} />
                    </Route>
                      <Route path="/login" element={<Login />} />
                      <Route path="/sign-up" element={<Signup />} />
                        {/* Auth Pages */}
                        {/* Admin Pages */}
                      <Route element={<AdminLayout />}>
                        <Route path="/admin-dashboard" element={<AdminDashboard />} />
                        <Route path="/clients" element={<AdminCustomers />} />
                        <Route path="/admin-customer-view" element={<AdminCustomersView />} />
                        <Route path="/admin-user" element={<AdminUser />} />
                        <Route path="/create-edit-customer" element={<CreateEditCustomer />} />
                        <Route path="/view-orders" element={<ViewOrders />} />
                        <Route path="/view-bill-invoice" element={<ViewBillInvoice />} />
                        <Route path="/setting" element={<Settings />} />
                        <Route path="/activity-log" element={<ActivityLog />} />
                        <Route path="/child-user" element={<ChildUser />} />
                        <Route path="/manage-products" element={<ManageProducts/>} />
                        <Route path="/invoice-and-billing" element={<InvoiceAndBilling/>} />
                        <Route path="/Announcement" element={<Announcements/>} />
                        <Route path="/create-new-product" element={<CreateNewProduct/>} />
                        <Route path="/select-data-field" element={<SelectDataFields/>} />
                        <Route path="/advertisement" element={<Advertisement/>} />
                        <Route path="/promotion" element={<Promotion/>} />
                        <Route path="/edit-advertisement" element={<EditAdvertisement/>} />
                      </Route>
                    <Route path="/admin-login" element={<AdminLogin />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App