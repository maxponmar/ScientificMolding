import './Footer.scss';
import githubIcon from '../../Assets/SVG/bxl-github.svg';

const Footer = ({name}) => {
  const currentTime = new Date()
  const year = currentTime.getFullYear();
  return (
    <footer className="footer">
    <div className="footer__container">
      <h2 className="footer--title">{name}</h2>
      <div className="footer--social">
        <a href="https://github.com/maxponmar/ScientificMolding" className="footer--link">
          <img src={githubIcon} alt="Github" className="footer--icon" />
        </a>
      </div>
      <p className="footer--copy">&#169; {year} Copyright all rights reserved</p>
    </div>
  </footer>
  )
}

export default Footer;
