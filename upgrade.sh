#!/bin/sh
cd stop-human-wave-tactics-backend
ncu -u target patch && npm audit fix --force
cd ../stop-human-wave-tactics-frontend
ncu -u target patch && npm audit fix --force
