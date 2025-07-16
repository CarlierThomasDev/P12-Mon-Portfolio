import React, { useState } from 'react';
import "./projets.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importe les icônes œil et œil barré

import ohmyfoodImage from '../../assets/ohmyfood.webp';
import sophieBluelImage from '../../assets/sophie-bluel.webp';
import argentBankImage from '../../assets/argent-bank.webp';
import kasaImage from '../../assets/kasa.webp';

export default function Projets() {

  const projects = [
    {
      id: 'p4',
      name: 'Ohmyfood - Site de Réservation de menus',
      description: "Ce projet m'a permis d'intégrer l'interface mobile-first d'un site web pour une start-up de restauration. En partant de maquettes Figma pour mobile et desktop, j'ai mis en œuvre une approche \"mobile-first\" pour assurer une expérience utilisateur fluide et adaptative sur toutes les tailles d'écran. J'ai enrichi l'interface avec des animations CSS dynamiques pour rendre la navigation plus interactive et engageante, et j'ai structuré l'ensemble du style en utilisant Sass, garantissant un code CSS organisé et maintenable. Ce fut également une opportunité clé de me familiariser avec Git et GitHub pour le versionnement et la collaboration.",
      technologies: ['HTML5', 'CSS3', 'Sass', 'Animations CSS', 'Mobile-First', 'Git', 'GitHub', 'Figma'],
      image: ohmyfoodImage,
      githubLink: 'https://github.com/CarlierThomasDev/P4-Ohmyfood',
      liveDemoLink: 'https://carlierthomasdev.github.io/P4-Ohmyfood/'
    },
    {
      id: 'p6',
      name: 'Portfolio d\'Architecte d\'Intérieur - Sophie Bluel',
      description: "Ce projet m'a plongé dans la création d'une page web dynamique en JavaScript pour le portfolio d'une architecte d'intérieur. En partant d'un HTML existant, j'ai développé l'interactivité complète de la page, notamment la gestion des événements utilisateurs et la manipulation du DOM pour afficher et filtrer dynamiquement les travaux. J'ai également conçu et implémenté une page de connexion administrateur et une modale d'upload de médias entièrement from scratch. Un aspect crucial fut la communication avec une API REST, me permettant de récupérer et d'envoyer des données, une compétence fondamentale pour toute application web moderne.",
      technologies: ['HTML', 'CSS', 'JavaScript (DOM manipulation)', 'API REST', 'Authentification', 'Modales', 'Figma', 'Git', 'GitHub'],
      image: sophieBluelImage,
      githubLink: 'https://github.com/CarlierThomasDev/P6-Sophie-Bluel-frontend',
      liveDemoLink: null
    },
    {
      id: 'p10',
      name: 'Argent Bank - Application de Banque en Ligne',
      description: "Ce projet consistait à implémenter le front-end d'une application bancaire complète, en mettant l'accent sur l'intégration avec un back-end existant. J'ai utilisé React pour construire une interface utilisateur dynamique et un tableau de bord réactif, et Redux pour une gestion d'état globale et cohérente de l'application. La mission clé était d'établir une communication fluide avec l'API REST du back-end, en configurant des appels pour afficher et manipuler les données des transactions. L'utilisation de Swagger m'a permis de bien comprendre et d'interagir avec les points d'accès de l'API, consolidant ainsi mes compétences dans la création d'applications bancaires robustes et connectées.",
      technologies: ['React', 'Redux', 'API REST', 'Gestion d\'état', 'Authentification', 'Swagger', 'Node.js (interaction)', 'HTML', 'CSS'],
      image: argentBankImage,
      githubLink: 'https://github.com/CarlierThomasDev/p10-argentBank-front-end-react',
      liveDemoLink: null
    },
    {
      id: 'p7',
      name: 'Kasa - Application de Location Immobilière',
      description: "Dans ce projet, j'ai développé le front-end complet d'une application web de location immobilière, en utilisant React pour créer une expérience utilisateur moderne et réactive. La gestion de la navigation entre les différentes pages a été configurée avec React Router, assurant un parcours utilisateur fluide et intuitif. J'ai mis l'accent sur la logique de présentation des données et le développement de composants React modulaires, en m'appuyant sur des données simulées issues d'un fichier JSON. Ce projet a également été l'occasion de mettre en œuvre des animations CSS et d'organiser le style avec Sass, pour une interface visuellement attrayante et un code CSS maintenable.",
      technologies: ['React', 'React Router', 'Composants React', 'Animations CSS', 'Sass', 'JSON Data', 'Vite', 'HTML', 'CSS'],
      image: kasaImage,
      githubLink: 'https://github.com/CarlierThomasDev/P7-Kasa',
      liveDemoLink: 'https://carlierthomasdev.github.io/P7-Kasa/'
    }
  ];

  // État local pour chaque projet, initialisé avec un objet où les IDs sont les clés
  // et les valeurs sont des booléens indiquant si l'info est affichée.
  // Par défaut, toutes les descriptions sont masquées.
  const [visibleDescriptions, setVisibleDescriptions] = useState(() => {
    const initialState = {};
    projects.forEach(project => {
      initialState[project.id] = false; // False par défaut (masqué)
    });
    return initialState;
  });

  // Fonction pour basculer la visibilité d'une description spécifique
  const toggleDescriptionVisibility = (projectId) => {
    setVisibleDescriptions(prevState => ({
      ...prevState,
      [projectId]: !prevState[projectId] // Inverse l'état de visibilité pour ce projet
    }));
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Mes Projets</h2>
        <p className="projects-intro">Découvrez quelques-unes de mes réalisations qui mettent en lumière mes compétences en développement front-end.</p>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={`Aperçu du ${project.name}`} className="project-image" />
                <div className="project-overlay">
                  {project.liveDemoLink && (
                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="overlay-button">
                      Démo Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="overlay-button">
                      Code Source
                    </a>
                  )}
                </div>
              </div>

              {/* Le bouton pour afficher/masquer */}
              <button 
                className="toggle-project-description-button bouton"
                onClick={() => toggleDescriptionVisibility(project.id)}
                aria-expanded={visibleDescriptions[project.id]}
                aria-label={visibleDescriptions[project.id] ? "Masquer la description" : "Afficher la description"}
              >
                <FontAwesomeIcon icon={visibleDescriptions[project.id] ? faEyeSlash : faEye} />
              </button>

              {/* Le bloc project-info est rendu conditionnellement */}
              {visibleDescriptions[project.id] && (
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
                        GitHub
                      </a>
                    )}
                    {project.liveDemoLink && (
                      <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link-button primary">
                        Voir la Démo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}