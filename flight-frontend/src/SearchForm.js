import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const initialState = {
  departure: '',
  destination: '',
  flightNumber: '',
  status: '',
  kickoffTime: ''
};

function SearchForm({ onSearch, onClear }) {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(form);
  };

  const handleClear = () => {
    setForm(initialState);
    if (onClear) onClear();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 space-y-4">
      <input
        type="text"
        name="departure"
        value={form.departure}
        onChange={handleChange}
        placeholder={t('departureAddress')}
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="text"
        name="destination"
        value={form.destination}
        onChange={handleChange}
        placeholder={t('destinationAddress')}
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="text"
        name="flightNumber"
        value={form.flightNumber}
        onChange={handleChange}
        placeholder={t('flightNumber')}
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">{t('status')} ({t('any')})</option>
        <option value="CONFIRMED">{t('confirmed')}</option>
        <option value="PENDING">{t('pending')}</option>
        <option value="CANCELLED">{t('cancelled')}</option>
      </select>
      <input
        type="datetime-local"
        name="kickoffTime"
        value={form.kickoffTime}
        onChange={handleChange}
        placeholder={t('kickoffTime')}
        className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="flex gap-4">
        <button type="submit" className="flex-1 py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition">{t('search')}</button>
        <button type="button" onClick={handleClear} className="flex-1 py-2 px-4 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-700 transition">{t('clearSearch')}</button>
      </div>
    </form>
  );
}

export default SearchForm;