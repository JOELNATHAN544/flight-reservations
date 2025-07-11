#!/bin/bash
# sync_to_vm.sh
# Usage: bash sync_to_vm.sh

# Set these variables as needed
LOCAL_PROJECT_DIR="/home/nathan-ws/Projects/java/demo_new"
VM_NAME="k3s"
VM_TARGET_DIR="/home/ubuntu/demo_new_copy"

echo "==> Cleaning up build artifacts and .git (if any)..."
cd "$LOCAL_PROJECT_DIR"
rm -rf build .git .gradle

echo "==> Transferring project to VM..."
multipass transfer "$LOCAL_PROJECT_DIR" "$VM_NAME:$VM_TARGET_DIR-tmp"

echo "==> Updating project in VM..."
multipass exec "$VM_NAME" -- bash -c "
    rm -rf $VM_TARGET_DIR
    mv $VM_TARGET_DIR-tmp $VM_TARGET_DIR
    echo '==> Project updated in $VM_TARGET_DIR'
"

echo "==> Done! Your project is now synced to the VM."