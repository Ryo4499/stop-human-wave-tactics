#!/bin/sh
docker compose down
docker compose build alertmanager prometheus exporter grafana db
docker compose up -d alertmanager prometheus exporter grafana db
docker compose build back proxy certbot
docker compose up -d back proxy certbot
docker compose build front
docker compose up -d front
yes | docker image prune
