#!/bin/bash
echo "Starting server in port 8080 main:app"
~/.local/bin/gunicorn -b :8080 main:app