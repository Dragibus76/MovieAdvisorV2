// MoviesPage.js
import React from 'react';
import MediaList from '../../components/MediaList/MediaList'; 


const Movie = () => {
  return (
    <div>
      <h2>Films</h2>
      <MediaList mediaType="movie" />
    </div>
  );
};

export default Movie;
