import React from 'react';
import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs';

const renderStars = (vote_average) => {
    const fullStars = Math.floor(vote_average);
    const hasHalfStar = vote_average - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<BsStarFill key={`full-${i}`} />);
    }

    if (hasHalfStar) {
        stars.push(<BsStarHalf key="half" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<BsStar key={`empty-${i}`} />);
    }
    return stars;
};

export default renderStars;
