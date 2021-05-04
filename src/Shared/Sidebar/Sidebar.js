import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
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
