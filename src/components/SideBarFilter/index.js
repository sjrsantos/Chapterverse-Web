// src/components/SideBarFilter/index.js

import React, { useState } from "react";
import { categories } from "../../includes/variables";

import "./styles.scss";

export default function Sidebar({ isOpen, toggleSidebar, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  // This function is called when the category filter changes
  const handleCategoryChange = (value) => {
    // Check if the category is already selected
    if (selectedCategories.includes(value)) {
      // If it is selected, remove it from the array
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    } else {
      // If it's not selected, add it to the array
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  // This function is called when the "Apply Filters" button is clicked
  const applyFilters = () => {
    onFilterChange({ category: selectedCategories }); // Create the filter object based on the selected category
    toggleSidebar(); // Close the sidebar
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Map over the categories array to create filter options */}
      {categories.map((category) => (
        <div key={category.id}>
          <input
            type="checkbox"
            id={category.id}
            name="category"
            value={category.id}
            checked={selectedCategories.includes(category.id)}
            onChange={(e) => handleCategoryChange(e.target.value)}
          />
          <label htmlFor={category.id}>{category.name}</label>
        </div>
      ))}
      <button onClick={applyFilters}>Apply Filters</button>
      <button onClick={toggleSidebar}>Close</button>
    </div>
  );
}
