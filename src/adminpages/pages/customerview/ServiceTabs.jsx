import { useEffect, useRef, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TrackOrders from "./TrackOrders";
import MyOrdersTable from "./MyOrdersTable";
import InvoiceHistory from "./InvoiceHistory";
import TopFilter from "./TopFilter";
import ChildUsers from "./ChildUsers";
import ChildUsersFilter from "./ChildUsersFilter";
import ProfileDetails from "./ProfileDetails";

const TabTitle = ({ title }) => (
  <div className="tab-simple-tabs d-flex align-items-center gap-2">
    <span className="main-title">{title}</span>
  </div>
);

const ServiceTabs = () => {
  const [activeKey, setActiveKey] = useState("First");

  const tabsWrapperRef = useRef(null);

  useEffect(() => {
    const navTabs = tabsWrapperRef.current?.querySelector(".nav-tabs");

    if (
      navTabs &&
      !navTabs.parentElement?.classList.contains("nav-tabs-scroll")
    ) {
      const wrapper = document.createElement("div");
      wrapper.className = "nav-tabs-scroll";

      navTabs.parentNode?.insertBefore(wrapper, navTabs);
      wrapper.appendChild(navTabs);
    }
  }, []);

  const handleTabClick = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="tabs-default-box font-16 scrollBar" ref={tabsWrapperRef}>
      <Tabs activeKey={activeKey} onSelect={handleTabClick} className="tabs-default-box">
        <Tab eventKey="First" title={<TabTitle title="Profile Details" />}>
          <div className="tabs-content-box mt-4 ps-30 pe-30 position-relative">
           <ProfileDetails/>
          </div>
        </Tab>
        <Tab eventKey="Second" title={<TabTitle title="Track Orders" />}>
          <div className="tabs-content-box mt-4 ps-30 pe-30 position-relative">
            <TrackOrders/>
            <MyOrdersTable/>
          </div>
        </Tab>
        <Tab eventKey="third" title={<TabTitle title="Invoices" />}>
          <div className="tabs-content-box mt-4 ps-30 pe-30 position-relative">
                <TopFilter/>
                <InvoiceHistory/>
          </div>
        </Tab>
        <Tab eventKey="four" title={<TabTitle title="Child Users" />}>
          <div className="tabs-content-box mt-4 ps-30 pe-30 position-relative">
                <ChildUsersFilter/>
                <ChildUsers/>
          </div>
        </Tab>
        <Tab eventKey="five" title={<TabTitle title="Managers" />}>
          <div className="tabs-content-box mt-4 ps-30 pe-30 position-relative">
               5
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;