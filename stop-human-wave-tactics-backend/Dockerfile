FROM node:16-alpine as base

ARG MY_USER
ARG MY_GROUP
ARG MODE

RUN apk update && apk add libressl-dev libffi-dev tzdata 

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-backend"

# PROD & rm bind mount
COPY . .

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  yarn install --production=true --frozen-lockfile --force ; \
  else \
  yarn install --production=false --no-lockfile --pre-lockfile ; \
  fi

FROM node:16-alpine as builder

ARG MY_USER
ARG MY_GROUP
ARG MODE
COPY --from=base --chown=$MY_USER:$MY_GROUP "/home/${MY_USER}/stop-human-wave-tactics-backend" "/home/${MY_USER}/stop-human-wave-tactics-backend"

USER $MY_USER

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-backend"
RUN yarn build

ENTRYPOINT yarn dev
