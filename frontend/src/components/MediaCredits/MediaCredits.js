import React, { useState, useEffect } from 'react';
import { fetchMediaCredits } from '../../utils/ApiCalls';
import './MediaCredits.css';
import CarouselCard from '../CarouselCard/CarouselCard';

const MediaCredits = ({ mediaType, mediaId }) => {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const fetchedCredits = await fetchMediaCredits(mediaType, mediaId);
        setCredits(fetchedCredits);
      } catch (error) {
        console.error('Error fetching media credits:', error);
      }
    };

    fetchCredits();
  }, [mediaType, mediaId]);

  if (!credits || !credits.cast) {
    return null; 
  }

  return (
    <div className="MediaCreditsContainer">
      <h1>MediaCredits</h1>
      <div className="credits-carousel">
       
          {credits.cast.map((actor) => (
            <CarouselCard
              key={actor.id}
              image={actor.profile_path}
              name={actor.name}
              character={actor.character}
            />
          ))}
      
      </div>
    </div>
  );
};

export default MediaCredits;
