#!/bin/sh
docker compose cp  back:/home/node/stop-human-wave-tactics-backend/yarn.lock stop-human-wave-tactics-backend/yarn.lock 
docker compose cp  back:/home/node/stop-human-wave-tactics-backend/package.json stop-human-wave-tactics-backend/package.json 
docker compose cp  front:/home/node/stop-human-wave-tactics-frontend/yarn.lock stop-human-wave-tactics-frontend/yarn.lock 
docker compose cp  front:/home/node/stop-human-wave-tactics-frontend/package.json stop-human-wave-tactics-frontend/package.json 