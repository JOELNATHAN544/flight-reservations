import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
      {/* Add your reservation UI here, using t('create'), t('search'), etc. */}
    </div>
  );
}

export default App;
