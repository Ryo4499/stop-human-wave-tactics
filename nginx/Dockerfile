FROM nginx:stable-alpine
#FROM owasp/modsecurity-crs:3.3-nginx-alpine-202304160904

ARG DOMAIN
ARG FRONT_PORT
ARG BACK_PORT
ARG TZ

ENV TZ $TZ

RUN apk update && \
    apk add libressl-dev libffi-dev tzdata && \
    echo $TZ > /etc/timezone && \
    ln -sf /usr/share/zoneinfo/$TZ /etc/localtime

COPY ./nginx.conf.template /etc/nginx/nginx.conf.template
COPY ./conf.d/default.conf.template /etc/nginx/conf.d/default.conf.template

RUN envsubst '$$DOMAIN $$FRONT_PORT $$BACK_PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf ; \
    envsubst '$$DOMAIN $$FRONT_PORT $$BACK_PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf ;