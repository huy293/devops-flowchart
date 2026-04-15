#!/bin/bash

# deploy-script.sh - A comprehensive deployment script

# This script will deploy the application with error handling and logging.

# Set variables
LOG_FILE="/var/log/deploy.log"
APP_DIR="/path/to/application"

# Function to log messages
log() {
    local MESSAGE="$1"
    echo "$(date -u '+%Y-%m-%d %H:%M:%S') - $MESSAGE" >> $LOG_FILE
}

# Start logging
log "Deployment started."

# Check if application directory exists
if [ ! -d "$APP_DIR" ]; then
    log "Error: Application directory $APP_DIR does not exist."
    exit 1
fi

# Navigate to application directory
cd $APP_DIR || { log "Error: Failed to change directory to $APP_DIR."; exit 1; }

# Pull latest code from repository
log "Pulling latest code from repository..."
git pull origin main >> $LOG_FILE 2>&1
if [ $? -ne 0 ]; then
    log "Error: Failed to pull latest code."
    exit 1
fi

# Install dependencies
log "Installing dependencies..."
if ! npm install >> $LOG_FILE 2>&1; then
    log "Error: Dependency installation failed."
    exit 1
fi

# Build the application
log "Building the application..."
if ! npm run build >> $LOG_FILE 2>&1; then
    log "Error: Build process failed."
    exit 1
fi

# Deploy the application
log "Deploying the application..."
if ! pm2 restart app >> $LOG_FILE 2>&1; then
    log "Error: Application deployment failed."
    exit 1
fi

# End logging
log "Deployment completed successfully."