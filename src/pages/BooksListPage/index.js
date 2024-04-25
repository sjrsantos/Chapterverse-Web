// src/pages/BooksListPage/index.js
import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../../components/SearchBar";
import Sidebar from "../../components/SideBarFilter";
import PageContainer from "../../components/PageContainer";
import BookDetailsModal from "../../components/BookDetailsModal";
import Loading from "../../components/Loading";

import "./styles.scss";

export default function BooksListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const itemsPerPage = 9;

  const fetchBooks = useCallback(async () => {
    setIsLoading(true);
    let url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      searchTerm
    )}&limit=${itemsPerPage}&offset=${paginationIndex * itemsPerPage}`;

    if (filters.category) {
      url += `&subject=${encodeURIComponent(filters.category)}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks((prevBooks) =>
        paginationIndex === 0 ? data.docs : [...prevBooks, ...data.docs]
      );
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, filters, paginationIndex]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const loadMoreBooks = () => {
    setPaginationIndex((prevIndex) => prevIndex + 1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPaginationIndex(0); // Reset pagination
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPaginationIndex(0); // Reset pagination
  };

  const closeModal = () => setSelectedBook(null);

  return (
    <PageContainer title="Books">
      <SearchBar onSearch={handleSearch} />
      <button
        className="toggle-sidebar-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? "Hide Filters" : "Show Filters"}
      </button>
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onFilterChange={handleFilterChange}
      />
      <div className="books-container">
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          books.map((book, index) => {
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

            return (
              <div
                key={book.key || index}
                className="book-item"
                onClick={() => setSelectedBook(book)}
              >
                <img
                  src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
                <div>
                  <p>Title :{book.title}</p>
                </div>
                <div>
                  <p>
                    Rating: {roundedRating} {starsHTML}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      {books.length >= itemsPerPage && (
        <button className="show-more-button" onClick={loadMoreBooks}>
          Show More
        </button>
      )}
      {selectedBook && (
        <BookDetailsModal book={selectedBook} onClose={closeModal} />
      )}
    </PageContainer>
  );
}
