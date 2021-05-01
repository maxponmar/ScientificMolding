import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className="active">Home</a>
      <a>Viscosity Curve</a>
      <a>Cavity Balance</a>
      <a>Pressure Drop</a>
      <a>Cosmetic Process Window</a>
      <a>Gate Seal</a>
      <a>Cooling Time</a>
    </div>
  );
};

export default Sidebar;
