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
  },
  de: {
    translation: {
      "welcome": "Willkommen zur Flugreservierung",
      "create": "Reservierung erstellen",
      "search": "Reservierungen suchen",
      "passengerName": "Passagiername",
      "companyName": "Fluggesellschaft",
      "flightNumber": "Flugnummer",
      "departureAddress": "Abflugadresse",
      "destinationAddress": "Zieladresse",
      "kickoffTime": "Abflugzeit",
      "price": "Preis",
      "status": "Status",
      "confirmed": "Bestätigt",
      "pending": "Ausstehend",
      "cancelled": "Storniert",
      "any": "Alle",
      "clearSearch": "Suche löschen",
      "edit": "Bearbeiten",
      "delete": "Löschen",
      "actions": "Aktionen",
      "reservations": "Reservierungen",
      "noReservations": "Keine Reservierungen gefunden."
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a la Reserva de Vuelos",
      "create": "Crear Reserva",
      "search": "Buscar Reservas",
      "passengerName": "Nombre del Pasajero",
      "companyName": "Nombre de la Compañía",
      "flightNumber": "Número de Vuelo",
      "departureAddress": "Dirección de Salida",
      "destinationAddress": "Dirección de Destino",
      "kickoffTime": "Hora de Salida",
      "price": "Precio",
      "status": "Estado",
      "confirmed": "Confirmado",
      "pending": "Pendiente",
      "cancelled": "Cancelado",
      "any": "Cualquiera",
      "clearSearch": "Limpiar Búsqueda",
      "edit": "Editar",
      "delete": "Eliminar",
      "actions": "Acciones",
      "reservations": "Reservas",
      "noReservations": "No se encontraron reservas."
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