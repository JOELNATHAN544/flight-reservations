# Flight Reservation Frontend (React)

A modern, multilingual flight reservation management UI built with React, Tailwind CSS, and react-toastify.

---

## Features
- **Create, edit, delete, and search flight reservations**
- **Pagination** for reservations table
- **Beautiful, responsive UI** with professional gradients and dark/light mode
- **Toast notifications** for all actions, styled to match the app
- **Custom confirmation modals** for delete/edit actions
- **Internationalization (i18n)**: English, French, German, Spanish, Chinese, Hebrew (with language switcher)
- **API integration** with Spring Boot backend

---

## Project Structure
```
flight-frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico, logo192.png, logo512.png, manifest.json, robots.txt
├── src/
│   ├── App.js           # Main app component
│   ├── App.css          # Custom styles (including toast overrides)
│   ├── i18n.js          # i18n configuration and translations
│   ├── api.js           # API utility for backend integration
│   ├── ReservationForm.js
│   ├── SearchForm.js
│   ├── index.js         # Entry point
│   ├── index.css, logo.svg, reportWebVitals.js, setupTests.js, App.test.js
├── package.json, package-lock.json
├── tailwind.config.js
└── README.md
```

---

## Setup & Scripts

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

---

## Usage
- **Create Reservation:** Fill out the form and click "Create Reservation".
- **Edit Reservation:** Click "Edit", confirm, update the form, and save.
- **Delete Reservation:** Click "Delete" and confirm in the modal.
- **Search:** Use the search form to filter reservations.
- **Pagination:** Use the controls below the table to navigate pages and set rows per page.
- **Language:** Use the dropdown in the header to switch languages instantly.
- **Dark/Light Mode:** Toggle with the sun/moon button in the header.

---

## Internationalization (i18n)
- Fully supports English, French, German, Spanish, Chinese, and Hebrew.
- All UI and notifications are translated.
- Easily extensible for more languages in `src/i18n.js`.

---

## API Integration
- Expects backend at `http://localhost:8080/tickets` (configurable in `src/api.js`)
- See main project README for backend setup and endpoints.

---

## License
MIT
