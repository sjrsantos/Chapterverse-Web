// src/components/Form/index.js

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { addUserForm } from "../../database/firestoreService";

import "./style.scss";

export default function Form() {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(false); // Reset the submitted state
    setErrorMessages([]); // Clear previous error messages

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    const newErrorMessages = [];

    // Simple client-side validation
    if (!data.from_name || data.from_name.length < 3) {
      newErrorMessages.push("Name is required.");
    }
    if (!data.email || data.email.length === 0) {
      newErrorMessages.push("Email is required.");
    } else {
      // Regex pattern for validating an email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(data.email)) {
        newErrorMessages.push("Please enter a valid email address.");
      }
    }
    if (!data.message) {
      newErrorMessages.push("Message is required.");
    }

    setErrorMessages(newErrorMessages);

    if (newErrorMessages.length === 0) {
      // Add the form data to the Firestore database
      addUserForm(data)
        .then((docId) => {
          // If no errors, send the email
          emailjs
            .sendForm(
              "service_zf61gx6",
              "template_dnv8dmi",
              formRef.current,
              "ywKzTbPKd3ATp9vbv"
            )
            .then(
              (result) => {
                setIsSubmitted(true); // Set submitted state to show success message
                formRef.current.reset(); // Reset the form after successful submission
              },
              (error) => {
                setErrorMessages([
                  "Failed to send message. Please try again later.",
                ]);
              }
            );
        })
        .catch((error) => {
          setErrorMessages([
            "Failed to save form data. Please try again later.",
          ]);
        });
    }
  };

  return (
    <div className="contact-us-form">
      <div>
        <h2>We're here to listen</h2>
        <p>
          Any questions, feedback, or just want to say hello? Drop us a message!
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group-name">
          <label htmlFor="from_name">Name:</label>
          <input type="text" id="from_name" name="from_name" required />
        </div>

        <div className="form-group-email">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group-message">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit">Send</button>
      </form>

      {isSubmitted && (
        <p className="success-message">Thank you for contacting us!</p>
      )}
      {errorMessages.length > 0 && (
        <div className="form-errors">
          <ul>
            {errorMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
