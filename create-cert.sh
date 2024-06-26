#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT
source .env

docker compose exec certbot certbot certonly --webroot -w /usr/share/nginx/html --email $EMAIL -d $DOMAIN --agree-tos
