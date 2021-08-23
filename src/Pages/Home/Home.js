import "./Home.scss";
import moldingMachineIcon from "../../Assets/Images/MoldingMachine.svg";

const Home = () => {
  return (
    <div className="home">
      <h2 className="home--title">Welcome to Scientific Molding Tools</h2>
      <img
        src={moldingMachineIcon}
        alt="Molding Machine"
        className="home--img"
      />
    </div>
  );
};

export default Home;
