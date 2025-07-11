import React from 'react';
import ReservationForm from './ReservationForm';

function App() {
  const handleCreate = (form) => {
    // For now, just log the form data
    console.log(form);
  };

  return (
    <div className="App">
      <ReservationForm onSubmit={handleCreate} />
    </div>
  );
}

export default App;