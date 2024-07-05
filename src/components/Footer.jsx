import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {

 
    // Function to handle click on Journals link
    const handleJournalsLinkClick = (event) => {
      event.preventDefault();
      window.location.href = '/';
      setTimeout(() => {
        window.location.hash = '#explore';
      }, 100); // Adjust delay as needed
    };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            At MedicoScript, we are dedicated to empowering authors in the
            medical and related fields by providing a seamless publishing
            experience. Our mission is to eliminate barriers to publication,
            ensuring that researchers can focus on what matters most: advancing
            knowledge and improving healthcare. We host a wide range of
            high-quality journals, offering fast and rigorous peer review
            processes. Our vision is to support authors every step of the way,
            fostering innovation and collaboration within the scientific
            community.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {/* <li>
              <a href="/">Home</a>
            </li> */}
            <li>
              <a href="/journal">
                Journals
              </a>
            </li>
            <li>
              <a href="/submitManuscript">Join Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            {/* <li>
              <a href="/submitManuscript">Submit Manuscript</a>
            </li> */}
            <li>
              <a href="/journal/author">Publication Guidelines</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms-of-service">Terms Of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@example.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
          </p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Journal. All rights reserved.</p>
      </div>
    </footer>
  );

};
  

export default Footer;
