FROM node:16-alpine

ARG MY_USER
ARG MY_GROUP
ARG MODE

RUN apk update && apk add libressl-dev libffi-dev tzdata shadow && groupadd $MY_GROUP

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-frontend"

COPY package.json .
COPY yarn.lock .

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  yarn install --production=true --frozen-lockfile --force --update-checksums ; \
  else \
  yarn install --production=false --no-lockfile --pre-lockfile ; \
  fi

RUN mkdir ./.next

USER $MY_USER
