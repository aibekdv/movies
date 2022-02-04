import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/logo.png";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="foooter__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="sa" />
            </Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Movies</Link>
            <Link to="/">TV</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Contact us</Link>
            <Link to="/">About us</Link>
            <Link to="/">Term of services</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Privacy policy</Link>
            <Link to="/">FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
