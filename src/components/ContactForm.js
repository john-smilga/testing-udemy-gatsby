import React from "react"
import styles from "../css/contact.module.css"

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/moqwrlda"
      method="POST"
      className={styles.center}
    >
      <>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          className={styles.formControl}
        />
      </>
      <>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@johndoe.com"
          className={styles.formControl}
        />
      </>
      <>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Saisissez votre Message"
          rows="10"
          className={styles.formControl}
        />
      </>
      <>
        <input type="submit" className={styles.submit} value="Send Message" />
      </>
    </form>
  )
}

export default ContactForm
