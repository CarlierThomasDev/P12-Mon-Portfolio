import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-me">
      <div className="contact-me-container">

        <div className="contact-me-texte">
          <p className="contact-me-title">Ouvert aux nouvelles opportunités</p>
          <p className="contact-me-description">Connectons-nous et réalisons-le ensemble !</p>
        </div>

        <div className="contact-me-link">
          <a href="mailto:carlierthomas1@hotmail.fr">Envoyer un e-mail</a>
        </div>

        <div className="contact-me-accroche">
          <p className="contact-me-accroche">Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question.</p>
        </div>

      </div>
     
  </section>
  );
}
