import React, { useState, useEffect } from 'react';
import { fetchMediaByType } from '../../utils/ApiCalls'; 
import MediaCard from '../class/MediaCard/MediaCard';
import './MediaList.css';

const MediaList = ({ mediaType }) => {
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [mediaList, setMediaList] = useState([]);

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    try {
      let sortBy = category;
      if (category === 'upcoming') {
        sortBy = mediaType === 'movie' ? 'upcoming' : 'airing_today';
      } else if (category === 'now_playing') {
        sortBy = 'now_playing'; // For movies
      } else if (category === 'on_the_air') {
        sortBy = 'on_the_air'; // For TV series
      }
      const mediaData = await fetchMediaByType(mediaType, sortBy);
      setMediaList(mediaData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleCategoryChange(selectedCategory);
  }, [selectedCategory, mediaType]);

  return (
    <div>
      <div className="button-container">
        <button className={`custom-button ${selectedCategory === 'popular' ? 'active' : ''}`} onClick={() => handleCategoryChange('popular')}>Les plus populaires</button>
        <button className={`custom-button ${selectedCategory === 'top_rated' ? 'active' : ''}`} onClick={() => handleCategoryChange('top_rated')}>Les mieux notés</button>
        {mediaType === 'movie' && (
          <>
            <button className={`custom-button ${selectedCategory === 'upcoming' ? 'active' : ''}`} onClick={() => handleCategoryChange('upcoming')}>À venir</button>
            <button className={`custom-button ${selectedCategory === 'now_playing' ? 'active' : ''}`} onClick={() => handleCategoryChange('now_playing')}>En cours</button>
          </>
        )}
        {mediaType === 'tv' && (
          <>
            <button className={`custom-button ${selectedCategory === 'upcoming' ? 'active' : ''}`} onClick={() => handleCategoryChange('upcoming')}>À venir</button>
            <button className={`custom-button ${selectedCategory === 'on_the_air' ? 'active' : ''}`} onClick={() => handleCategoryChange('on_the_air')}>En cours</button>
          </>
        )}
      </div>
      <div className="media-cards-container">
        {mediaList.map((media, index) => (
          <MediaCard key={index} media={media} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
