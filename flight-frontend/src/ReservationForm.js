import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const initialState = {
  companyName: '',
  passengerName: '',
  flightNumber: '',
  price: '',
  departureAddress: '',
  destinationAddress: '',
  kickoffTime: '',
  status: 'CONFIRMED',
};

function ReservationForm({ onSubmit }) {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 space-y-4">
      <div className="flex gap-4">
        <input type="text" name="companyName" value={form.companyName} onChange={handleChange} placeholder={t('companyName')} required className="w-1/2 p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="text" name="passengerName" value={form.passengerName} onChange={handleChange} placeholder={t('passengerName')} required className="w-1/2 p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" />
      </div>
      <div className="flex gap-4">
        <input type="text" name="flightNumber" value={form.flightNumber} onChange={handleChange} placeholder={t('flightNumber')} required className="w-1/2 p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder={t('price')} min="0" step="0.01" required className="w-1/2 p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" />
      </div>
      <div className="flex gap-4">
        <input type="text" name="departureAddress" value={form.departureAddress} onChange={handleChange} placeholder={t('departureAddress')} required className="w-1/2 p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="text" name="destinationAddress" value={form.destinationAddress} onChange={handleChange} placeholder={t('destinationAddress')} required className="w-1/2 p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" />
      </div>
      <div className="flex gap-4">
        <input type="datetime-local" name="kickoffTime" value={form.kickoffTime} onChange={handleChange} required className="w-1/2 p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" />
        <select name="status" value={form.status} onChange={handleChange} required className="w-1/2 p-2 rounded bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="CONFIRMED">{t('confirmed')}</option>
          <option value="PENDING">{t('pending')}</option>
          <option value="CANCELLED">{t('cancelled')}</option>
        </select>
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">{t('create')}</button>
    </form>
  );
}

export default ReservationForm; 