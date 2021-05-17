import { useState } from "react";

import "./Sidebar.scss";
import chevronIcon from "../../Assets/SVG/bxs-chevron-left-circle.svg";

const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const toggleSidebar = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div
      className={
        isHidden ? "sidebar sidebar--hidden" : "sidebar sidebar--showed"
      }
    >
      <div
        className={
          isHidden
            ? "sidebar__toggler sidebar__toggler--hidden"
            : "sidebar__toggler sidebar__toggler--showed"
        }
        onClick={() => toggleSidebar()}
      >
        <img src={chevronIcon} />
      </div>
      {/* <button className="active">Home</button> */}
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
