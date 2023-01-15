import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4" data-aos="fade-up">
            <h2>Inline Trading PLC</h2>
            <div className="icons my-3">
              <a href="https://www.facebook.com/profile.php?id=100088243298540&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>{" "}
              <a href="https://twitter.com/scopeEthiopia" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>{" "}
              <a href="https://instagram.com/scope_lubricants" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>{" "}
              <a href="https://t.me/scopelubticants" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>{" "}
              <a href="https://www.tiktok.com/@scope_lubricants?_t=8Z2ljHb3CSs&_r=1" target="_blank" rel="noreferrer"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/products">Products</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <h4>Contact us</h4>
            <p>
              <i className="fas fa-map-marker-alt"></i> Lideta Woreda 09 Shop No 303, Addis Ababa,
              Ethiopia
            </p>
            <p>
              <i className="fas fa-mobile-alt"></i> +251 961 41 11 11
            </p>
            <p>
              <i className="far fa-envelope"></i>
              <a href="mailto:inlinetradingplc@gmail.com" className="footer-link">
                {" "}
                inlinetradingplc@gmail.com
              </a>
            </p>
          </div>
        </div>
        <hr />
        <p className="text-center">&copy;2023 Inline Trading PLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
