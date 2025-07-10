# Flight Reservation Management

---

## Prerequisites

- **Java 17+**
- **Gradle** (or use the included `./gradlew` wrapper)
- **Docker**
- **Kubernetes (k3s in Multipass VM recommended)**
- **PostgreSQL** (see config below)
- **Python 3** (for serving the frontend locally, or use any static file server)
- Modern web browser

---

## Local Development

### 1. Backend (Spring Boot)

1. **Run the backend locally:**
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

### 2. Frontend (Static HTML)

1. **Serve the frontend directory locally:**
   ```bash
   cd frontend
   python3 -m http.server 8081
   ```
   Or use any static file server (Node.js `serve`, etc).

2. **Open the app:**
   - Go to [http://localhost:8081/index.html](http://localhost:8081/index.html) in your browser.

3. **Frontend API URL:**
   - The frontend expects the backend at `http://localhost:8080/tickets` by default. If you change backend port, update the API URL in `frontend/index.html`.

---

## Kubernetes & Multipass VM Deployment

### 1. Build Docker Images (in the VM)

```bash
# Backend
./gradlew bootJar
sudo docker build -t flight-backend:latest .

# Frontend
cd frontend
sudo docker build -t flight-frontend:latest .
```

### 2. Import Images into k3s (if using containerd)

```bash
sudo docker save flight-backend:latest > flight-backend.tar
sudo docker save flight-frontend:latest > flight-frontend.tar
sudo ctr images import flight-backend.tar
sudo ctr images import flight-frontend.tar
```

### 3. Deploy to Kubernetes

```bash
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
```

### 4. Expose Services to Your Host (Port Forwarding & SSH Tunnel)

#### In the VM:
```bash
kubectl port-forward svc/flight-backend 8080:8080
kubectl port-forward svc/flight-frontend 8081:80
```

#### On your host (outside the VM):
```bash
# Backend
ssh -L 8080:localhost:8080 ubuntu@<vm-ip>
# Frontend
ssh -L 8082:localhost:8081 ubuntu@<vm-ip>
```
- Now access the frontend at [http://localhost:8082](http://localhost:8082)
- The frontend will talk to the backend at `http://localhost:8080/tickets`

#### NodePort Alternative
- You can also use the NodePort assigned to the frontend service (see `kubectl get svc flight-frontend`) and access via `http://<vm-ip>:<nodeport>`

---

## Database Configuration

Edit `src/main/resources/application.properties` as needed:
```
spring.datasource.url=jdbc:postgresql://<db-host>:<db-port>/flightdb
spring.datasource.username=flightuser
spring.datasource.password=flightpass
```

---

## Usage

- **Create Reservation:** Fill out the form and click "Create Reservation".
- **Edit Reservation:** Click "Edit" on a row, update the form, and click "Update Reservation".
- **Delete Reservation:** Click "Delete" and confirm in the modal dialog.
- **Search:** Use the search form to filter reservations.
- **Row Numbers:** The first column shows row numbers (not database IDs) for a clean, gapless look.

---

## Troubleshooting

- **CORS Issues:**
  - The backend is configured to allow CORS for local development. If you see CORS errors, check the backend filter or add `@CrossOrigin` as needed.
- **Port Forwarding:**
  - If you get `address already in use`, kill the process using the port or use a different port.
- **ImagePullBackOff:**
  - Make sure images are imported into k3s/containerd and use `imagePullPolicy: Never` in your YAMLs.
- **Permissions:**
  - If you get kubeconfig permission errors, run:
    ```bash
    sudo chown ubuntu:ubuntu /etc/rancher/k3s/k3s.yaml
    sudo chmod 644 /etc/rancher/k3s/k3s.yaml
    ```

---

## License

MIT

---

## Author

- [JOELNATHAN544]