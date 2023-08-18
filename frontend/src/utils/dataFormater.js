import {
  MdNetworkWifi1Bar,
  MdNetworkWifi2Bar,
  MdNetworkWifi3Bar,
  MdNetworkWifi,
} from "react-icons/md";

export const dateFormater = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const dateFormaterByYear = (dateString) => {
  const options = { year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const convertToEuro = (value) => {
  const conversionRate = 0.85;
  return (value * conversionRate).toFixed(2);
};

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


export const translateCountryName = (countryName) => {
  const countryTranslations = {
    'China': 'Chine',
    'United States of America': 'États-Unis d\'Amérique',
    'United Kingdom': 'Grande Bretagne',
    'Japan' : 'Japon',
    'Mexico' : 'Mexique',
    'Poland' : 'Pologne',
    'France':'France',

    
    'FR':'France',
    'US': 'États-Unis d\'Amérique',
    'CN': 'Chine',
    'GB' : 'Grande Bretagne',
    'ES' : 'Espagne',
    'JP': 'Japon',
    'PL':'Pologne',
  };

  return countryTranslations[countryName] || countryName;
};