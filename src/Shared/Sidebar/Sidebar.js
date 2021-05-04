import "./Sidebar.scss";
import chevronIcon from "../../Assets/SVG/bxs-chevron-left-circle.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar__toggler">
        <img src={chevronIcon} />
      </button>
      <button className="active sidebar__home">Home</button>
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
