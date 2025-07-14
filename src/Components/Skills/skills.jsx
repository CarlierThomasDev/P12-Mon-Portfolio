import "./skills.css";


export default function Skills() {
  return (
    <section className="skills">
        <h1 className="statut-title version-mobile">J'aime travailler avec...</h1>

        <div className="skills-container">
           <div className="skills-grid">
                
                <div className="skill-item">
                    <img src="src/assets/react.svg" alt="Icône React" className="skill-icon" />
                    <p className="skill-name">React</p>
                    <p className="skill-description">Développement front-end avec React : je construis des applications web performantes et modulaires, en mettant l'accent sur la réutilisabilité des composants et l'expérience utilisateur.</p>
                </div>

                <div className="skill-item">
                    <img src="src/assets/html5-brands.svg" alt="Icône HTML5" className="skill-icon" />
                    <p className="skill-name">HTML5</p>
                    <p className="skill-description">Développement front-end avec HTML5 : je crée des structures de contenu sémantiques et accessibles, en utilisant les dernières fonctionnalités du langage pour améliorer l'expérience utilisateur.</p>
                </div>

                <div className="skill-item">
                    <img src="src/assets/css3-brands.svg" alt="Icône CSS3" className="skill-icon" />
                    <p className="skill-name">CSS3</p>
                    <p className="skill-description">Développement front-end avec CSS3 : je conçois des interfaces utilisateur attrayantes et réactives, en utilisant les dernières fonctionnalités du langage pour améliorer l'expérience utilisateur.</p>
                </div>

                <div className="skill-item">
                    <img src="src/assets/js-brands.svg" alt="Icône JavaScript" className="skill-icon" />
                    <p className="skill-name">JavaScript</p>
                    <p className="skill-description">Développement front-end avec JavaScript : j'ajoute de l'interactivité et de la dynamique à mes applications web, en utilisant les dernières fonctionnalités du langage pour améliorer l'expérience utilisateur.</p>
                </div>
            </div>
        </div> {/* <-- Cette div était manquante dans votre code original */}
    </section>
  );
}