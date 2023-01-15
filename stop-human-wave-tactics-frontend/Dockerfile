FROM node:16-alpine as base

ARG MY_USER
ARG MY_GROUP
ARG MODE

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-frontend"

COPY . .

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  yarn install --production=true --frozen-lockfile --force --update-checksums ; \
  else \
  yarn install --production=false --no-lockfile --pre-lockfile ; \
  fi

FROM node:16-alpine as builder

ARG MY_USER
ARG MY_GROUP
ARG MODE

ENV NEXT_PUBLIC_BACKEND_URL="http://back:1337/graphql"

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-frontend"
COPY --from=base --chown=$MY_USER:$MY_GROUP "/home/${MY_USER}/stop-human-wave-tactics-frontend" "/home/${MY_USER}/stop-human-wave-tactics-frontend"

USER $MY_USER