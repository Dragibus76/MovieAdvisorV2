import React, { useState, useEffect } from "react";
import { fetchMediaByType, searchMedia } from "../../utils/ApiCalls";
import MediaCard from "../class/MediaCard/MediaCard";
import { FaSearch } from "react-icons/fa";
import "./MediaList.css";

const MediaList = ({ mediaType }) => {
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [mediaList, setMediaList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = async (category, page = 1) => {
    setSelectedCategory(category);
    setCurrentPage(page);
    try {
      let sortBy = category;
      if (category === "upcoming") {
        sortBy = mediaType === "movie" ? "upcoming" : "on_the_air";
      } else if (category === "now_playing") {
        sortBy = "now_playing"; // For movies
      } else if (category === "on_the_air") {
        sortBy = "on_the_air"; // For TV series
      }
      const mediaData = await fetchMediaByType(mediaType, sortBy, page);
      setMediaList(mediaData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (searchTerm, page = 1) => {
    setSearchTerm(searchTerm);
    try {
      const searchResults = await searchMedia(mediaType, searchTerm, page);
      setMediaList(searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    if (searchTerm) {
      handleSearch(page);
    } else {
      handleCategoryChange(selectedCategory, page);
    }
  };

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage, mediaType]);

  return (
    <div>
      <div className="button-container">
        <button
          className={`custom-button ${
            selectedCategory === "popular" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("popular")}
        >
          Les plus populaires
        </button>
        <button
          className={`custom-button ${
            selectedCategory === "top_rated" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("top_rated")}
        >
          Les mieux notés
        </button>
        {mediaType === "movie" && (
          <>
            <button
              className={`custom-button ${
                selectedCategory === "upcoming" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("upcoming")}
            >
              À venir
            </button>
            <button
              className={`custom-button ${
                selectedCategory === "now_playing" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("now_playing")}
            >
              En cours
            </button>
          </>
        )}
        {mediaType === "tv" && (
          <>
            <button
              className={`custom-button ${
                selectedCategory === "upcoming" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("upcoming")}
            >
              À venir
            </button>
            <button
              className={`custom-button ${
                selectedCategory === "on_the_air" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("on_the_air")}
            >
              En cours
            </button>
          </>
        )}
      </div>
      <div className="SearchBarContainer">
        <div className="SearchInputContainer">
          <input
            type="text"
            className="SearchInput"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Rechercher un film ou une série..."
          />
          <FaSearch className="SearchIcon" onClick={handleSearch} />
        </div>
      </div>
      <div className="media-cards-container">
        {mediaList.map((media, index) => (
          <MediaCard key={index} media={media} />
        ))}
      </div>
      <div className="pagination">
        <button className='PaginationButton' onClick={() => handlePageChange(currentPage - 1)}>
          Page précédente
        </button>
        <button className='PaginationButton' onClick={() => handlePageChange(currentPage + 1)}>
          Page suivante
        </button>
      </div>
    </div>
  );
};

export default MediaList;
