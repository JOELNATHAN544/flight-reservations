import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import SearchForm from './SearchForm';
import { useTranslation } from 'react-i18next';
import {
  fetchTickets,
  searchTickets,
  createTicket,
  updateTicket,
  deleteTicket as apiDeleteTicket
} from './api';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();
  const [reservations, setReservations] = useState([]);
  const [editing, setEditing] = useState(null); // id of reservation being edited
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Toggle dark mode
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Fetch all tickets on mount
  React.useEffect(() => {
    loadTickets();
  }, []);

  async function loadTickets() {
    setLoading(true); setError(null);
    try {
      const data = await fetchTickets();
      setReservations(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // Create or update reservation
  const handleCreate = async (form) => {
    setLoading(true); setError(null);
    try {
      if (editing !== null) {
        await updateTicket(editing, form);
        setEditing(null);
      } else {
        await createTicket(form);
      }
      await loadTickets();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Search reservations
  const handleSearch = async (criteria) => {
    setLoading(true); setError(null);
    try {
      // Remove empty fields
      const params = Object.fromEntries(Object.entries(criteria).filter(([_, v]) => v));
      const data = await searchTickets(params);
      setReservations(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    setEditing(null);
    await loadTickets();
  };

  const handleDelete = async (id) => {
    setLoading(true); setError(null);
    try {
      await apiDeleteTicket(id);
      await loadTickets();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    setEditing(id);
  };

  const editingReservation = reservations.find(r => r.id === editing);

  return (
    <div className={"min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 " + (darkMode ? "text-gray-100" : "text-gray-900") }>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-center text-primary flex-1">{t('welcome')}</h1>
          <div className="flex items-center">
            <button
              aria-label="Toggle dark/light mode"
              className="ml-4 p-2 rounded-full border border-gray-300 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
              onClick={() => setDarkMode(dm => !dm)}
            >
              <span className="text-xl">{darkMode ? '🌙' : '☀️'}</span>
            </button>
            <select
              className="ml-4 p-2 rounded border border-gray-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              onChange={e => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="es">Español</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <ReservationForm onSubmit={handleCreate} initialData={editingReservation} />
          </div>
          <div className="md:w-1/2">
            <SearchForm onSearch={handleSearch} onClear={handleClear} />
          </div>
        </div>
        <div className="mt-10 bg-gradient-to-br from-white via-gray-50 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 rounded-lg p-6 shadow-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
        {loading && <div className="text-center text-blue-500 mb-2">{t('loading') || 'Loading...'}</div>}
        {error && <div className="text-center text-red-500 mb-2">{error}</div>}
          <h2 className="text-xl font-semibold mb-4 text-primary dark:text-primary">{t('reservations')}</h2>
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
                <th className="px-2 py-2">{t('actions')}</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              {reservations.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center text-gray-400 py-4">{t('noReservations')}</td>
                </tr>
              ) : (
                reservations.map((r, i) => (
                  <tr key={r.id}>
                    <td className="px-2 py-1">{i + 1}</td>
                    <td className="px-2 py-1">{r.companyName}</td>
                    <td className="px-2 py-1">{r.passengerName}</td>
                    <td className="px-2 py-1">{r.flightNumber}</td>
                    <td className="px-2 py-1">{r.departureAddress}</td>
                    <td className="px-2 py-1">{r.destinationAddress}</td>
                    <td className="px-2 py-1">{r.kickoffTime}</td>
                    <td className="px-2 py-1">{r.price}</td>
                    <td className="px-2 py-1">{r.status}</td>
                    <td className="px-2 py-1">
                      <button className="bg-accent text-white px-2 py-1 rounded mr-2 hover:bg-orange-600 transition" onClick={() => handleEdit(r.id)}>{t('edit')}</button>
                      <button className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition" onClick={() => handleDelete(r.id)}>{t('delete')}</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;