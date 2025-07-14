import { Link } from "react-router-dom";
import "./footer.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Footer() {
  return (
    <footer className="footer">
        <p> &copy; 2025 CARLIER Thomas. Tous droits réservés.</p>
    <div className="footer-socials">
       <a href="https://github.com/CarlierThomasDev" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={['fab', 'github']} aria-label="GitHub" title="GitHub" />
       </a>
       <a href="https://www.linkedin.com/in/thomas-carlier-0814b8171/"  target="_blank" rel="noopener noreferrer">
       <FontAwesomeIcon icon={['fab', 'linkedin']} aria-label="LinkedIn" title="LinkedIn" />
       </a>
    </div>
    </footer>
  );
}

