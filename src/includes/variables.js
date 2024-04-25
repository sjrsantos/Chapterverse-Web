// src/includes/variables.js

export const appName = "Chapterverse - Web App";

/**
 * Categories array
 * consist of id and name
 */
export const categories = [
  {
    id: "education",
    name: "Education",
  },
  {
    id: "entertainment",
    name: "Entertainment",
  },
  {
    id: "game",
    name: "Game",
  },
  {
    id: "news",
    name: "News",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "random",
    name: "Random",
  },
  {
    id: "technology",
    name: "Technology",
  },
  {
    id: "travel",
    name: "Travel",
  },
  {
    id: "history",
    name: "History",
  },
  {
    id: "sci-fi",
    name: "Sci-Fi",
  },
  {
    id: "horror",
    name: "Horror",
  },
];

/**
 * Get a category based on its id
 * @param {string} id
 *   The id of the category to retrieve
 * @returns
 *   The category name or "None" if not found
 */

export const getCategory = (id) => {
  const category = categories.find((c) => c.id === id);
  return category?.name || "None";
};
