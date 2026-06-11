#!/bin/bash
set -e

echo "Building production release..."
npm run build

echo "Starting simple static file server on port 3000..."
python -m http.server 3000 -d public > /tmp/http_server.log 2>&1 &
SERVER_PID=$!

sleep 2
echo "Server started with PID $SERVER_PID"

echo "End-to-end test ready."
