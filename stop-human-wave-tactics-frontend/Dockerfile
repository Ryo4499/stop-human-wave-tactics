FROM node:16-alpine

ARG MY_USER
ARG MY_GROUP
ARG MODE
ARG DOMAIN

RUN apk update && apk add libressl-dev libffi-dev tzdata 

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-frontend"

COPY . . 

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  yarn install --production=true --frozen-lockfile --force --update-checksums ; \
  else \
  yarn install --production=false --no-lockfile --pre-lockfile ; \
  fi
ENV DOCKERIZE_VERSION v0.6.1
RUN apk add --no-cache openssl \
 && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
 && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
 && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

USER $MY_USER
