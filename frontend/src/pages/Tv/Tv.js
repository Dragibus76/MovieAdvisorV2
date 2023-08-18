// MoviesPage.js
import React from 'react';
import MediaList from '../../components/MediaList/MediaList'; 


const Tv = () => {
  return (
    <div>
      <h2>Series</h2>
      <MediaList mediaType="tv" />
    </div>
  );
};

export default Tv;
