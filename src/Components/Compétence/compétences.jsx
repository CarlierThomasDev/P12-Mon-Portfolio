import React from 'react';
import "./compétence.css";

const skills = [
  {
    iconColor: '#FF6347', // Un rouge orangé pour HTML/CSS
    title: 'HTML - CSS',
    description: 'Maîtrise des langages fondamentaux du web pour la structuration de contenu et le stylisme avancé (incluant SCSS/SASS).',
  },
  {
    iconColor: '#FFD700', // Un jaune pour JavaScript
    title: 'JavaScript',
    description: 'Programmation côté client pour créer des sites web dynamiques et interactifs.',
  },
  {
    iconColor: '#3CB371', // Un vert pour la gestion de projet
    title: 'Gestion de projet',
    description: 'Compétence essentielle pour organiser les tâches, prioriser et collaborer efficacement sur des projets web.',
  },
  {
    iconColor: '#87CEFA', // Un bleu clair pour React
    title: 'React',
    description: 'Maîtrise du framework front-end React pour la création d\'interfaces utilisateur robustes et modulaires, incluant Redux pour la gestion d\'état.',
  },
  {
    iconColor: '#EE82EE', // Un violet pour l'optimisation
    title: 'Optimisation et Debug',
    description: 'Capacité à améliorer les performances des sites existants et à identifier/résoudre les bugs pour une meilleure expérience utilisateur.',
  },
  {
    iconColor: '#6A5ACD', // Un violet plus foncé pour le portfolio
    title: 'Portfolio',
    description: 'Compétence à présenter et valoriser ses projets de code à travers un portfolio en ligne professionnel.',
  },
];

export default function Compétences() {
    return (
         <section className="skills-section">
      <h2>Mes Compétences Clés</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className='container'>
                <div className="skills-icon" style={{ backgroundColor: skill.iconColor }}></div>
                <h3>{skill.title}</h3>
            </div>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
    );
}