import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMediaDetails, fetchMediaCredits } from '../../utils/ApiCalls';
import MediaHeader from '../../components/MediaHeader/MediaHeader';
import Spinner from '../../components/Spinner/Spinner';
import MediaCredits from '../../components/MediaCredits/MediaCredits';
import MediaCompany from '../../components/MediaCompany/MediaCompany';
import './MediaDetailsPage.css';

const MediaDetailsPage = () => {
  const { mediaType, mediaId } = useParams();
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDetails = await fetchMediaDetails(mediaType, mediaId);
      setDetails(fetchedDetails);

      const fetchedCredits = await fetchMediaCredits(mediaType, mediaId);
      setCredits(fetchedCredits);
    };

    fetchData();
  }, [mediaType, mediaId]);

  if (!details || !credits) {
    return <Spinner />;
  }

  return (
    <div className="media-details-page">
      <MediaHeader details={details} />
      <div className="media-details-content">
        <MediaCredits mediaType={mediaType} mediaId={mediaId} />
        <MediaCompany companies={details.production_companies} />
      </div>
    </div>
  );
};

export default MediaDetailsPage;
