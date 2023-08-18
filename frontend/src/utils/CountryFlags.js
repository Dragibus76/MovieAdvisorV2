const getCountryFlag = (languageCode) => {
  switch (languageCode) {
    case 'en':
      return '🇺🇸'; // Etats Unis
    case 'fr':
      return '🇫🇷'; // France
    case 'it':
      return '🇮🇹'; // Italie
    case 'ja':
      return '🇯🇵'; // Japon
    case 'es':
      return '🇪🇸'; // Espagne
    case 'de':
      return '🇩🇪'; // Allemagne
    case 'ko':
      return '🇰🇷'; // Corée du Sud
    case 'zh':
      return '🇨🇳'; // Chine
    case 'ru':
      return '🇷🇺'; // Russie
    case 'uk':
      return '🇺🇦'; // Ukraine
    case 'tl':
      return '🇵🇭'; // Philippines
    case 'pl':
      return '🇵🇱'; // Pologne
    case 'hi':
      return '🇮🇳' // Inde
    case 'pt':
      return '🇵🇹' // Portugal
    default:
      return ''; 
  }
};

export default getCountryFlag;