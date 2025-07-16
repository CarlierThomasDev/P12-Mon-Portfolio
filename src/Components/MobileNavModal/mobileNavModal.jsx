import React from 'react';
import { Link } from 'react-router-dom';
import './mobileNavModal.css'; 

export default function MobileNavModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null; 
  }

  return (
    <nav className="mobile-nav-modal is-active">
      {/* Bouton de fermeture à l'intérieur de la modale (souvent un "X") */}
      <button className="mobile-nav-close-btn" onClick={onClose} aria-label="Fermer le menu">
        {/* Ici, vous pouvez utiliser une icône Font Awesome "times" ou "x" */}
        <span className="close-icon-content">X</span> {/* Ou <FontAwesomeIcon icon={faTimes} /> */}
      </button>

      <Link to="/about" onClick={onClose}>À propos</Link>
      <Link to="/projects" onClick={onClose}>Projets</Link>
      <Link to="/Contacts" onClick={onClose}>Contact</Link>
    </nav>
  );
}