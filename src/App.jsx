import '../src/assets/css/global.css'
import './App.css'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import NewsUpdates from './pages/newsUpdates/NewsUpdates'
import SideNavbar from './comonComponent/SideNavbar'
import InvoiceBilling from './pages/invoiceBilling/InvoiceBilling'
import Services from './pages/services/Services'
import ChildUsers from './pages/childUsers/ChildUsers'
import MyAccount from './pages/myAccount/MyAccount'
import DashboardHeader from './comonComponent/DashboardHeader'
import Default from './pages/Default'
import Login from './pages/authentication/Login'
import Signup from './pages/authentication/Signup'
import { useEffect } from 'react'
import ViewInvoice from './pages/invoiceBilling/viewInvoice/ViewInvoice'
import ViewDueInvoice from './pages/invoiceBilling/viewDueInvoice/ViewDueInvoice'

function App() {
  const location = useLocation()
  const hideLayoutRoutes = ['/login', '/sign-up']
  const isLoginPage = hideLayoutRoutes.includes(location.pathname)

  const extraClassRoutes = ['/invoice-billing', '/services', '/child-users', '/view-invoice', '/view-invoice-due']
  const hasExtraClass = extraClassRoutes.includes(location.pathname)

  const noContainerRoutes = ['/view-invoice-due'];
  const isNoContainerPage = noContainerRoutes.includes(location.pathname);

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

  return (
    <div className='dashboard-com'>
      {!isLoginPage && <DashboardHeader />}
      {!isLoginPage && <SideNavbar />}

      <div className={!isLoginPage ? 'content-wrapper mt-60' : ''}>
        <div className={ !isLoginPage ? `content-inner-wrapper ${hasExtraClass ? 'custom-layout' : ''}`: ''}>
          <div className={!isLoginPage && !isNoContainerPage ? 'container' : ''}>
            <div className={!isLoginPage && !isNoContainerPage ? 'py-32' : ''}>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/default" element={<Default />} />
                <Route path="/news-updates" element={<NewsUpdates />} />
                <Route path="/invoice-billing" element={<InvoiceBilling />} />
                <Route path="/view-invoice" element={<ViewInvoice />} />
                <Route path="/view-invoice-due" element={<ViewDueInvoice />} />
                <Route path="/services" element={<Services />} />
                <Route path="/child-users" element={<ChildUsers />} />
                <Route path="/my-account" element={<MyAccount />} />
                

                {/* Auth Pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App