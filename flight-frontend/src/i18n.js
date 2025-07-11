import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Flight Reservation",
      "create": "Create Reservation",
      "search": "Search Reservations",
      "passengerName": "Passenger Name",
      "companyName": "Company Name",
      "flightNumber": "Flight Number",
      "departureAddress": "Departure Address",
      "destinationAddress": "Destination Address",
      "kickoffTime": "Kickoff Time",
      "price": "Price",
      "status": "Status",
      "confirmed": "Confirmed",
      "pending": "Pending",
      "cancelled": "Cancelled",
      "any": "Any",
      "clearSearch": "Clear Search",
      "edit": "Edit",
      "delete": "Delete",
      "actions": "Actions",
      "reservations": "Reservations",
      "noReservations": "No reservations found."
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue à la réservation de vol",
      "create": "Créer une réservation",
      "search": "Rechercher des réservations",
      "passengerName": "Nom du passager",
      "companyName": "Nom de la compagnie",
      "flightNumber": "Numéro de vol",
      "departureAddress": "Adresse de départ",
      "destinationAddress": "Adresse de destination",
      "kickoffTime": "Heure de départ",
      "price": "Prix",
      "status": "Statut",
      "confirmed": "Confirmé",
      "pending": "En attente",
      "cancelled": "Annulé",
      "any": "Tous",
      "clearSearch": "Effacer la recherche",
      "edit": "Modifier",
      "delete": "Supprimer",
      "actions": "Actions",
      "reservations": "Réservations",
      "noReservations": "Aucune réservation trouvée."
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