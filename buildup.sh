#!/bin/sh
docker compose down
yes | docker system prune --volumes 
docker compose build alertmanager prometheus exporter grafana nginx-exporter back certbot proxy
docker compose up -d alertmanager prometheus exporter grafana db back certbot proxy
docker compose build front 
docker compose up -d front nginx-exporter
