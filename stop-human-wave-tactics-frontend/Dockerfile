FROM node:16-alpine

ARG MY_USER
ARG MY_GROUP
ARG MODE

RUN apk update && apk add libressl-dev libffi-dev tzdata shadow && npm install -g npm-check-updates

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-frontend"

COPY package.json .
COPY package-lock.json .

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  npm ci ; \
  else \
  npm install && npm audit fix --force ; \
  fi

RUN mkdir ./.next

USER $MY_USER
