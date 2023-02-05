FROM node:16-alpine as base

ARG MY_USER
ARG MY_GROUP
ARG MODE

RUN apk update && apk add libressl-dev libffi-dev tzdata curl

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-backend"

RUN chown -R $MY_USER:$MY_GROUP ./
# PROD & rm bind mount
COPY --chown=$MY_USER:$MY_GROUP . .

USER $MY_USER

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  yarn install --production=true --frozen-lockfile --force ; \
  else \
  yarn install --production=false --no-lockfile --pre-lockfile ; \
  fi

RUN yarn build
