import { useContext } from "react";

import "./Sidebar.scss";
import chevronIcon from "../../Assets/SVG/bxs-chevron-left-circle.svg";

import SidebarContext from "../../Store/SidebarContext";

const Sidebar = () => {
  const ctx = useContext(SidebarContext);
  return (
    <div className={ctx.isHidden ? "sidebar sidebar--hidden" : "sidebar sidebar--showed"}>
        <div className="sidebar__toggler" onClick={ctx.toggle}>
          <img src={chevronIcon} />
        </div>
        <button className="active">Home</button>
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
