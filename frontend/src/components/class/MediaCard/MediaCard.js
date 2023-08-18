import React from 'react';
import renderStars from '../../../utils/starUtils';
import getCountryFlag from '../../../utils/CountryFlags';
import { dateFormaterByYear } from '../../../utils/dataFormater';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import './MediaCard.css'

const MediaCard = ({ media, mediaType }) => {
    const countryFlag = getCountryFlag(media.original_language);
    const formattedDate = dateFormaterByYear(media.release_date || media.first_air_date);
  return (
    <div className="CardContainer">
      <Link to={`/details/${mediaType}/${media.id}`}>
     <img src={`https://image.tmdb.org/t/p/original${media.poster_path}`} className="backimg" alt={media.title || media.name} />
     <img src={`https://image.tmdb.org/t/p/original${media.poster_path}`} className="movie-cover" alt={media.title || media.name} />
     </Link>
     <AiOutlineHeart className='likeIcon' />
     <img className="movie-cover" src={media.coverImage} />
     <h6>{media.title || media.name}</h6>
     <div className='ratingContainer'>
      {renderStars(media.vote_average / 2)}
      </div>
      <div className="head1">
        <p>Année</p>
        <p>Note</p>
        <p>Vote</p>
        <p>Pays</p>
      </div>
      <div className="head2">
      <p>{formattedDate}</p>
        <p>{media.vote_average}</p>
        <p>{media.vote_count}</p>
        <p>{countryFlag}</p> {/* Afficher l'emoji du drapeau */}
      </div>
    </div>
  );
};

export default MediaCard;
