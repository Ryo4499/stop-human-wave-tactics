#!/bin/sh
docker compose down
docker compose build alertmanager prometheus exporter grafana cadvisor nginx-exporter k6 influxdb db
docker compose up -d alertmanager prometheus exporter grafana cadvisor k6 influxdb
docker compose up -d db
docker compose build back certbot proxy 
docker compose up -d back certbot proxy
docker compose build front 
docker compose up -d front
docker compose up -d nginx-exporter
yes | docker image prune
