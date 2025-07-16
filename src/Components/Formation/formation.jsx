import React from 'react';
import "./formation.css";

const formations = [
  {
    year: '2024 - 2025',
    title: 'Développeur Web',
    school: 'OpenClassrooms',
    description: 'Parcours complet en développement Front-end : maîtrise de HTML, CSS (SCSS/SASS), JavaScript, React et Redux. Axé sur la création d\'applications web modernes et performantes.',
  },
  {
    year: '2024',
    title: 'Bootcamp',
    school: 'Pop School',
    description: 'Formation intensive couvrant HTML, CSS, JavaScript et les principes du design web, axée sur la pratique et les projets concrets.',
  },
  {
    year: '2024',
    title: 'MOOC JavaScript',
    school: 'OpenClassrooms',
    description: 'Apprentissage des bases de la logique de programmation et de l\'interactivité côté client avec JavaScript.',
  },
  {
    year: '2023',
    title: 'MOOC HTML et CSS',
    school: 'OpenClassrooms',
    description: 'Acquisition des fondamentaux du développement web : structuration de contenu avec HTML et stylisation avancée avec CSS.',
  },
];

export default function Formation() {
  return (
   <section className="formations-section">
      <h2>Mon Parcours de Formation</h2>
      <div className="timeline">
        {formations.map((formation, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div> 
            <div className="timeline-content">
              <span className="timeline-year">{formation.year}</span>
              <h3>{formation.title}</h3>
              <p className="timeline-school">{formation.school}</p>
              <p>{formation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}