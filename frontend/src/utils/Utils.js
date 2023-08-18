import React from "react";
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";
import { MdNetworkWifi1Bar, MdNetworkWifi2Bar, MdNetworkWifi3Bar, MdNetworkWifi } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// FUNCTIONS FOR COUNTRIES FLAG
export const getCountryFlag = (languageCode) => {
  switch (languageCode) {
    case "en":
      return "🇺🇸"; // Etats Unis
    case "fr":
      return "🇫🇷"; // France
    case "it":
      return "🇮🇹"; // Italie
    case "ja":
      return "🇯🇵"; // Japon
    case "es":
      return "🇪🇸"; // Espagne
    case "de":
      return "🇩🇪"; // Allemagne
    case "ko":
      return "🇰🇷"; // Corée du Sud
    case "zh":
      return "🇨🇳"; // Chine
    case "ru":
      return "🇷🇺"; // Russie
    case "uk":
      return "🇺🇦"; // Ukraine
    case "tl":
      return "🇵🇭"; // Philippines
    case "pl":
      return "🇵🇱"; // Pologne
    case "hi":
      return "🇮🇳"; // Inde
    case "pt":
      return "🇵🇹"; // Portugal
    default:
      return "";
  }
};

// FUNCTION FOR RENDER STARS
export const renderStars = (vote_average) => {
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

// FUNCTION FOR CONVERT FULLDATE
export const dateFormater = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// FUNCTION FOR CONVERT TO YEAR ONLY
export const dateFormaterByYear = (dateString) => {
  const options = { year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// FUNCTION FOR CONVERT US DOLLARS TO EURO
export const convertToEuro = (value) => {
  const conversionRate = 0.85;
  return (value * conversionRate).toFixed(2);
};

// FUNCTION FOR TRANSLATE MEDIA STATUS
export const translateStatus = (status) => {
  switch (status) {
    case "Released":
      return "Sorti";
    case "Post Production":
      return "Post-production";
    case "Returning Series":
      return "Série en cours";
    default:
      return status;
  }
};

// FUNCTION FOR CONVERT POPULARITY DATA TO COLORS ICONS
export const getPopularityIcon = (popularity) => {
  const iconProps = { size: 20 }; // Ajustez la taille de l'icône selon vos besoins

  if (popularity >= 0 && popularity < 1000) {
    return <MdNetworkWifi1Bar color="red" {...iconProps} />;
  } else if (popularity >= 1000 && popularity < 2000) {
    return <MdNetworkWifi2Bar color="orange" {...iconProps} />;
  } else if (popularity >= 2000 && popularity < 3000) {
    return <MdNetworkWifi3Bar color="green" {...iconProps} />;
  } else {
    return <MdNetworkWifi color="darkgreen" {...iconProps} />;
  }
};

// FUNCTION FOR TRANSLATE COUNTRIES NAME TO FRENCH
export const translateCountryName = (countryName) => {
  const countryTranslations = {
    China: "Chine",
    "United States of America": "États-Unis d'Amérique",
    "United Kingdom": "Grande Bretagne",
    Japan: "Japon",
    Mexico: "Mexique",
    Poland: "Pologne",
    France: "France",

    FR: "France",
    US: "États-Unis d'Amérique",
    CN: "Chine",
    GB: "Grande Bretagne",
    ES: "Espagne",
    JP: "Japon",
    PL: "Pologne",
  };

  return countryTranslations[countryName] || countryName;
};

// FUNCTION FOR GET COLORS FOR THE CIRCULAR PROGRESSBAR
export const GetColorForPercentage = (percentage) => {
  if (percentage >= 75) {
    return "#22D07A";
  } else if (percentage >= 50) {
    return "#ff9800";
  } else if (percentage >= 25) {
    return "#f44336";
  } else {
    return "#e0e0e0";
  }
};

// FUNNCTION FOR CREATE CIRCULAR PROGRESS BAR TO REACT CIRCULAR PROGRESS BAR LIBRARY
export const CustomCircularProgressbar = ({ percentage }) => {
    return (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={8}
          styles={{
            root: {
              width: "50px",
              height: "50px",
              margin: "0 auto 10px",
              background: "#062441",
              borderRadius: "50%",
              position: "relative",
            },
            path: {
              stroke: GetColorForPercentage(percentage),
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "white",
            },
            text: {
              fill: "white",
              fontSize: "30px",
              fontWeight: "bold",
              padding: "10px"
            },
          }}
        />
    );
  };