import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Flight Reservation",
      "create": "Create Reservation",
      "search": "Search Reservations"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue à la réservation de vol",
      "create": "Créer une réservation",
      "search": "Rechercher des réservations"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n; 