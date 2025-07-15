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
- **Kubernetes-ready** deployment with Docker images and internal service proxying

---

## Project Structure
```
flight-reservations/
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
- **Kubernetes deployment uses an internal Nginx proxy:**
  - All API calls use a relative path (`/api`).
  - Nginx proxies `/api` requests to the backend service (`flight-backend:8080`) inside the cluster.
  - See `flight-frontend/nginx.conf` for proxy config.

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

### 1. Build Docker Images
```bash
# In flight-frontend directory
# Make sure src/api.js uses API_BASE = '/api';
# Make sure nginx.conf is present as described in the docs

docker build -t flight-frontend:latest .
docker save flight-frontend:latest -o flight-frontend.tar
sudo ctr -n k8s.io images import flight-frontend.tar

# For backend, build and import similarly if needed
```

### 2. Deploy to k3s
```bash
kubectl apply -f k8s/postgres-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

### 3. Accessing the App
- Use NodePort: `http://<VM-IP>:<NodePort>`
- Or use `kubectl port-forward` for local access:
  ```bash
  kubectl port-forward service/flight-frontend 8080:80
  # Then open http://localhost:8080 on the same machine where you run the command
  ```

---

## Internationalization (i18n)
- Fully supports English, French, German, Spanish, Chinese, and Hebrew.
- All UI and notifications are translated.
- Easily extensible for more languages in `flight-frontend/src/i18n.js`.

---

## Archiving and Copying the Project

To archive the entire project directory (from the VM):
```bash
cd /path/to/parent/of/flight-reservations
# Create a compressed archive
 tar czvf flight-reservations.tar.gz flight-reservations/
# Copy the archive to your local machine using scp:
scp user@vm-ip:/path/to/flight-reservations.tar.gz /local/path/
```

---

## License
MIT

---

## Author
- [JOELNATHAN544]