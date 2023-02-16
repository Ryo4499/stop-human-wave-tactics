#!/bin/sh
docker-compose down
docker-compose build --no-cache alertmanager prometheus exporter grafana db certbot
docker-compose up -d alertmanager prometheus exporter grafana db certbot
docker-compose build --no-cache back proxy
docker-compose up -d back proxy
docker-compose build --no-cache front
docker-compose up -d front
yes | docker image prune
