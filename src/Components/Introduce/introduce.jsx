import backgroundImage from "../../assets/arrierePlanIntroduce.webp";
import "./introduce.css";
import { Link } from 'react-router-dom';

export default function Introduce() {
  return (
    <section
      className="introduce-me relative h-screen bg-no-repeat bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="introduce-title text-5xl font-bold mb-4">Bonjour !<br/> Je m'appelle Thomas</h1>
        <h2 className="introduce-subtitle text-3xl mb-3">Développeur Front-end</h2>
        <p className="introduce-description max-w-2xl text-lg">
Collaborons pour concrétiser vos projets les plus innovants.<br/> Que ce soit à distance ou en présentiel, je suis prêt pour de nouveau défi.        </p>
      </div>

      <div className="button-container">
        <button
          onClick={() => window.location.href = "mailto:carlierthomas1@hotmail.fr"}
        >
          Contactez-moi
        </button>

      <button
        onClick={() => window.open("https://github.com/CarlierThomasDev", "_blank")}
      >
        Voir sur GitHub
      </button>

      <button
        onClick={() => window.open("https://drive.google.com/file/d/1kmE3hu96lBnUmqWvld_fJH3NaX9Lmb9r/view?usp=drive_link", "_blank")}
      >
        Télécharger mon CV
      </button>
    </div>
    </section>
  );
}
