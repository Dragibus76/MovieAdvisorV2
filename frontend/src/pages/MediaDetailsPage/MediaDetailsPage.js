import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMediaDetails } from '../../utils/ApiCalls';

const MediaDetailsPage = () => {
  const { mediaType, mediaId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const fetchedDetails = await fetchMediaDetails(mediaType, mediaId);
      setDetails(fetchedDetails);
    };

    fetchDetails();
  }, [mediaType, mediaId]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{details.title || details.name}</h1>
    </div>
  );
};

export default MediaDetailsPage;
