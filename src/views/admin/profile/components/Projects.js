// ContactPage.jsx

import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Première section avec les champs de contact */}
      <div className="contact-form">
        <h2>Contactez-nous</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>

      {/* Deuxième section avec l'image */}
      <div className="contact-image">
        <img src="chemin/vers/votre/image.jpg" alt="Contact" />
      </div>
    </div>
  );
};

export default ContactPage;
