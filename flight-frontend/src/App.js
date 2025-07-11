import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import SearchForm from './SearchForm';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const [reservations, setReservations] = useState([]);

  // Simulate backend create
  const handleCreate = (form) => {
    setReservations(prev => [...prev, { ...form, id: prev.length + 1 }]);
  };

  // Simulate backend search
  const handleSearch = (criteria) => {
    // For now, just filter the local reservations array
    setReservations(prev => prev.filter(r => {
      return (
        (!criteria.departure || r.departureAddress === criteria.departure) &&
        (!criteria.destination || r.destinationAddress === criteria.destination) &&
        (!criteria.flightNumber || r.flightNumber === criteria.flightNumber) &&
        (!criteria.status || r.status === criteria.status) &&
        (!criteria.kickoffTime || r.kickoffTime === criteria.kickoffTime)
      );
    }));
  };

  const handleClear = () => {
    setReservations([]); // In a real app, reload all reservations from backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">{t('welcome')}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <ReservationForm onSubmit={handleCreate} />
        </div>
        <div className="md:w-1/2">
          <SearchForm onSearch={handleSearch} onClear={handleClear} />
        </div>
      </div>
      <div className="mt-10 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{t('reservations')}</h2>
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <th className="px-2 py-2">#</th>
              <th className="px-2 py-2">{t('companyName')}</th>
              <th className="px-2 py-2">{t('passengerName')}</th>
              <th className="px-2 py-2">{t('flightNumber')}</th>
              <th className="px-2 py-2">{t('departureAddress')}</th>
              <th className="px-2 py-2">{t('destinationAddress')}</th>
              <th className="px-2 py-2">{t('kickoffTime')}</th>
              <th className="px-2 py-2">{t('price')}</th>
              <th className="px-2 py-2">{t('status')}</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900">
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center text-gray-400 py-4">{t('noReservations')}</td>
              </tr>
            ) : (
              reservations.map((r, i) => (
                <tr key={i}>
                  <td className="px-2 py-1">{i + 1}</td>
                  <td className="px-2 py-1">{r.companyName}</td>
                  <td className="px-2 py-1">{r.passengerName}</td>
                  <td className="px-2 py-1">{r.flightNumber}</td>
                  <td className="px-2 py-1">{r.departureAddress}</td>
                  <td className="px-2 py-1">{r.destinationAddress}</td>
                  <td className="px-2 py-1">{r.kickoffTime}</td>
                  <td className="px-2 py-1">{r.price}</td>
                  <td className="px-2 py-1">{r.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;