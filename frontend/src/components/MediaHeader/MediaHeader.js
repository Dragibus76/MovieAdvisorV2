import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsDot, BsHeartFill, BsPlayFill } from "react-icons/bs";
import { CustomCircularProgressbar, dateFormater } from "../../utils/Utils";
import { fetchMediaDetails, fetchMediaCredits } from "../../utils/ApiCalls";
import "./MediaHeader.css";

const MediaHeader = () => {
  const { mediaType, mediaId } = useParams();
  const [details, setDetails] = useState(null);
  const isMoviePage = window.location.pathname.includes("/movie");
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showFullSynopsis] = useState(false);

  useEffect(() => {
    fetchDetails();
  }, [mediaType, mediaId]);

  const fetchDetails = async () => {
    const fetchedDetails = await fetchMediaDetails(mediaType, mediaId);
    const fetchedCredits = await fetchMediaCredits(mediaType, mediaId);
    setDetails({
      ...fetchedDetails,
      credits: fetchedCredits,
    });
  };

  const year = details?.release_date?.split("-")[0];
  const genres = details?.genres?.map((genre) => genre.name);
  const userRatingPercentage = Math.round((details?.vote_average || 0) * 10);

  const handlePlayClick = (videoKey) => {
    if (details?.videos?.results && details.videos.results.length > 0) {
      setTrailerUrl(
        `https://www.youtube.com/embed/${details.videos.results[0].key}`
      );
      setShowTrailer(true);
    } else {
      console.error("No video available.");
    }
  };

  return (
    <div className="media-details-container">
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})`,
          backgroundSize: "cover",
        }}
      />
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300${details?.poster_path}`}
          alt={details?.title}
        />
      </div>
      <div className="info">
        <h2>
          {details?.title}{" "}
          <span className="release-year">
            ({isMoviePage ? year : details?.first_air_date?.split("-")[0]})
          </span>
        </h2>
        <div className="genres">
          {genres?.map((genre, index) => (
            <span key={index} className="genre">
              {genre}
            </span>
          ))}
          <span className="duration">
            <BsDot className="dot-icon" />
            {isMoviePage
              ? `${details?.runtime} min`
              : `${details?.episode_run_time} min par épisode`}
            {details?.number_of_seasons > 0 && (
              <>
                <BsDot className="dot-icon" />
                {`${details?.number_of_seasons} saison${
                  details.number_of_seasons > 1 ? "s" : ""
                }`}
              </>
            )}
            {details?.number_of_episodes > 0 && (
              <>
                <BsDot className="dot-icon" />
                {`${details?.number_of_episodes} épisode${
                  details.number_of_episodes > 1 ? "s" : ""
                }`}
              </>
            )}
          </span>
          <span className="release-date">
            <BsDot className="dot-icon" />
            {isMoviePage
              ? dateFormater(details?.release_date)
              : dateFormater(details?.first_air_date)}
          </span>
        </div>
        <div className="user-rating">
          <div className="progress-circle">
            <CustomCircularProgressbar percentage={userRatingPercentage} />
            <div className="icons">
              <div className="icon-circle">
                <BsHeartFill className="icon-heart" />
              </div>
              <div
                className="icon-circle"
                onClick={() =>
                  handlePlayClick(details?.videos?.results[0]?.key)
                }
              >
                <BsPlayFill className="icon-play" />
              </div>
            </div>
          </div>
        </div>
        <div>
          {details?.tagline && <p className="tagline">{details.tagline}</p>}
        </div>
        <div>
          <h4>Synopsis :</h4>
          <p className="synopsis">{details?.overview}</p>
        </div>
        {showFullSynopsis ? null : (
          <div>
            <h4>Réalisateur :</h4>
            {isMoviePage ? (
              details?.credits?.crew?.filter(
                (crew) => crew.job === "Executive Producer"
              ).length > 0 ? (
                <p>
                  {details.credits.crew
                    .filter((crew) => crew.job === "Executive Producer")
                    .slice(0, 3)
                    .map((crew) => crew.name)
                    .join(", ")}
                </p>
              ) : null
            ) : details?.created_by?.length > 0 ? (
              <p>{details.created_by[0].name}</p>
            ) : null}
          </div>
        )}
      </div>
      {showTrailer && (
        <div className="overlay">
          <iframe
            title="Trailer"
            src={trailerUrl}
            frameBorder="0"
            allowFullScreen
            className="trailer-iframe"
          ></iframe>
          <div className="close-button" onClick={() => setShowTrailer(false)}>
            <AiFillCloseCircle className="close-button-trailer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaHeader;
