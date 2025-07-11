# Flight Reservation Management System

A fullstack, multilingual flight reservation management system with a modern React frontend and a robust Spring Boot backend.

---

## Features
- **Create, edit, delete, and search flight reservations**
- **Pagination** and advanced search
- **Beautiful, responsive UI** with gradients, dark/light mode, and custom modals
- **Toast notifications** for all actions, styled to match the app
- **Internationalization (i18n):** English, French, German, Spanish, Chinese, Hebrew (with language switcher)
- **API integration** between frontend and backend
- **Kubernetes-ready** deployment with Docker images

---

## Project Structure
```
demo_new/
├── flight-frontend/         # React frontend (see its README for details)
│   ├── src/
│   ├── public/
│   └── ...
├── src/
│   ├── main/java/com/adorsys_gis/demo/
│   │   ├── controller/      # Spring Boot REST controllers
│   │   ├── model/           # JPA entities
│   │   ├── repository/      # Spring Data repositories
│   │   ├── service/         # Business logic
│   │   └── ...
│   ├── main/resources/
│   │   ├── application.properties
│   │   └── ...
│   └── test/
├── k8s/                     # Kubernetes deployment YAMLs
├── build.gradle, settings.gradle, Dockerfile, ...
└── README.md (this file)
```

---

## Backend (Spring Boot)
- Java 17+, Gradle
- REST API for managing flight reservations
- Endpoints:
  - `POST   /tickets`           – Create a reservation
  - `GET    /tickets`           – List all reservations
  - `GET    /tickets/search`    – Search reservations (by departure, destination, flightNumber, status, kickoffTime)
  - `PUT    /tickets/{id}`      – Update a reservation
  - `DELETE /tickets/{id}`      – Delete a reservation
- CORS enabled for local development
- See `src/main/resources/application.properties` for DB config

---

## Frontend (React)
- See [`flight-frontend/README.md`](./flight-frontend/README.md) for full details
- Modern UI with Tailwind CSS, react-toastify, and i18n
- Connects to backend at `http://localhost:8080/tickets` by default

---

## Setup & Local Development

### 1. Backend
```bash
./gradlew bootRun
```
Runs at [http://localhost:8080](http://localhost:8080)

### 2. Frontend
```bash
cd flight-frontend
npm install
npm start
```
Runs at [http://localhost:3000](http://localhost:3000)

---

## Kubernetes & Docker Deployment
- See the original instructions below for building Docker images, importing into k3s, and deploying with Kubernetes YAMLs in `k8s/`.
- Port-forward or use NodePort to access services from your host.

---

## Internationalization (i18n)
- Fully supports English, French, German, Spanish, Chinese, and Hebrew.
- All UI and notifications are translated.
- Easily extensible for more languages in `flight-frontend/src/i18n.js`.

---

## License
MIT

---

## Author
- [JOELNATHAN544]