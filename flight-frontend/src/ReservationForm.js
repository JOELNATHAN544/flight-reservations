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

function ReservationForm({ onSubmit, initialData }) {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialData ? { ...initialState, ...initialData, kickoffTime: initialData.kickoffTime ? initialData.kickoffTime.slice(0, 16) : '' } : initialState);

  React.useEffect(() => {
    if (initialData) {
      setForm({ ...initialState, ...initialData, kickoffTime: initialData.kickoffTime ? initialData.kickoffTime.slice(0, 16) : '' });
    } else {
      setForm(initialState);
    }
    // eslint-disable-next-line
  }, [initialData]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Prepare data for backend
    const payload = {
      ...form,
      price: form.price ? parseFloat(form.price) : 0,
      kickoffTime: form.kickoffTime ? new Date(form.kickoffTime).toISOString() : null,
    };
    await onSubmit(payload);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white via-gray-50 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 space-y-4">
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
      <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded hover:from-blue-700 hover:to-cyan-500 transition font-semibold shadow-md">{t('create')}</button>
    </form>
  );
}

export default ReservationForm; 