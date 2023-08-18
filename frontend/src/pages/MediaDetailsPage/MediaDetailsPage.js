import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMediaDetails } from '../../utils/ApiCalls';
import MediaHeader from '../../components/MediaHeader/MediaHeader';
import './MediaDetailsPage.css';


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
       <MediaHeader/>
    </div>
  );
};

export default MediaDetailsPage;
