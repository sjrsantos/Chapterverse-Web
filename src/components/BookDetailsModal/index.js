// src/components/BookDetailsModal/index.js
import React from "react";
import "./styles.scss";

export default function BookDetailsModal({ book, onClose }) {
  // Helper function to get a string from the array or a single string.
  const getString = (value) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value || "Not available";
  };

  // Helper function to get the publish year
  const getPublishYear = (value) => {
    if (typeof value === "number" || typeof value === "string") {
      return value;
    }
    return value?.value || "Description not available.";
  };

  // Helper function to get the ratings count
  const getRatingsCount = (value) => {
    if (typeof value === "number" || typeof value === "string") {
      return value;
    }
    return value?.value || "Ratings not available.";
  };

  // Check if ratings_average exists and has a value
  const roundedRating = book.ratings_average
    ? book.ratings_average.toFixed(1)
    : "N/A";

  // Helper function to determine the number of stars based on the rounded rating
  const numberOfStars = book.ratings_average
    ? Math.round(book.ratings_average)
    : 0;

  // Generate the stars as React components
  const starsHTML = Array.from({ length: numberOfStars }, (_, i) => (
    <span key={i}>⭐</span>
  ));
  if (!book) {
    return null;
  }

  // close the modal pressing the escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  });

  console.log(book);

  return (
    <div className="book-details-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>{book.title}</h2>
        {book.cover_i && (
          <img
            src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt={`Cover of ${book.title}`}
          />
        )}

        <p>
          <b>Author:</b> {getString(book.author_name)}
        </p>
        <p>
          <b>Publish Year:</b> {getPublishYear(book.publish_year[0])}
        </p>
        <p>
          <b>Number of Ratings:</b> {getRatingsCount(book.ratings_count)}
        </p>
        <p>
          <b>Rating:</b> {roundedRating} {starsHTML}
        </p>
        {/* ... other details */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
