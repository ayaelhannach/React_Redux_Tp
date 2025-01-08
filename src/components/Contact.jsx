import React from "react";

function Contact() {
  return (
    <form>
      <input type="text" placeholder="Nom" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Contact;
