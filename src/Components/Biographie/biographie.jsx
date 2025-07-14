import React from 'react';
import "./biographie.css";

export default function Biographie() {
  return (

    <section className="about-section">
        <h1 className="about-title">À Propos de Moi</h1>
      <div className="about-container">
        <div className="profile-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E35AQFDMAf-R6plGA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1735811253702?e=1752750000&v=beta&t=pfGuRp9iH4ltCGr47w28DFlw1WHEWpDoibhEeUgVHq0"
            alt="Votre Photo de Profil"
            className="profile-photo"
          />
          <h1 className="profile-name">CARLIER Thomas</h1>
          <p className="profile-title">Développeur Web Front-End Junior</p>
        </div>

        <div className="bio-content">
          <p>
            Passionné par la création d'expériences utilisateur immersives et fluides, je suis un développeur web front-end junior animé par le désir de transformer des idées créatives en interfaces interactives et performantes. Mon parcours, bien que récent dans le domaine professionnel, est le fruit d'une curiosité insatiable pour les technologies du web et d'une volonté constante de comprendre comment les utilisateurs interagissent avec le numérique. J'ai découvert dans le développement front-end le parfait équilibre entre la logique technique et l'expression visuelle.          </p>
          <p>
            Maîtrisant HTML, CSS (Sass), JavaScript (ES6+), et le framework React, je m'efforce de produire un code propre, maintenable et performant. Je crois fermement qu'une bonne interface n'est pas seulement esthétique, mais aussi intuitive et accessible à tous les utilisateurs.
          </p>
          <p>
            Je suis constamment à la recherche de nouveaux défis et opportunités pour appliquer mes compétences et contribuer à des projets significatifs. Ouvert à la collaboration, je suis prêt à m'investir pleinement au sein d'une équipe dynamique pour développer des solutions web innovantes.
          </p>

           <div className="cv-link-container"> 
            <a
              href="https://drive.google.com/file/d/1kmE3hu96lBnUmqWvld_fJH3NaX9Lmb9r/view?usp=drive_link"
              target="_blank"        
              rel="noopener noreferrer"  
              className="cv-download-button"   
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
