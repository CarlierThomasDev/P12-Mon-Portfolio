import React, { useState } from 'react'; // Assure-toi que useState est bien importé
import "./formulaire.css";

export default function Formulaire() {
  // 1. Gérer l'état des champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    company: '',
    message: '',
  });

  // 2. Gérer l'état des erreurs de validation
  const [errors, setErrors] = useState({});

  // 3. Gérer l'état du message de confirmation / succès
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Pour désactiver le bouton pendant l'envoi

  // Fonction pour mettre à jour l'état quand un champ change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    // Supprimer l'erreur dès que l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  // Fonction de validation
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Validation Nom
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est obligatoire.';
      isValid = false;
    }

    // Validation Prénom
    if (!formData.surname.trim()) {
      newErrors.surname = 'Le prénom est obligatoire.';
      isValid = false;
    }

    // Validation Email
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est obligatoire.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { // Regex simple pour email
      newErrors.email = 'Le format de l\'email est invalide.';
      isValid = false;
    }

    // Validation Message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = async (e) => { // Rendre la fonction asynchrone
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    // Réinitialiser les messages d'état
    setSubmitMessage('');
    setIsSuccess(false);

    // Vérifier la validation avant d'envoyer
    if (!validateForm()) {
      setSubmitMessage('Veuillez corriger les erreurs dans le formulaire.');
      setIsSuccess(false);
      return; // Arrêter l'exécution si la validation échoue
    }

    setIsSubmitting(true); // Désactiver le bouton pendant l'envoi

    try {
      // *** REMPLACEZ 'YOUR_FORMSPREE_FORM_ID' par l'ID de votre formulaire Formspree ***
      // Exemple: Si votre URL Formspree est https://formspree.io/f/abcdefgh, l'ID est abcdefgh
      const formspreeUrl = 'https://formspree.io/f/xeozjvla';

      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important pour Formspree
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) { // response.ok est true pour les codes de statut 2xx
        setSubmitMessage('Votre message a été envoyé avec succès ! Merci !');
        setIsSuccess(true);
        setFormData({ name: '', surname: '', email: '', company: '', message: '' }); // Réinitialiser le formulaire
      } else {
        // Gérer les erreurs spécifiques de Formspree si nécessaire
        // const data = await response.json(); // Si Formspree renvoie un JSON d'erreur
        setSubmitMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Erreur réseau ou du serveur:', error);
      setSubmitMessage('Une erreur inattendue est survenue. Veuillez vérifier votre connexion.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false); // Réactiver le bouton après l'envoi (réussi ou échoué)
      // Optionnel: effacer le message après quelques secondes
      setTimeout(() => {
          setSubmitMessage('');
      }, 5000); // Le message disparaît après 5 secondes
    }
  };

  // Vérifier si tous les champs obligatoires sont remplis pour activer le bouton
  const isFormValid = formData.name.trim() !== '' &&
                      formData.surname.trim() !== '' &&
                      formData.email.trim() !== '' &&
                      formData.message.trim() !== '' &&
                      !errors.email; // S'assurer que l'email est valide aussi

  return (
    <section className="formulaire">
      <div className="formulaire-intro-texte">
        <p className="formulaire-intro-titre">Formulaire de Contact</p>
        <p className="formulaire-intro-description">Veuillez remplir le formulaire ci-dessous pour me contacter.</p>
      </div>

      {/* !!! ATTENTION: Une seule balise <form> englobant tous les champs et le bouton !!! */}
      <form className="main-form-container" onSubmit={handleSubmit} noValidate> {/* noValidate désactive la validation HTML par défaut */}
        <div className="form-group-row"> {/* Utilise une nouvelle classe pour la mise en page des groupes */}
          <div className="form-field-group left-group">
            <div className="item item-1">
              <label htmlFor="name">Nom <span>*</span></label>
            </div>
            <div className="item item-2">
              <input
                type="text"
                id="name"
                name="name" // IMPORTANT : doit correspondre à la clé 'name' dans formData
                value={formData.name}
                onChange={handleChange}
                onBlur={validateForm} // Valide au moment où l'utilisateur quitte le champ
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
          </div>

          <div className="form-field-group right-group">
            <div className="item item-3">
              <label htmlFor="surname">Prénom <span>*</span></label>
            </div>
            <div className="item item-4">
              <input
                type="text"
                id="surname"
                name="surname" // IMPORTANT : doit correspondre à la clé 'surname' dans formData
                value={formData.surname}
                onChange={handleChange}
                onBlur={validateForm}
                className={errors.surname ? 'input-error' : ''}
              />
              {errors.surname && <p className="error-message">{errors.surname}</p>}
            </div>
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-field-group left-group">
            <div className="item item-1">
              <label htmlFor="email">Email <span>*</span></label>
            </div>
            <div className="item item-2">
              <input
                type="email"
                id="email"
                name="email" // IMPORTANT : doit correspondre à la clé 'email' dans formData
                value={formData.email}
                onChange={handleChange}
                onBlur={validateForm}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>

          <div className="form-field-group right-group">
            <div className="item item-3">
              <label htmlFor="company">Société</label>
            </div>
            <div className="item item-4">
              <input
                type="text"
                id="company"
                name="company" // IMPORTANT : doit correspondre à la clé 'company' dans formData
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Le champ Message est maintenant dans le même formulaire */}
        <div className="form-field-group full-width-group"> {/* Nouvelle classe pour un champ pleine largeur */}
          <div className="item item-3">
            <label htmlFor="message">Message <span>*</span></label>
          </div>
          <div className="item item-4">
            <textarea
              id="message"
              name="message" // IMPORTANT : doit correspondre à la clé 'message' dans formData
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={validateForm}
              className={errors.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>
        </div>

        {/* Message de confirmation / erreur */}
        {submitMessage && (
          <p className={`submit-message ${isSuccess ? 'success' : 'error'}`}>
            {submitMessage}
          </p>
        )}

        {/* Le bouton Envoyer est maintenant dans le formulaire et désactivé si non valide ou en cours d'envoi */}
        <button
          type="submit"
          className="form-submit"
          disabled={!isFormValid || isSubmitting} // Le bouton est désactivé si le formulaire n'est pas valide OU si un envoi est en cours
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'} {/* Texte du bouton change pendant l'envoi */}
        </button>
      </form>
    </section>
  );
}