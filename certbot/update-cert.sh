#!/bin/bash
CURRENT=$(
    cd $(dirname $0)
    pwd
)
echo $CURRENT
source $CURRENT/../.env
docker run --mount type=bind,source=$CURRENT/letsencrypto,target=/etc/letsencrypto --mount type=bind,source=$CURRENT/html,target=/var/www/html --rm certbot/certbot:latest certonly --webroot -w /var/www/html -d $DOMAIN --agree-tos --email ar44.blog@gmail.com
