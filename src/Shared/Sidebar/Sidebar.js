import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";
import chevronIcon from "../../Assets/SVG/bxs-chevron-left-circle.svg";

function Sidebar() {
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
      <NavLink activeClassName="" to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/viscositycurve">
        <button>Viscosity Curve</button>
      </NavLink>
      <NavLink to="/cavitybalance">
        <button>Cavity Balance</button>
      </NavLink>
      <NavLink to="/pressuredrop">
        <button>Pressure Drop</button>
      </NavLink>
      <NavLink to="/cosmeticprocesswindow">
        <button>Cosmetic Process Window</button>
      </NavLink>
      <NavLink to="/gateseal">
        <button>Gate Seal</button>
      </NavLink>
      <NavLink to="/coolingtime">
        <button>Cooling Time</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
    </div>
  );
}

export default Sidebar;
