FROM node:16-alpine

ARG MY_USER
ARG MY_GROUP
ARG MODE

RUN apk update && apk add libressl-dev libffi-dev tzdata 

WORKDIR "/home/${MY_USER}/stop-human-wave-tactics-frontend"

COPY . . 

RUN if [ "${MODE}" = "PRODUCTION" ]; then \
  yarn install --production=true --frozen-lockfile --force --update-checksums ; \
  else \
  yarn install --production=false --no-lockfile --pre-lockfile ; \
  fi

RUN chown -R $MY_USER:$MY_GROUP ./

USER $MY_USER
