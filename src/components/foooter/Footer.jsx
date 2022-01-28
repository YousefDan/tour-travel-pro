import { branches, quickLinks } from "../../data";
import "./footer.scss";

const Footer = () => {
  return (
      <>
    <footer className="footer">
      <div className="footer-item">
        <h3>Our Branches</h3>
        {branches.map((branch) => (
          <div className="branches" key={branch}>
            <i className="fas fa-map-marker-alt"></i>
            {branch}
          </div>
        ))}
      </div>
      <div className="footer-item">
        <h3>Quick Links</h3>
        {quickLinks.map((link) => (
          <a key={link} href={`#${link}`}>
              <i className="fas fa-chevron-right"></i>
            {link}
          </a>
        ))}
      </div>
      <div className="footer-item">
        <h3>Contact Info</h3>
        <div className="info-footer">
          <i className="fas fa-phone"></i>
          +123 456 7898
        </div>
        <div className="info-footer">
          <i className="fas fa-phone"></i>
          +784 784 1232
        </div>
        <div className="info-footer">
          <i className="fas fa-envelope"></i>
          contact@info.gmail.com
        </div>
        <div className="info-footer">
          <i className="fas fa-map-marker-alt"></i>
          Iran, Kashan
        </div>
      </div>
      <div className="footer-item">
        <h3>Follow Us</h3>
        <div className="social-media">
          <i className="fab fa-facebook-f"></i>
          Facebook
        </div>
        <div className="social-media">
          <i className="fab fa-twitter"></i>
          Twitter
        </div>
        <div className="social-media">
          <i className="fab fa-instagram"></i>
          Instagram
        </div>
        <div className="social-media">
          <i className="fab fa-linkedin"></i>
          Linkedin
        </div>
        <div className="social-media">
          <i className="fab fa-pinterest"></i>
          Pinterest
        </div>
      </div>
    </footer>
    <div className="credit">
        Copyright &copy; 2022
    </div>
    </>
  );
};

export default Footer;
