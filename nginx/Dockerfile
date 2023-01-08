FROM nginx:stable-alpine

RUN apk update && apk add libressl-dev libffi-dev tzdata certbot certbot-nginx
RUN if [$MODE != "DEV"]; then certbot certonly --nginx -d $DOMAIN -m ryo.p4499@gmail.com --agree-tos -n && certbot renew –post-hook "/sbin/rc-service nginx restart";fi;