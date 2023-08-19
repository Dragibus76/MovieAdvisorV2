import React from 'react';
import './CarouselCard.css';

const CarouselCard = ({ image, name, character }) => {
  return (
    <div className="carousel-card">
      <img
        src={image ? `https://image.tmdb.org/t/p/w185${image}` : 'https://unitedhealthcentres.com/wp-content/uploads/2021/11/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpeg'}
        alt={name}
        className="carousel-card-image"
      />
      <div className="carousel-card-info">
        <h3 className='CardCreditsName'>{name}</h3>
        <p className='CardCreditsRole'>{character}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
