#!/bin/bash
# restart_workflow.sh
# Usage: bash k8s/restart_workflow.sh
#
# This script documents and helps you restart your full-stack app after a reboot.
# Follow the steps and run the commands as needed.

# 1. Start the Multipass VM (on your HOST machine)
echo "[1] Start your Multipass VM (replace <vm-name> with your VM's name):"
echo "    multipass start <vm-name>"
echo

echo "[2] SSH into the VM (replace <vm-name> as needed):"
echo "    multipass shell <vm-name>"
echo

echo "[3] (Inside the VM) Check k3s and kubeconfig permissions:"
echo "    sudo chown ubuntu:ubuntu /etc/rancher/k3s/k3s.yaml"
echo "    sudo chmod 644 /etc/rancher/k3s/k3s.yaml"
echo "    kubectl get nodes"
echo

echo "[4] (Inside the VM) Check if pods are running:"
echo "    cd ~/demo_new_copy  # or your project directory"
echo "    kubectl get pods"
echo "    kubectl get services"
echo

echo "[5] (Inside the VM) If pods are NOT running, re-import images and re-apply deployments:"
echo "    sudo ctr images import flight-backend.tar"
echo "    sudo ctr images import flight-frontend.tar"
echo "    kubectl apply -f k8s/backend-deployment.yaml"
echo "    kubectl apply -f k8s/frontend-deployment.yaml"
echo

echo "[6] (Inside the VM) Start port-forwarding for backend and frontend (use separate terminals):"
echo "    kubectl port-forward svc/flight-backend 8080:8080"
echo "    kubectl port-forward svc/flight-frontend 8081:80"
echo

echo "[7] (On your HOST machine, in separate terminals) Set up SSH tunnels:"
echo "    ssh -L 8080:localhost:8080 ubuntu@<vm-ip>   # Backend"
echo "    ssh -L 8082:localhost:8081 ubuntu@<vm-ip>   # Frontend"
echo

echo "[8] Open in your browser:"
echo "    Frontend: http://localhost:8082"
echo "    Backend API: http://localhost:8080/tickets"
echo

echo "[9] (Optional) Connect to the database:"
echo "    psql -h <db-host> -p <db-port> -U flightuser -d flightdb"
echo

echo "---"
echo "Script complete. Follow the steps above after every reboot to restore your environment." 