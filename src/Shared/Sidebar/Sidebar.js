import { useState } from "react";

import "./Sidebar.scss";
import chevronIcon from "../../Assets/SVG/bxs-chevron-left-circle.svg";

const Sidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  const toggleSidebar = () => {
    console.log(sidebarStatus);

    setSidebarStatus(!sidebarStatus);
  };

  return (
    <div className={sidebarStatus ? "sidebar sidebar--showed" : "sidebar sidebar--hidden"}>
      <div className="sidebar__toggler" onClick={toggleSidebar}>
        <img src={chevronIcon} />
      </div>
      <button className="home-btn active">Home</button>
      <button>Viscosity Curve</button>
      <button>Cavity Balance</button>
      <button>Pressure Drop</button>
      <button>Cosmetic Process Window</button>
      <button>Gate Seal</button>
      <button>Cooling Time</button>
    </div>
  );
};

export default Sidebar;
