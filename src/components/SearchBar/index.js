// src/components/SearchBar/index.js

import React, { useState } from "react";

import "./styles.scss";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  return (
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a book or author..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="search-button" onClick={() => onSearch(term)}>
        Search
      </button>
    </div>
  );
}
