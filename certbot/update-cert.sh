#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT
source $CURRENT/../.env

docker compose run --rm certbot certonly --webroot -w /usr/share/nginx/html --email $EMAIL -d $DOMAIN --agree-tos