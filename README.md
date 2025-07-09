# flight-reservations


---

## Prerequisites

- **Java 17+**
- **Gradle** (or use the included `./gradlew` wrapper)
- **Python 3** (for serving the frontend, or use any static file server)
- Modern web browser

---

## Getting Started

### 1. Backend (Spring Boot)

1. **Install dependencies and run the backend:**
   ```bash
   ./gradlew bootRun
   ```
   The backend will start on [http://localhost:8080](http://localhost:8080).

2. **API Endpoints:**
   - `POST   /tickets`           – Create a reservation
   - `GET    /tickets`           – List all reservations
   - `GET    /tickets/search`    – Search reservations (by departure, destination, flightNumber, status, kickoffTime)
   - `PUT    /tickets/{id}`      – Update a reservation
   - `DELETE /tickets/{id}`      – Delete a reservation

### 2. Frontend

1. **Serve the frontend directory:**
   ```bash
   cd frontend
   python3 -m http.server 8081
   ```
   Or use any static file server (Node.js `serve`, etc).

2. **Open the app:**
   - Go to [http://localhost:8081/index.html](http://localhost:8081/index.html) in your browser.

---

## Usage

- **Create Reservation:** Fill out the form and click "Create Reservation".
- **Edit Reservation:** Click "Edit" on a row, update the form, and click "Update Reservation".
- **Delete Reservation:** Click "Delete" and confirm in the modal dialog.
- **Search:** Use the search form to filter reservations.
- **Row Numbers:** The first column shows row numbers (not database IDs) for a clean, gapless look.

---

## Notes

- CORS is enabled for `http://localhost:8081` in the backend for local development.
- All data is stored in the backend database (configured in `application.properties`).
- The project uses Tailwind CSS via CDN for fast, modern styling.

---

## Screenshots

> _Add screenshots of the UI here if desired!_

---

## License

MIT (or your preferred license)

---

## Author

- [Your Name]