import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e09ayin', 'template_c7iy1ko', form.current, 'BgO3BxW240MnYvru3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <section>
            <h1>Contact Me</h1>

            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
        </section>
    </>
  )
}

export default ContactMe