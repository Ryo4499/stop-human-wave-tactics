#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT

docker compose exec certbot certbot renew --dry-run
docker compose exec proxy nginx -s reload
