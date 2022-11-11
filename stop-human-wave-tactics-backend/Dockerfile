FROM node:16-alpine

ARG MY_USER
ARG MY_GROUP
ARG MODE

RUN apk update && apk add libressl-dev libffi-dev tzdata shadow && npm install -g npm-check-updates

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-backend"

RUN rm -fr ./dist/
COPY package.json .
COPY package-lock.json .

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  npm ci ; \
  else \
  npm install ; \
  fi

USER $MY_USER
