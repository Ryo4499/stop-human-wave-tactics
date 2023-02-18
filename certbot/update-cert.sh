#!/bin/sh
docker compose run --rm certbot certonly --webroot -w /var/www/html -d $DOMAIN
