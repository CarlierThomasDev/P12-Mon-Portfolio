// src/components/Header.jsx
import React, { useState } from 'react';
import {NavLink, Link } from 'react-router-dom';
import './header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MobileNavModal from '../../Components/MobileNavModal/mobileNavModal.jsx'; // <<== Importez le nouveau composant de modale


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-name">
        <Link to="/" className="header-name-link" onClick={closeMenu}>
          <h1>CARLIER Thomas</h1>
        </Link>
      </div>

      {/* Navigation Desktop */}
      <nav className="header-nav header-nav-desktop">
        <NavLink to="/about" className="header-link" onClick={closeMenu}>À propos</NavLink> {/* AJOUT DE className */}
        <NavLink to="/projects" className="header-link" onClick={closeMenu}>Projets</NavLink> {/* AJOUT DE className */}
        <NavLink to="/Contacts" className="header-link" onClick={closeMenu}>Contact</NavLink> {/* AJOUT DE className */}
      </nav>

      {/* Bouton Hamburger */}
      <button
        className="hamburger-icon"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
      >
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" />
        )}
      </button>

      {/* <<== AFFICHE LA MODALE SEULEMENT SI 'isMenuOpen' EST TRUE */}
      {/* Les props 'isOpen' et 'onClose' sont passées à la modale */}
      <MobileNavModal isOpen={isMenuOpen} onClose={closeMenu} />

    </header>
  );
}