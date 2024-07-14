"use client";

import { useState } from "react";
import classes from "./page.module.css";
import emailjs from "emailjs-com";

export default function MailPage({ params }) {
  const Email = params.email;
  const receiverEmail = Email.replace(/%40/g, "@");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      sender_name: name,
      receiver_email: receiverEmail,
      sender_email: email,
      message: body,
    };
    emailjs
      .send(
        "service_tet6a7l",
        "template_zmjict7",
        templateParams,
        "7ly1ijS560yI3fT8b"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Mail sent successfully");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send mail");
        }
      );
    setBody("");
    setEmail("");
    setName("");
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Tell your thoughts about the recipe to the creator</h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <p>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </p>
          <p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </p>
          <p>
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="10"
              required
            ></textarea>
          </p>
          <p className={classes.actions}>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>
    </>
  );
}
