import "./About.scss";
import worldIcon from "../../Assets/SVG/bx-world.svg";

function About() {
  return (
    <div className="About">
      <h2 className="About--title">Made by Maximiliano Ponce Marquez</h2>
      <p className="About--subtitle">See my personal website</p>
      <a className="About--link" href="https://www.maximilianoponce.live/">
        <img src={worldIcon} />
      </a>
    </div>
  );
}

export default About;
